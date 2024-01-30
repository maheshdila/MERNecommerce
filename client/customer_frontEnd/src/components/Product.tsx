/*
import React, {ChangeEvent, useEffect, useState} from "react";
import AxiosInstance from '../config/axiosInstance.ts';
import {imageDb} from '../config/firebase.ts';
import { getDownloadURL, listAll, ref, uploadBytes } from "firebase/storage";
*/


//import { storage } from "./firebase";


/*
interface Product{
    _id:string,
    name:string,
    category:string,
    description:string,
    image:string
    unitPrice:number
    qtyOnHand:number
}
*/

/*
const Product:React.FC = ()=>{

    const [products, setProducts]=useState<Product[]>([]);
    const [image, setImage]=useState<File | null>(null);

    const handleFile = async (event:React.ChangeEvent<HTMLInputElement>)=>{
        // @ts-ignore
        setImage(event.target.files[0]);
    }


    const [name,setName]=useState('');
    const [category,setCategory]=useState('');
    const [description,setDescription]=useState('');
    const [unitPrice,setUnitPrice]=useState<number | ''>('');
    const [qtyOnHand,setQtyOnHand]=useState<number | ''>('');
    //const [imageUrl,setImageUrl]=useState('');
    useEffect(()=>{
        findAllProducts();
    }, [])


    /!* const updateProduct= async ()=>{
         try{

             await axios.put('/customers/update/'+selectedCustomerId,{
                 name:updateName,address:updateAddress,salary:updateSalary
             });
             setModalState(false);
             findAllCustomers();

         }catch (e){
             console.log(e)
         }
     }*!/

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
*/

/*const Product:React.FC = ()=>{
    const [menu, setMenu] = useState("shop");

    return(
        <>
            <div className="navbar">
            <ul className="nav_menu">
                <li
                    onClick={() => {
                        setMenu("shop");
                    }}
                    style={{
                        borderBottom: menu === "shop" ? "4px solid #ff4141" : "none",
                    }}
                >

                </li>
                <li
                    onClick={() => {
                        setMenu("men");
                    }}
                    style={{
                        borderBottom: menu === "men" ? "4px solid #ff4141" : "none",
                    }}
                >

                </li>
                <li
                    onClick={() => {
                        setMenu("women");
                    }}
                    style={{
                        borderBottom: menu === "women" ? "4px solid #ff4141" : "none",
                    }}
                >

                </li>
                <li
                    onClick={() => {
                        setMenu("kids");
                    }}
                    style={{
                        borderBottom: menu === "kids" ? "4px solid #ff4141" : "none",
                    }}
                >

                </li>
            </ul>
            </div>
        </>
    )
}*/

//export default Product;

//import React, { useContext } from "react";
import { useState } from "react";
import { Link } from "react-router-dom";

const Product: React.FC =()=> {

    /*const styleObj:React.CSSProperties={
        font-size: "20px",
        font-weight: "bold",
    background-color: rgb(238, 241, 243);
    box-shadow: 0 3px 8px rgba(0, 0, 0, 0.6);
    padding: 10px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    position: fixed;
    top: 0;
    width: 100%;
    z-index: 100;
    height: 50px;
    }*/
    const [menu, setMenu] = useState("shop");
    //const { totalCartItems } = useContext(ShopContext);
    return (
        <div className="navbar">
            {/*<div className="navbar__logo">
                <Link to="/">
                    <img src={logo} alt="logo" />
                </Link>

                <h3>E_Shopping </h3>
            </div>
*/}
            <ul className="nav_menu">
                <li
                    onClick={() => {
                        setMenu("shop");
                    }}
                    style={{
                        borderBottom: menu === "shop" ? "4px solid #ff4141" : "none",
                    }}
                >
                    <Link to="/"> Shop</Link>
                </li>
                <li
                    onClick={() => {
                        setMenu("men");
                    }}
                    style={{
                        borderBottom: menu === "men" ? "4px solid #ff4141" : "none",
                    }}
                >
                    <Link to="/men">Men</Link>
                </li>
                <li
                    onClick={() => {
                        setMenu("women");
                    }}
                    style={{
                        borderBottom: menu === "women" ? "4px solid #ff4141" : "none",
                    }}
                >
                    <Link to="/women">Women</Link>
                </li>
                <li
                    onClick={() => {
                        setMenu("kids");
                    }}
                    style={{
                        borderBottom: menu === "kids" ? "4px solid #ff4141" : "none",
                    }}
                >
                    <Link to="/kids">Kids</Link>
                </li>
            </ul>

            <div className="navbar__cart">
                <Link to="/login">
                    <button>Login</button>
                </Link>
                <Link to="/cart">
                    <img src={cart_icon} alt="cart" />
                </Link>

                <span className="cart_count">{totalCartItems()}</span>
            </div>
        </div>
    );
}

export default Product;

