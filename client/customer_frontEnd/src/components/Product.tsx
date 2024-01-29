import React, {ChangeEvent, useEffect, useState} from "react";
import AxiosInstance from '../config/axiosInstance.ts';
import {imageDb} from '../config/firebase.ts';
import { getDownloadURL, listAll, ref, uploadBytes } from "firebase/storage";


//import { storage } from "./firebase";


interface Product{
    _id:string,
    name:string,
    description:string,
    image:string
    unitPrice:number
    qtyOnHand:number
}

const Product:React.FC = ()=>{

    const [products, setProducts]=useState<Product[]>([]);
    const [image, setImage]=useState<File | null>(null);

    const handleFile = async (event:React.ChangeEvent<HTMLInputElement>)=>{
        // @ts-ignore
        setImage(event.target.files[0]);
    }


    const [name,setName]=useState('');
    const [description,setDescription]=useState('');
    const [unitPrice,setUnitPrice]=useState<number | ''>('');
    const [qtyOnHand,setQtyOnHand]=useState<number | ''>('');
    //const [imageUrl,setImageUrl]=useState('');
    useEffect(()=>{
        findAllProducts();
    }, [])


    /* const updateProduct= async ()=>{
         try{

             await axios.put('/customers/update/'+selectedCustomerId,{
                 name:updateName,address:updateAddress,salary:updateSalary
             });
             setModalState(false);
             findAllCustomers();

         }catch (e){
             console.log(e)
         }
     }*/

    const findAllProducts= async ()=>{
        const response = await AxiosInstance.get('/products/find-all?searchText=&page=1&size=10');
        setProducts(response.data);
    }

    const deleteProduct= async (id: string)=>{
        await AxiosInstance.delete('/products/delete-by-id/'+id);
        findAllProducts();
    }


    const saveProduct=async ()=>{
        let imageUrl='https://cdn.4imprint.com/qtz/homepage/categories/images21/drinkware0222.jpg';
        if(image){
            try{
                const imgRef =  ref(imageDb,`files/${Math.random()}-${image.name}`)
                uploadBytes(imgRef,image).then(value=>{
                    console.log(value)
                    getDownloadURL(value.ref).then(async url => {
                        //setImageUrl(url)
                        console.log(url);

                        await AxiosInstance.post('/products/create', {
                            name, description, unitPrice, qtyOnHand, image: url
                        });
                    })
                })

            }catch (e) {
                console.log(e);
            }
        }

        try{
            //await AxiosInstance.post('/products/create',{
            //    name,description,unitPrice,qtyOnHand,image:imageUrl
            //});
            setName('');
            setDescription('');
            setQtyOnHand('');
            setUnitPrice('');

            findAllProducts();

        }catch (e){
            console.log(e)
        }
    }


    const styleObj:React.CSSProperties={
        marginBottom:'20px'
    }

    return (
        <>
            <br/>

            <div className="container">
                <div className="row">
                    <div className="col-12 col-sm-6 col-md-4" style={styleObj}>
                        <div className="form-group">
                            <label htmlFor="productName">Product Name</label>
                            <input value={name} type="text" onChange={(e)=>setName(e.target.value)} className='form-control' id='productName'/>
                        </div>
                    </div>
                    <div className="col-12 col-sm-6 col-md-4" style={styleObj}>
                        <div className="form-group">
                            <label htmlFor="price">Unit Price</label>
                            <input  value={unitPrice} onChange={(e)=>setUnitPrice(parseFloat(e.target.value))} type="number" className='form-control' id='price'/>
                        </div>
                    </div>
                    <div className="col-12 col-sm-6 col-md-4" style={styleObj}>
                        <div className="form-group">
                            <label htmlFor="qty">QTY On Hand</label>
                            <input value={qtyOnHand} onChange={(e)=>setQtyOnHand(parseFloat(e.target.value))} type="number" className='form-control' id='qty'/>
                        </div>
                    </div>
                    <div className="col-12 col-sm-6 col-md-4" style={styleObj}>
                        <div className="form-group">
                            <label htmlFor="image">Product Image</label>
                            <input onChange={handleFile}
                                   type="file" className='form-control' id='image'/>
                        </div>
                    </div>
                    <div className="col-12">
                        <div className="form-group">
                            <label htmlFor="description">Description</label>
                            <textarea value={description} onChange={(e)=>setDescription(e.target.value)}  rows={5} className='form-control' id='description'/>
                        </div>
                    </div>

                </div>
                <br/>
                <div className="row">
                    <div className="col-12">
                        <button className='btn btn-primary col-12' onClick={saveProduct}>Save Product</button>
                    </div>
                </div>
                <hr/>
                <div className="row">
                    <div className="col-12">
                        <form className='col-12'>
                            <input type="search" className='form-control' placeholder='Search Products here'/>
                        </form>
                    </div>
                </div>
                <br/>
                <div className="row">
                    <div className="col-12">

                        <table className='table table-hover table-bordered'>
                            <thead>
                            <tr>
                                <th>#Id</th>
                                <th>Product Name</th>
                                <th>QTY On Hand</th>
                                <th>Unit Price</th>
                                <th>Delete Option</th>
                                <th>Update Option</th>
                                <th>See more</th>
                            </tr>
                            </thead>
                            <tbody>
                            {products.map((product, index)=>
                                <tr key={index}>
                                    <td>#{index}</td>
                                    <td>{product.name}</td>
                                    <td>{product.qtyOnHand}</td>
                                    <td>{product.unitPrice}</td>
                                    <td>
                                        <button className='btn btn-outline-danger btn-sm'
                                                onClick={()=>{
                                                    if(confirm('are you sure?')){
                                                        deleteProduct(product._id)
                                                    } }}
                                        >Delete</button>
                                    </td>
                                    <td>
                                        <button className='btn btn-outline-success btn-sm'
                                                onClick={()=>alert('need to modify!')}
                                        >Update</button>
                                    </td>
                                    <td>
                                        <button className='btn btn-outline-info btn-sm'
                                                onClick={()=>alert('need to modify!')}
                                        >View</button>
                                    </td>
                                </tr>
                            )}
                            </tbody>
                        </table>

                    </div>
                </div>
            </div>

        </>
    )
}
export default Product;