import { useState } from "react";
import { Link } from "react-router-dom";
import "./additional.css";

function Register() {
    const [user, setUser] = useState({
        name: "",
        address: "",
        telephone: "",
        email: "",
        password: "",
        re_enter_password: "",
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setUser((prevUser) => ({
            ...prevUser,
            [name]: value,
        }));
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        // Add logic to register the user, e.g., interact with an authentication service or backend

        // For demonstration purposes, log the user data
        console.log("Registered user:", user);

        // Reset the form after submission
        setUser({
            name: "",
            address: "",
            telephone: "",
            email: "",
            password: "",
            re_enter_password: "",
        });
    };

    return (
        <div className="loginBody">
            <div className="wrapper">
                <div className="form-box register">
                    <h2>Register</h2>
                    <form onSubmit={handleSubmit}>
                        <div className="input-box">
                            <input
                                type="text"
                                name="name"
                                value={user.name}
                                onChange={handleChange}
                                required
                            />
                            <label htmlFor="name">Name</label>
                        </div>
                        <div className="input-box">
                            <input
                                type="text"
                                name="address"
                                value={user.address}
                                onChange={handleChange}
                                required
                            />
                            <label htmlFor="address">Address</label>
                        </div>
                        <div className="input-box">
                            <input
                                type="tel"
                                name="telephone"
                                value={user.telephone}
                                onChange={handleChange}
                                required
                            />
                            <label htmlFor="telephone">Telephone</label>
                        </div>
                        <div className="input-box">
                            <input
                                type="email"
                                name="email"
                                value={user.email}
                                onChange={handleChange}
                                required
                            />
                            <label htmlFor="email">Email</label>
                        </div>
                        <div className="input-box">
                            <input
                                type="password"
                                name="password"
                                value={user.password}
                                onChange={handleChange}
                                required
                            />
                            <label htmlFor="password">Password</label>
                        </div>
                        <div className="input-box">
                            <input
                                type= "re_enter_password"
                                name="re_enter_password"
                                value={user.re_enter_password}
                                onChange={handleChange}
                                required
                            />
                            <label htmlFor="password">Re enter password</label>
                        </div>

                        <button type="submit" className="button_1">
                            Register
                        </button>

                        <div className="login-register">
                            <p>
                                Already have an account?{" "}
                                <Link to="/login" className="login-link">
                                    Login
                                </Link>
                            </p>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
}

export default Register;
