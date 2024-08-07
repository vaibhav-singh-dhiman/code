import React from "react";
import './login.css';
import img1 from '../../assets/registerImage.svg';
import { Link } from "react-router-dom";
const Login=()=>{
    return(
        <div className="Login">
            <div className="left-login-part">
                <img src={img1} alt="" />
            </div>
            <div className="right-login-part">
                <h1>Login</h1>
                <div className="LoginForm">
                    <form action="">
                        <input type="email" name="" id="" placeholder="user@123" />
                        <input type="password" name="" id="" placeholder="*********" />
                       <Link to="/register" style={{
                        textDecoration:"none"
                       }}><p>Create Account</p> </Link> 
                        <button className="Login-button">Login</button>
                    </form>
                </div>
            </div>
        </div>
    )
}
export default Login;