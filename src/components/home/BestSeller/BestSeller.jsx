import React from "react";
import { useContext } from "react";
import './bestSeller.css';
import { useProduct } from "../../Contexts/ProductContext";
const BestSeller=()=>{
    const product=useProduct();
    const Product=product.slice(0,3)
    return(
        <div className="BestSeller">
            
            <div className="title">
                <h1>Best Seller</h1>
                <hr /></div>
                <div className="container">
                {
                Product.map((item)=>{
                    return(
                        
                        <div className="BestSellerContainer">
                                <img src={item.images.image1} alt="" className="bestSellerProdductImage" />
                                <h2>{item.title}</h2>   
                                <p className="oldPrice">Old Price :{item.old_price}</p>    
                                <p className="newPrice">New Price :{item.new_price}</p>    
                        </div>
                    )
                })
               } 
              
                </div>
                <button className="exploreButton">Explore</button>
        </div>
    )
}
export default BestSeller;