import 'bootstrap/dist/css/bootstrap.min.css';
import '@popperjs/core/dist/umd/popper.min.js';
import 'bootstrap/dist/js/bootstrap.min.js';
import 'bootstrap/dist/css/bootstrap.min.css';
import {Carousel} from "react-bootstrap";
import DefaultCard from "./cards/default_card";
import Footer from "./cards/footer";
import {useEffect, useState} from "react";
import Product from "./Product.tsx";
import AxiosInstance from '../config/axiosInstance.ts';
//import { Link, useNavigate } from "react-router-dom";

//import { Carousel } from 'react-bootstrap';

const  Home:React.FC = ()=> {
    const [products, setProducts]=useState<Product[]>([]);

    useEffect(()=>{
        findAllProducts();
    }, [])
    const findAllProducts= async ()=>{
        const response = await AxiosInstance.get('/products/find-all?page=1&size=10');
        setProducts(response.data);
    }


    return (
        <>
            <div className='container-fluid align-content-lg-center justify-content-center col-lg-8 col-md-4 col-sm-2 '>
                <br></br>
                <Carousel>
                    <Carousel.Item interval={2000}>
                        <img src="https://cdn.hostadvice.com/2023/03/eCommerce-Website-Development.png"
                             className="d-block d-flex flex-fill h-50 w-100" alt="adz_01"/>
                    </Carousel.Item>
                    <Carousel.Item interval={2000}>
                        <img
                            src="https://cdn.hostadvice.com/2023/02/eCommerce-Website-Builders-Types-Features-How-to-Choose.png"
                            className="d-block h-50 w-100 " alt="..."/>
                    </Carousel.Item>
                    <Carousel.Item interval={2000}>
                        <img
                            src="https://d1krbhyfejrtpz.cloudfront.net/blog/wp-content/uploads/2020/08/07152719/How-Personalization-Can-Lower-E-commerce-Website-Bounce-Rates.png"
                            className="d-block h-50 w-100" alt="..."/>
                    </Carousel.Item>
                </Carousel>
            </div>
            <br></br>
            <div className='container-fluid align-content-lg-center justify-content-between d-flex flex-wrap col-lg-8 col-md-4 col-sm-2 '>
                {products.map((prod)=>(
                    <DefaultCard title={prod.name} category={prod.category} thumbnail={prod.image} description={prod.description} price={prod.unitPrice} key={prod._id}  _id={prod._id} product={prod}/>
                ))}


            </div>
            <Footer/>


        </>
    );
}


export default Home;
