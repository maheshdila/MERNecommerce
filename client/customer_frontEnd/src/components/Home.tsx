import 'bootstrap/dist/css/bootstrap.min.css';
import '@popperjs/core/dist/umd/popper.min.js';
import 'bootstrap/dist/js/bootstrap.min.js';
import 'bootstrap/dist/css/bootstrap.min.css';
import {Carousel} from "react-bootstrap";
import DefaultCard from "./cards/default_card";

//import { Carousel } from 'react-bootstrap';

function Home() {
    return (
        <>
            <div className='container-fluid align-content-lg-center justify-content-center col-lg-8 col-md-4 col-sm-2 '>
                <br></br>
                <Carousel>
                    <Carousel.Item interval={2000}>
                        <img src="https://cdn.hostadvice.com/2023/03/eCommerce-Website-Development.png"
                             className="d-block  h-50 w-100" alt="adz_01"/>
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
            <div className='container'>
                <div className='row'>
                    <div className='col-12 col-sm-6 col-md-4 col-lg-3'>
                        <DefaultCard/>
                    </div>
                    <div className='col-12 col-sm-6 col-md-4 col-lg-3'>
                        <DefaultCard/>
                    </div>
                    <div className='col-12 col-sm-6 col-md-4 col-lg-3'>
                        <DefaultCard/>
                    </div>
                    <div className='col-12 col-sm-6 col-md-4 col-lg-3'>
                    <DefaultCard/>
                    </div>
                </div>
            </div>
        </>
    );
}


export default Home;
