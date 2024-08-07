import React from "react";
import './navBar.css';
import logo from '../../assets/logo.png';
import cart from '../../assets/shopping-cart.png';
import OfferRibbon from "../Ribbon/OfferRibbon";
import { Link } from "react-router-dom";

const Navbar=()=>{
    return(

        <div className="navContainer">
            <OfferRibbon/>
        <div className="Navbar">
            
          <div className="left-nav-div">
          <div className="nav-image-container">
           <img src={logo} alt="bhartiya-robotics-logo" />
           </div>
           <div className="nav-menu-list-container">
            <ul type="none">
                <Link to="/" style={{
                    textDecoration:"none",
                    color:"#005C78"
                }}><li>Home</li></Link>
                <Link to="/store" style={{
                    textDecoration:"none",
                    color:"#005C78"
                }}><li>Store</li></Link>
                <Link to="/videoSection" style={{
                    textDecoration:"none",
                    color:"#005C78"
                }}><li>Videos</li></Link>
                <li>Ideas</li>
                <Link to="/Blogs" style={{
                    textDecoration:"none",
                    color:"#005C78"
                }}><li>Blogs</li></Link>
            </ul>
            </div>
           </div>
           <div className="right-nav-div">
            <div className="nav-cart-image-container">
                <img src={cart} alt="cart-image" />
                <div className="nav-cart-count">1</div>
            </div>
            <Link to="/Login"><button>Login</button></Link>
           </div>
         
           
        </div>
        </div>
    )
}
export default Navbar;