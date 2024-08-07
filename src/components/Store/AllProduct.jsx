import React, { useState ,useContext } from "react";
import './allProduct.css';
import img1 from '../../assets/kid1.png';
import img2 from '../../assets/kid2.png';
import img3 from '../../assets/kid3.png';
import img4 from '../../assets/ignitionhouse.png';
import img5 from '../../assets/explorerCar.png';
import img6 from '../../assets/microScope.png';
// import { useContext } from "react";
import { GlobalContext } from "../Contexts/GlobalVariable";
// import { useContext } from "react";
import { Link } from "react-router-dom";
const AllProduct=()=>{
    const { globalVariable, setGlobalVariable } = useContext(GlobalContext)
    console.log(globalVariable)
    return(
        <div className="AllProduct"  >
            <Link to="/store" style={{
                textDecoration:"none",

            }}>
            <div className="firstCategory category" onClick={()=>{setGlobalVariable("ignition")}}>
                <img src={img4} alt="ignitionhouse" className="firstImage"/>
                <p>Ignition Kit</p>
                <img src={img1} alt="ignitionhouse" className="secondImage"/>
            </div>
            </Link>
            <Link to="/store" style={{
                textDecoration:"none",

            }}>
             <div className="secondCategory category" onClick={()=>{setGlobalVariable("explorer")}}>
                <img src={img2} alt="ignitionhouse" className="thirdImage" />
                <p>Exlporer Kit</p>
                <img src={img5} alt="ignitionhouse" className="forthImage"/>
            </div>
            </Link>
            
            <Link to="/store" style={{
                textDecoration:"none",

            }}>
             <div className="thirdCategory category" onClick={()=>{setGlobalVariable("mechanical")}}>
            <img src={img6} alt="ignitionhouse" className="fifthImage"/>
                <p>Mechanical Kit</p>
                <img src={img3} alt="ignitionhouse" className="sixthImage"/>
            </div>
            </Link>
            
            <Link to="/store" style={{
                textDecoration:"none",

            }}>
            <div className="forthCategory category" onClick={()=>{setGlobalVariable("all")}}>
            <img src={img5} alt="ignitionhouse" className="fifthImage"/>
                <p>All</p>
                {/* <img src={img4} alt="ignitionhouse" className="sixthImage"/> */}
                <img src={img6} alt="ignitionhouse" className="sixthImage"/>
            </div>
            </Link>
            
        </div>
    )
}
export default AllProduct;