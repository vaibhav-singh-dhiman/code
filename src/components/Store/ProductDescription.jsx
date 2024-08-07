// ProductDescription.js
import React, { useState } from 'react';
import './productDescription.css';
import { useParams } from 'react-router-dom';
import { useProduct } from '../Contexts/ProductContext';

const ProductDescription = () => {
  const { productId } = useParams();
  const products  = useProduct(); 
  
  console.log("productId from params:", productId); 
  console.log("products from context:", products); 

  
  const product = products.find(item => item.productId.toString() === productId.toString());
  const [productImage,setProductImage]=useState(product.images.image1)
  console.log(product)

  return (
    <div className="ProductDescription" >
     <div className="product-first-description">
     <div className="leftProductDescription">
        <div className="option-images">
            <img src={product.images.image1} alt="image1" onClick={()=>{setProductImage(product.images.image1)}} />
            <img src={product.images.image2} alt="image2" onClick={()=>{setProductImage(product.images.image2)}}/>
            <img src={product.images.image3} alt="image3" onClick={()=>{setProductImage(product.images.image3)}}/>
        </div>
        <div className="main-image">
        <img src={productImage} alt="image1" />
        </div>
        </div>
        <div className="rightProductDescription">
            <h1>{product.title}</h1>
            <p className='normal'>{product.description}</p>
            <p className='Old-Price'>Old Price - {product.old_price}</p>
            <p className='New-Price'>New Price - {product.new_price}</p>
            <div className="btns">
                <button>Buy Now</button>
                <button>Add To Cart</button>
            </div>
        </div>
     </div>
    </div>
  );
}

export default ProductDescription;
