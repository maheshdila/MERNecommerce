import "./App.css";
import 'bootstrap/dist/css/bootstrap.min.css';
import {BrowserRouter as Router,Routes,Route,Link} from 'react-router-dom';
import Home from "./components/Home.tsx";
import Product from "./components/Product.tsx";
import Login from "./components/Login/Login";

import Register from "./components/Login/Register";
import ProductDetails from "./components/ProductDetails/ProductDetails";




function App() {
    return <>
        <Router>

            <nav className="navbar navbar-expand-lg navbar-light bg-dark ">
                <div className="container-fluid justify-content-center ">
                    <div className="navbar-brand">
                        <img src="https://static.wixstatic.com/media/61ce2a_2a8fd5098c89428b862f3a788ead9129~mv2.png/v1/fit/w_2500,h_1330,al_c/61ce2a_2a8fd5098c89428b862f3a788ead9129~mv2.png"
                             alt="" className='logo'/>
                    </div>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse"
                            data-bs-target="#navbarTogglerDemo03"
                            aria-controls="navbarTogglerDemo03" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>

                    <div className="collapse navbar-collapse" id="navbarTogglerDemo03">
                        <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                            <li className="nav-item ">
                                <Link className="nav-link active text-primary fs-4 bold-on-hover" aria-current="page" to='/' >Home</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link text-primary fs-4 bold-on-hover" to="/product">Product</Link>
                            </li>
                            <li>
                                <form className="d-flex">
                                    <input className="form-control me-2" type="search" placeholder="Search"
                                           aria-label="Search" style={{ marginTop: '10px' }}/>
                                    <button className="btn btn-outline-primary" type="submit" style={{ marginTop: '10px' }}>Search</button>
                                </form>
                            </li>
                        </ul>
                        <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
                            <li className="nav-item ">
                                <Link className="nav-link active text-primary fs-4 bold-on-hover "  to="/cart" >Cart</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link text-primary fs-4 bold-on-hover" to="/login">Login</Link>
                            </li>
                        </ul>
                        //form was here
                    </div>
                </div>
            </nav>

            <Routes>
                <Route path='/' element={<Home/>}></Route>
                <Route path='/product' element={<Product/>}></Route>
                <Route path='/login' element={<Login/>}></Route>
                <Route path='/cart' element={<Login/>}></Route>
                <Route path='/register' element={<Register/>}></Route>
                <Route path='/ProductDetails/:category/:id' element={<ProductDetails />}></Route>
            </Routes>
        </Router>
    </>
}

export default App;