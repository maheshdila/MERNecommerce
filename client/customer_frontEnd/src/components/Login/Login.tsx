import {Link} from "react-router-dom";
import "./additional.css";

function Login () {
    return (

        <div className="loginBody">
            <div className="wrapper">
                <div className="form-box login">
                    <h2>Login</h2>
                    <form action="src/components">
                        <div className="input-box">
              <span className="icon">

              </span>
                            <input type="email"/>
                            <label htmlFor="">email</label>
                        </div>
                        <div className="input-box">

                            <input type="password"/>
                            <label htmlFor="">Password</label>
                        </div>



                        <button type="button" className="button_1">
                            Login
                        </button>

                        <div className="login-register">
                            <p>
                                Don't have an account?{" "}
                                <Link to="/register" className="register-link">
                                    Register
                                </Link>
                            </p>
                        </div>
                    </form>
                </div>
            </div>
        </div>

    )
}



export default Login;