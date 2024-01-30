import {useParams} from 'react-router-dom';
import React, {useEffect, useState} from 'react';
import AxiosInstance from '../../config/axiosInstance';
import Footer from "../cards/footer";
import DefaultCard from "../cards/default_card";


interface Product {
    _id: string,
    name: string,
    category:string
    description: string,
    image: string,
    unitPrice: number,

    qtyOnHand: number
}

const ProductDetails: React.FC = () => {


    const {id} = useParams();
    const {category} = useParams();
    const [product, setProduct] = useState<Product | null>(null);
    const [products, setProducts] = useState<Product[]>([]);


    useEffect(() => {
        const fetchProduct = async () => {
            try {
                const response = await AxiosInstance.get(`/products/find-by-id/${id}`);
                setProduct(response.data);
                findAllProducts(product);
            } catch (error) {
                console.error('Error fetching product:', error);
            }
        };

        fetchProduct();
    }, [id]);

    useEffect(() => {
        findAllProducts();
    }, [])
    const findAllProducts = async () => {
        const response = await AxiosInstance.get(`/products/find-all?category=${category}&page=1&size=10`);
        setProducts(response.data);
        /*if(product || true){

        }else{
            console.log("no product bossa")
        }*/
    }



    return (
        <>
            <div className='container-fluid align-content-lg-center justify-content-center col-lg-8 col-md-4 col-sm-2 '>
                {product ? (
                    <div className="card mb-3 align-content-lg-between" style={{marginTop: '10%'}}>
                        <div className="row g-0">
                            <div className="col-md-6">
                                <img src={product.image}
                                     style={{maxWidth: '36rem', maxHeight: '36rem', margin: '4%', overflow:'hidden'}}
                                     className="img-fluid rounded-start" alt={product.name}/>
                            </div>
                            <div className="col-md-6">
                                <div className="card-body" style={{margin: '1%'}}>
                                    <h1 className="card-title">{product.name}</h1>
                                    <p className="card-text"
                                       style={{maxHeight: '6rem', overflow: 'hidden'}}>{product.description}</p>
                                    <h3 className="card-title_price">Rs.{product.unitPrice}.00</h3>
                                    <p>Quantity on Hand: {product.qtyOnHand}</p>
                                    <p className="card-text"><small className="text-muted">Last updated 3 mins
                                        ago</small></p>
                                    <div className="d-flex align-items-center">
                                        <button className="btn btn-primary"
                                                style={{margin: '5px', fontSize: "20px", padding: "10px 20px"}}>Add to
                                            Cart
                                        </button>
                                        <button className="btn btn-primary"
                                                style={{margin: '5px', fontSize: "20px", padding: "10px 20px"}}>Buy Now
                                        </button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                ) : (
                    <p>Loading...</p>
                )}
            </div>
            <h1 style={{textAlign: "center", width: "100%"}}>Featured Products</h1>
            <div
                className='container-fluid align-content-lg-center justify-content-between d-flex flex-wrap col-lg-8 col-md-4 col-sm-2 '>
                {products.map((prod) => (
                    <DefaultCard title={prod.name} thumbnail={prod.image} description={prod.description}
                                 price={prod.unitPrice} key={prod._id} _id={prod._id}/>
                ))}
            </div>
            <Footer/>
        </>
    );
}
export default ProductDetails;