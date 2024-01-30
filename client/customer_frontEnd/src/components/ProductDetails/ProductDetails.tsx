
import {useParams} from 'react-router-dom';
import React, {useEffect, useState} from 'react';
import AxiosInstance from '../../config/axiosInstance';
import Footer from "../cards/footer";


interface Product {
    _id: string,
    name: string,
    description: string,
    image: string,
    unitPrice: number,
    qtyOnHand: number
}
/*
const ProductDetails: React.FC = () => {
    const {id} = useParams();
    const [product, setProduct] = useState<Product | null>(null);

    useEffect(() => {
        const fetchProduct = async () => {
            try {
                const response = await AxiosInstance.get(`/products/find-by-id/${id}`);
                setProduct(response.data);
            } catch (error) {
                console.error('Error fetching product:', error);
            }
        };

        fetchProduct();
    }, [id]);

    return (
        <div className='container-fluid align-content-lg-center justify-content-center col-lg-8 col-md-4 col-sm-2 '>
            {product ? (
                <>
                    <div
                        >
                        <div className="card mb-3" >
                            <div className="row g-0">
                                <div className="col-md-4">
                                    <img src={product.image} className="img-fluid rounded-start" alt={product.name}/>
                                </div>
                                <div className="col-md-8">
                                    <div className="card-body">
                                        <h5 className="card-title">{product.name}</h5>
                                        <p className="card-text">{product.description}</p>
                                        <p className="card-text"><small className="text-muted">Last updated 3 mins
                                            ago</small></p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <h1>{product.name}</h1>
                    <p>{product.description}</p>
                    <img src={product.image} alt={product.name}/>
                    <p>Unit Price: ${product.unitPrice}</p>
                    <p>Quantity on Hand: {product.qtyOnHand}</p>
                </>
                /!*<>
                    <div className="productDisplay">
                        <div className="display-left">
                            <div className="productDisplay-img-list">
                                {/!*<img src={product.image} alt="" />
                    <img src={product.image} alt="" />
                    <img src={product.image} alt="" />
                    <img src={product.image} alt="" />*!/}
                            </div>

                            <div className="productDisplay-img">
                                <img className="productDisplay-img-main" src={} alt="" />
                            </div>
                        </div>

                        <div className="display-right">
                            <h1>{product?.name}</h1>
                            <div className="display-right-star">
                                {/!*<img src={star_icon} alt="" />
                    <img src={star_icon} alt="" />
                    <img src={star_icon} alt="" />
                    <img src={star_icon} alt="" />
                    <img src={star_dull_icon} alt="" />*!/}
                                <p>(122)</p>
                            </div>

                            <div className="display-right-price">
                                <div className="rightPriceOld">Rs {product?.unitPrice}</div>
                                <div className="rightPriceNew">Rs {product?.unitPrice}</div>
                            </div>

                            <div className="display-right-description">
                                <p>{product?.description}</p>
                            </div>

                            <div className="display-right-size">
                                <h3>Size</h3>
                                <div className="sizeList">
                                    <div className="sizeList-item">S</div>
                                    <div className="sizeList-item">M</div>
                                    <div className="sizeList-item">L</div>
                                    <div className="sizeList-item">XL</div>
                                    <div className="sizeList-item">XXL</div>
                                </div>
                            </div>

                            <button
                                onClick={() => {
                                    //addToCart(product.id);
                                }}
                            >
                                ADD TO CART
                            </button>
                            <p className="displayCategory">
                                <span>Category :</span>Women , T-shirt, Crop Top{" "}
                            </p>
                            <p className="displayCategory">
                                <span>Tags :</span>Modern , Latest{" "}
                            </p>
                        </div>
                    </div>
                </>*!/
            ) : (
                <p>Loading...</p>
            )}
        </div>
    );
}

/!*
export default ProductDetails;
*!/

//import React, { useContext } from "react";
/!*import "./ProductDetails.css";
import AxiosInstance from "../../config/axiosInstance";
import {useEffect, useState} from "react";
import Product from "../Product";
import {useParams} from "react-router-dom";*!/
//import star_icon from "../Assets/star_icon.png";
//import star_dull_icon from "../Assets/star_dull_icon.png";
//import { ShopContext } from "../../Context/ShopContent";

/!*
const ProductDetails: React.FC  = () => {
    //const { product } = props;
    //const { addToCart } = useContext(ShopContext);
    const {id} = useParams();
    const [product, setProduct] = useState<Product | null>(null);

    useEffect(() => {
        const fetchProduct = async () => {
            try {
                const response = await AxiosInstance.get(`/products/find-by-id/${id}`);
                setProduct(response.data);
            } catch (error) {
                console.error('Error fetching product:', error);
            }
        };

        fetchProduct();
    }, [id]);

    /!*return (
        <>
        <div className="productDisplay">
            <div className="display-left">
                <div className="productDisplay-img-list">
                    {/!*<img src={product.image} alt="" />
                    <img src={product.image} alt="" />
                    <img src={product.image} alt="" />
                    <img src={product.image} alt="" />*!/}
                </div>

                <div className="productDisplay-img">
                    <img className="productDisplay-img-main" src={} alt="" />
                </div>
            </div>

            <div className="display-right">
                <h1>{product?.name}</h1>
                <div className="display-right-star">
                    {/!*<img src={star_icon} alt="" />
                    <img src={star_icon} alt="" />
                    <img src={star_icon} alt="" />
                    <img src={star_icon} alt="" />
                    <img src={star_dull_icon} alt="" />*!/}
                    <p>(122)</p>
                </div>

                <div className="display-right-price">
                    <div className="rightPriceOld">Rs {product?.unitPrice}</div>
                    <div className="rightPriceNew">Rs {product?.unitPrice}</div>
                </div>

                <div className="display-right-description">
                    <p>{product?.description}</p>
                </div>

                <div className="display-right-size">
                    <h3>Size</h3>
                    <div className="sizeList">
                        <div className="sizeList-item">S</div>
                        <div className="sizeList-item">M</div>
                        <div className="sizeList-item">L</div>
                        <div className="sizeList-item">XL</div>
                        <div className="sizeList-item">XXL</div>
                    </div>
                </div>

                <button
                    onClick={() => {
                        //addToCart(product.id);
                    }}
                >
                    ADD TO CART
                </button>
                <p className="displayCategory">
                    <span>Category :</span>Women , T-shirt, Crop Top{" "}
                </p>
                <p className="displayCategory">
                    <span>Tags :</span>Modern , Latest{" "}
                </p>
            </div>
        </div>
        </>

    );*!/
    /!*return (<div className='container-fluid align-content-lg-center justify-content-center col-lg-8 col-md-4 col-sm-2 '>
        {product ? (
            /!*<>
                <div
                    >
                    <div className="card mb-3" >
                        <div className="row g-0">
                            <div className="col-md-4">
                                <img src={product.image} className="img-fluid rounded-start" alt={product.name}/>
                            </div>
                            <div className="col-md-8">
                                <div className="card-body">
                                    <h5 className="card-title">{product.name}</h5>
                                    <p className="card-text">{product.description}</p>
                                    <p className="card-text"><small className="text-muted">Last updated 3 mins
                                        ago</small></p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>


                <h1>{product.name}</h1>
                <p>{product.description}</p>
                <img src={product.image} alt={product.name}/>
                <p>Unit Price: ${product.unitPrice}</p>
                <p>Quantity on Hand: {product.qtyOnHand}</p>
            </>*!/
            <>
                <div className="productDisplay">
                    <div className="display-left">
                        <div className="productDisplay-img-list">
                            {/!*<img src={product.image} alt="" />
                    <img src={product.image} alt="" />
                    <img src={product.image} alt="" />
                    <img src={product.image} alt="" />*!/}
                        </div>

                        <div className="productDisplay-img">
                            <img className="productDisplay-img-main" src={product.image} alt="" />
                        </div>
                    </div>

                    <div className="display-right">
                        <h1>{product.name}</h1>
                        <div className="display-right-star">
                            {/!*<img src={star_icon} alt="" />
                    <img src={star_icon} alt="" />
                    <img src={star_icon} alt="" />
                    <img src={star_icon} alt="" />
                    <img src={star_dull_icon} alt="" />*!/}
                            <p>(122)</p>
                        </div>

                        <div className="display-right-price">
                            <div className="rightPriceOld">Rs {product.unitPrice}</div>
                            <div className="rightPriceNew">Rs {product.unitPrice}</div>
                        </div>

                        <div className="display-right-description">
                            <p>{product.description}</p>
                        </div>

                        <div className="display-right-size">
                            <h3>Size</h3>
                            <div className="sizeList">
                                <div className="sizeList-item">S</div>
                                <div className="sizeList-item">M</div>
                                <div className="sizeList-item">L</div>
                                <div className="sizeList-item">XL</div>
                                <div className="sizeList-item">XXL</div>
                            </div>
                        </div>

                        <button className='button2'
                            onClick={() => {
                                //addToCart(product.id);
                            }}
                        >
                            ADD TO CART
                        </button>
                        <p className="displayCategory">
                            <span>Category :</span>Women , T-shirt, Crop Top{" "}
                        </p>
                        <p className="displayCategory">
                            <span>Tags :</span>Modern , Latest{" "}
                        </p>
                    </div>
                </div>
            </>
        ) : (
            <p>Loading...</p>
        )}
    </div>);*!/
};
*!/

export default ProductDetails;
*/


