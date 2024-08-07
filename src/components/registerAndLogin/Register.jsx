import React from "react";
import './register.css';
const Register=()=>{
    return(
        <div className="Register">
            <h1>Register</h1>
            <form action="">
                <div className="input-name">
                <input type="text" name="" id="" placeholder="First Name"/>
                <input type="text" name="" id="" placeholder="Last Name"/>
                </div>
                <input type="email" name="" id="" placeholder="Email"/>
               <div className="input-password">
               <input type="password" name="" id="" placeholder="Password"/>
               <input type="password" name="" id="" placeholder="Confirm Password"/>
               </div>
                <input type="number" name="" id="" placeholder="Age"/>
                <textarea name="" id="" placeholder="Write something about yourself . . ."></textarea>
                <button className="Register-button">Register</button>
            </form>
        </div>
    )
}
export default Register;