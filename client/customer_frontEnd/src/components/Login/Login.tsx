import {Link} from "react-router-dom";
import "./additional.css";
import React, {useState} from "react";
import AxiosInstance from "../../config/axiosInstance";
const  Login:React.FC =()=> {
    const [email, setEmail]=useState('');
    const [password, setPassword]=useState('');

    const login = async()=>{
        try{
const response = await AxiosInstance.post('/users/login',{
                email,password
            });

            //==============
            const expirationDate = new Date();
            expirationDate.setDate(expirationDate.getDate()+2);

            const cookieValue=encodeURIComponent('token')+'='
                +encodeURIComponent(response.data)+'; expires='+expirationDate.toUTCString()+'; path=/';

            document.cookie=cookieValue;
            console.log(response.data);

            setEmail('');
            setPassword('');
        }
        catch (e){
            console.log(e)
        }
    };

    return (

        <div className="loginBody">
            <div className="wrapper">
                <div className="form-box login">
                    <h2>Login</h2>
                    <form action="src/components">
                        <div className="input-box">
              <span className="icon">

              </span>
                            <input type="email"
                                onChange={(e)=>{setEmail(e.target.value)}}/>
                            <label htmlFor="">email</label>
                        </div>
                        <div className="input-box">

                            <input type="password"
                                onChange={(e)=>{setPassword(e.target.value)}}/>
                            <label htmlFor="">Password</label>
                        </div>



                        <button type="button" className="button_1"  onClick={login}>
                            Login
                        </button>

                        <div className="login-register">
                            <p>
                                Don't have an account?{" "}
                                <Link to="/register" className="register-link">
                                    Register
                                </Link>
                            </p>
                        </div>
                    </form>
                </div>
            </div>
        </div>

    )
}



export default Login;