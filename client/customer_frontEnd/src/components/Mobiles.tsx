
import {useEffect, useState} from "react";
import {Link} from "react-router-dom";
import DefaultCard from "./cards/default_card";
import Footer from "./cards/footer";
import AxiosInstance from "../config/axiosInstance";
import {useNavigate} from "react-router-dom";
const Mobiles: React.FC = () => {
    const [products, setProducts]=useState<Mobiles[]>([]);
    const navigate = useNavigate();
    useEffect(()=>{
        findAllProducts();
    }, [])
    const findAllProducts= async ()=>{
        const response = await AxiosInstance.get('/products/find-all?category=Mobile Phones&page=1&size=10');
        setProducts(response.data);
    }


    const [category, setCategory] = useState("Mobile Phones");

    return (
        <>
            <nav className="navbar navbar-expand-lg navbar-light bg-opacity-75 bg-light ">
                <div className="container-fluid justify-content-center ">
                    <div className="navbar ">
                        <ul className="nav_menu d-inline-flex justify-content-between align-content-lg-between">
                            <li
                                onClick={() => {
                                    setCategory("");
                                    navigate(`/product`);
                                }}
                                style={{
                                    cursor: 'pointer',
                                    marginInline: "20px",
                                    borderBottom: category === "" ? "4px solid #ff4141" : "none",
                                }}
                            >
                                <h3> All</h3>
                            </li>
                            <li
                                onClick={() => {
                                    setCategory("Laptops");
                                    navigate(`/Laptops`);
                                }}
                                style={{
                                    cursor: 'pointer',
                                    marginInline: "20px",
                                    borderBottom: category === "Laptops" ? "4px solid #ff4141" : "none",
                                }}
                            >
                                <h3>Laptops</h3>
                            </li>
                            <li
                                onClick={() => {
                                    setCategory("Headphones");
                                    navigate('/headphones')
                                }}
                                style={{
                                    cursor: 'pointer',
                                    marginInline: "20px",
                                    borderBottom: category === "Headphones" ? "4px solid #ff4141" : "none",
                                }}
                            >
                                <h3> Headphones</h3>

                            </li>
                            <li
                                onClick={() => {
                                    setCategory("Mobile Phones");
                                    navigate('/mobiles');
                                }}
                                style={{
                                    cursor: 'pointer',
                                    marginInline: "20px",
                                    borderBottom: category === "Mobile Phones" ? "4px solid #ff4141" : "none",
                                }}
                            >
                                <h3> Mobile Phones</h3>

                            </li>
                            <li
                                onClick={() => {
                                    setCategory("Tablets");
                                    navigate('/tablets')
                                }}
                                style={{
                                    cursor: 'pointer',
                                    marginInline: "20px",
                                    borderBottom: category === "Tablets" ? "4px solid #ff4141" : "none",
                                }}
                            >
                                <h3>Tablets</h3>
                            </li>
                            <li
                                onClick={() => {
                                    setCategory("Other");
                                    navigate('/others')
                                }}
                                style={{
                                    cursor: 'pointer',
                                    marginInline: "20px",
                                    borderBottom: category === "Other" ? "4px solid #ff4141" : "none",
                                }}
                            >
                                <h3>Other</h3>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
            <div
                className='container-fluid align-content-lg-center justify-content-between d-flex flex-wrap col-lg-8 col-md-4 col-sm-2 '>
                {products.map((prod) => (
                    <DefaultCard title={prod.name} category={prod.category} thumbnail={prod.image}
                                 description={prod.description} price={prod.unitPrice} key={prod._id} _id={prod._id}/>
                ))}
            </div>
            <Footer/>
        </>
    );
}

export default Mobiles;

