import React, { useContext, useState } from "react";
import './store.css';
import { useProduct } from "../Contexts/ProductContext";
import { Link } from "react-router-dom";
import {GlobalContext} from "../Contexts/GlobalVariable";
import img1 from '../../assets/add.png';
import img2 from '../../assets/minus.png';
// import SilderSelector from "./SilderSelector";
import Slider from 'rc-slider';
import 'rc-slider/assets/index.css';
// import { Link } from "react-router-dom";
const Store=()=>{
    const Product=useProduct();
    
    const { globalVariable, setGlobalVariable } = useContext(GlobalContext);
    const [toggle1,setToggle1]=useState(false)
    const [toggle2,setToggle2]=useState(false)

    const [value, setValue] = useState(50);

    const handleSliderChange = (value) => {
      setValue(value);
    };
    const [option,setOption]=useState("hide")
    const [option2,setOption2]=useState("hide")
    return(
        <div className="Store">
            <h1>Store</h1>
            <div className="store-section">
            <div className="left-store-section">
                <h2>Find By</h2>
                <ul className="store-menu-list" type="none">
                    <li onClick={()=>{
                      setGlobalVariable("all")
                    }}>All Product</li>
                    <li onClick={()=>{
                      setGlobalVariable("ignition")
                    }}>Ignition Kits</li>
                    <li onClick={()=>{
                      setGlobalVariable("explorer")
                    }}>Explorer Kits</li>
                    <li onClick={()=>{
                      setGlobalVariable("professional")
                    }}>Professional Kits</li>
                    <li onClick={()=>{
                      setGlobalVariable("mechanical")
                    }}>Mechanical Kits</li>
                </ul>
                <h3>Filter By</h3>
                <div className="find-by-age">Age <img src={toggle1?img1:img2} alt="add image" onClick={()=>{setToggle1(!toggle1),toggle1?setOption("view"):setOption("hide")}}/>
             
                </div>
                <ul className={option}  type="none" >
                        <li>Age 8+</li>
                        <li>Age 12+</li>
                        <li>Age 14+</li>
                </ul>
                <div className="find-by-price">Price <img src={toggle2?img1:img2} alt="subtract image" onClick={()=>{setToggle2(!toggle2),toggle2?setOption2("view"):setOption2("hide")}}/>
               
                </div>
                <div style={{ width: 200 }} className={option2}>
      <h3>Simple Slider</h3>
      <Slider 
        min={0} 
        max={10000} 
        defaultValue={value} 
        onChange={handleSliderChange} 
      />
      <div>
        <p>Selected Value: {value}</p>
      </div>
    </div>
            </div>
            <div className="right-store-section">
         
            <div className="store-container">
              {
                Product.map((item)=>{
                  return(
                    
                    <Link style={{
                      textDecoration:"none"
                    }} to={`/store/category/product/${item.productId}`}>
                    {
                       globalVariable==="all"?
                       <div className="store-card-container" >
                       <img src={item.images.image1} alt="" className="product-image" />
                       <h2>{item.title}</h2>   
                       <p className="oldPrice">Old Price :{item.old_price}</p>    
                       <p className="newPrice">New Price :{item.new_price}</p>    
               </div>:globalVariable===item.category?
                       <div className="store-card-container">
                       <img src={item.images.image1} alt="" className="product-image" />
                       <h2>{item.title}</h2>   
                       <p className="oldPrice">Old Price :{item.old_price}</p>    
                       <p className="newPrice">New Price :{item.new_price}</p>    
               </div>:null
                 
                    }
                    </Link>
                       )
                })
              }
            </div>

            </div>
            </div>
             
        </div>
    )
}
export default Store;
{/* <div className="fristPart">
<Link  to="/store/category"><button className="showAll">Explore All Product</button></Link>
<div className="searchBox">
    <input type="text" name="" id="" placeholder="Search for kits . . ." />
    <button>Search</button>
</div>
</div>
<div className="secondPart">
<div className="containerStore" style={{
marginTop:"100px"
}}>
{
Product.map((item)=>{
return(
globalVariable==="all"?<div className="BestSellerContainer">
<img src={item.images.image1} alt="" className="bestSellerProdductImage" />
<h2>{item.title}</h2>   
<p className="oldPrice">Old Price :{item.old_price}</p>    
<p className="newPrice">New Price :{item.new_price}</p>    
</div>:item.category===globalVariable?<div className="BestSellerContainer">
        <img src={item.images.image1} alt="" className="bestSellerProdductImage" />
        <h2>{item.title}</h2>   
        <p className="oldPrice">Old Price :{item.old_price}</p>    
        <p className="newPrice">New Price :{item.new_price}</p>    
</div>:null    

)
})
} 

</div>
</div> */}