// ... (imports and interfaces)

const ProductDetails: React.FC = () => {


    const { id } = useParams();
    const [product, setProduct] = useState<Product | null>(null);
    //const style = {ba}


    useEffect(() => {
        const fetchProduct = async () => {
            try {
                const response = await AxiosInstance.get(`/products/find-by-id/${id}`);
                setProduct(response.data);
            } catch (error) {
                console.error('Error fetching product:', error);
            }
        };

        fetchProduct();
    }, [id]);

    return (
        <>
        <div className='container-fluid align-content-lg-center justify-content-center col-lg-8 col-md-4 col-sm-2 '>
            {product ? (
                <div className="card mb-3 align-content-lg-between" style={{marginTop:'10%' }}>
                    <div className="row g-0">
                        <div className="col-md-6" >
                            <img src={product.image} style={{maxWidth:'36rem',maxHeight:'36rem', marginTop:'4%'}} className="img-fluid rounded-start" alt={product.name}/>
                        </div>
                        <div className="col-md-6" >
                            <div className="card-body" style={{margin:'1%'}}>
                                {/*<h5 className="card-title">{product.name}</h5>
                                <p className="card-text">{product.description}</p>
                                <p className="card-text"><small className="text-muted">Last updated 3 mins ago</small></p>
                                <p>Unit Price: ${product.unitPrice}</p>
                                <p>Quantity on Hand: {product.qtyOnHand}</p>*/}
                                <h1 className="card-title">{product.name}</h1>
                                <p className="card-text" style={{ maxHeight: '6rem', overflow: 'hidden' }}>{product.description}</p>
                                <h3 className="card-title_price">Rs.{product.unitPrice}.00</h3>
                                <p>Quantity on Hand: {product.qtyOnHand}</p>
                                <p className="card-text"><small className="text-muted">Last updated 3 mins ago</small></p>
                                <div className="d-flex align-items-center">
                                    <button className="btn btn-primary" style={{margin:'5px',fontSize: "20px", padding: "10px 20px"}}>Add to Cart</button>
                                    <button className="btn btn-primary" style={{margin:'5px',fontSize: "20px", padding: "10px 20px"}}>Buy Now</button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            ) : (
                <p>Loading...</p>
            )}
        </div>
        <Footer/>
        </>
    );
}
export default ProductDetails;