/*/!*import "./footer.css";
import 'bootstrap/dist/css/bootstrap.min.css';

function Footer() {
    return (

        <div className="navbar navbar-expand-lg bg-body-tertiary bg-dark align-content-end justify-content-center" style={{marginTop:'4rem'}}>
            <div
                className="container-fluid align-content-lg-center justify-content-between d-flex flex-wrap col-lg-8 col-md-4 col-sm-2 bg-dark">
                <div className="card bg-dark text-primary border-0" style={{width: "25rem", height:"22rem"}}>
                    <div className="card-body">
                        <h5 className="card-title">About Us</h5>
                        <p className="card-text">Wwe are the best ever Sri lankan electronic suppliers</p>
                    </div>
                </div>
                <div className="card bg-dark text-primary border-0" style={{width: "25rem", height:"22rem"}}>

                    <div className="card-body">
                        <h5 className="card-title">About Us</h5>
                        <p className="card-text">Wwe are the best ever Sri lankan electronic suppliers</p>
                    </div>
                </div>
                <div className="card bg-dark text-primary border-0" style={{width: "25rem", height:"22rem"}}>

                    <div className="card-body">
                        <h5 className="card-title">About Us</h5>
                        <p className="card-text">Wwe are the best ever Sri lankan electronic suppliers</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Footer;*!/
import "./footer.css";
import 'bootstrap/dist/css/bootstrap.min.css';
// @ts-ignore
import { Facebook, Twitter, Instagram } from '@mui/icons-material';

function Footer() {
    return (

        <div className="navbar navbar-expand-lg bg-body-tertiary bg-dark align-content-end justify-content-center" style={{marginTop:'4rem'}}>

            <div
                className="container-fluid align-content-lg-center justify-content-between d-flex flex-wrap col-lg-8 col-md-4 col-sm-2 bg-dark">
                <div className="footer-container d-flex text-muted justify-content-center">
                    <p className='paragraph justify-content-center'>
                        © 2024 GreenBrook.<br/> All rights reserved. GreenBrook is a registered trademark. <br/>
                        The content and images on this website are the property of Green Brook and <br/>
                        may not be used or reproduced without permission.<br/>
                        All product names, logos, and brands are the property of their respective owners.
                        Prices and availability are subject to change without notice.</p>

                </div>
                <div className="footNote" style={{ textAlign: "center" }}>
                    <p>All rights reserved.</p>
                </div>
            </div>

        </div>


    )
}

export default Footer;*/

{/*<div className="card bg-dark text-primary border-0" style={{width: "50rem", height:"22rem"}}>
                        <div className="card-body">
                            <h5 className="card-title">About Us</h5>
                            <p className="card-text">We are the best ever Sri lankan electronic suppliers</p>
                        </div>
                    </div>

                    <div className="card bg-dark text-primary border-0" style={{width: "30rem", height:"22rem"}}>

                         <div className="card-body">
                        <h5 className="card-title">About Us</h5>
                        <p className="card-text">Wwe are the best ever Sri lankan electronic suppliers</p>
                    </div>
                        <div className="social-icons">
                            <a href="#" className="social-icon"><Facebook /></a>
                            <a href="#" className="social-icon"><Twitter /></a>
                            <a href="#" className="social-icon"><Instagram /></a>
                        </div>


                    </div>
                    <div className="card bg-dark text-primary border-0" style={{width: "50rem", height:"22rem"}}>

                        <div className="card-body">
                            <h5 className="card-title">Contact Us</h5>

                            <p className="card-text">
                                Name: <input type="text" />
                            </p>
                            <p className="card-text">
                                Email: <input type="text" />
                            </p>
                            <p className="card-text">
                                Message: <input type="text" />
                            </p>

                        </div>
                    </div>*/}


import "./footer.css";
import 'bootstrap/dist/css/bootstrap.min.css';
// @ts-ignore
import { Facebook, Twitter, Instagram } from '@mui/icons-material';

function Footer() {
    return (
        <div className="navbar navbar-expand-lg bg-body-tertiary bg-dark align-content-end justify-content-center" style={{ marginTop: '4rem' }}>
            <div className="container-fluid align-content-lg-center justify-content-center d-flex flex-wrap col-lg-8 col-md-4 col-sm-2 bg-dark">
                <div className="footer-container d-flex text-muted justify-content-center">
                    <p className='paragraph text-center'>
                         GreenBrook is a registered trademark.<br/>
                        The content and images on this website are the property of Green Brook <br/>and may not be used or reproduced without permission.
                        All product names, logos, and brands are the property of their respective owners.<br/> Prices and availability are subject to change without notice.
                        <br/><br/>
                        &copy; {new Date().getFullYear()} GreenBrook. All rights reserved.<br/>
                    </p>
                </div>
                <div className="footNote text-center">
                    <p>All rights reserved.</p>
                </div>
            </div>
        </div>
    )
}

export default Footer;
