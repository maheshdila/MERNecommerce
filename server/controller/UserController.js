const userSchema= require('../model/UserSchema');
const bcrypt= require('bcrypt');
const salt=10;
const nodemailer= require('nodemailer');
const jsonwebtoken =require('jsonwebtoken');

const register = (req,resp) => {

    userSchema.findOne({'email':req.body.email}).then(result=>{
        if(result==null){
            bcrypt.hash(req.body.password,salt,function (err,hash) {
                if (err){
                    return resp.status(500).json(err);
                }
                const user = new userSchema({
                    fullName:req.body.fullName,
                    password:hash,
                    email:req.body.email,
                    //userType: req.body.userType,
                    userType:'customer',
                    activeState:true
                });
                user.save().then(saveResponse=>{
                    const payload={
                        email:saveResponse.email,
                        userType:saveResponse.userType
                    }

                    const secretKey=process.env.SECRET_KEY;
                    const expiresIn='24h';

                    const token = jsonwebtoken.sign(payload,secretKey,{expiresIn});
                    return resp.status(200).json(token);

                    //return resp.status(201).json(saveResponse.email);
                }).catch(error=>{
                    return resp.status(500).json(error);
                });

                /*const transporter= nodemailer.createTransport({
                    service:'gmail',
                    auth:{
                        user:'maheshdilshan716@gmail.com',
                        pass:'fray sesy zufi vehp',
                    }
                });

                const mailOption={
                    from:'maheshdilshan716@gmail.com',
                    to:req.body.email,
                    subject:'New Account Creation',
                    text:'You have Created Your Account!'
                }
                transporter.sendMail(mailOption, function (error, info) {
                    if (error){
                        return resp.status(500).json({'error':error});
                    }else{
                        user.save().then(saveResponse=>{
                            return resp.status(201).json({'message':'Saved!'});
                        }).catch(error=>{
                            return resp.status(500).json(error);
                        });
                    }
                })*/
            })
        }else{
            return resp.status(409).json({'error':'already exists!'});
        }
    })


}
const login = (req,resp) => {
    userSchema.findOne({'email':req.body.email}).then(selectedUser=>{
        if (selectedUser!==null){
            bcrypt.compare(req.body.password, selectedUser.password, function(err, result) {
                if (err){
                    return resp.status(500).json({'message':'internal server error'});
                }

                if(result){
                    const payload={
                        email:selectedUser.email
                    }

                    const secretKey=process.env.SECRET_KEY;
                    const expiresIn='24h';

                    const token = jsonwebtoken.sign(payload,secretKey,{expiresIn});
                    return resp.status(200).json(token);
                }else{
                    return resp.status(401).json({'message':'Password is incorrect!'});
                }
            });
        }else{
            return resp.status(404).json({'message':'not found!'});
        }
    });
}

module.exports={
    register,login
}