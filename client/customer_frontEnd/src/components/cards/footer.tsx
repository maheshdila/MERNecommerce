/*import "./footer.css";
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

export default Footer;*/
import "./footer.css";
import 'bootstrap/dist/css/bootstrap.min.css';
// @ts-ignore
import { Facebook, Twitter, Instagram } from '@mui/icons-material';

function Footer() {
    return (

        <div className="navbar navbar-expand-lg bg-body-tertiary bg-dark align-content-end justify-content-center" style={{marginTop:'4rem'}}>

            <div
                className="container-fluid align-content-lg-center justify-content-between d-flex flex-wrap col-lg-8 col-md-4 col-sm-2 bg-dark">
                <div className="footer-container">

                    <div className="card bg-dark text-primary border-0" style={{width: "50rem", height:"22rem"}}>
                        <div className="card-body">
                            <h5 className="card-title">About Us</h5>
                            <p className="card-text">We are the best ever Sri lankan electronic suppliers</p>
                        </div>
                    </div>

                    <div className="card bg-dark text-primary border-0" style={{width: "30rem", height:"22rem"}}>

                        {/* <div className="card-body">
                        <h5 className="card-title">About Us</h5>
                        <p className="card-text">Wwe are the best ever Sri lankan electronic suppliers</p>
                    </div> */}
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
                    </div>
                </div>
                <div className="footNote" style={{ textAlign: "center" }}>
                    <p>All rights reserved.</p>
                </div>
            </div>

        </div>


    )
}

export default Footer;
