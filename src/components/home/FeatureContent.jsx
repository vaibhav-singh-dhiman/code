import React from "react";
import './featureContent.css';
import f1 from '../../assets/f1.png';
import f2 from '../../assets/f2.png';
import f3 from '../../assets/f3.png';
import f4 from '../../assets/f4.png';
import f5 from '../../assets/f5.png';
import f6 from '../../assets/f6.png';
import f7 from '../../assets/f7.png';
import f8 from '../../assets/f8.png';
import f9 from '../../assets/f9.png';
const FeatureContent=()=>{
    return(
        <div className="FeatureContent">
                <h1>Feature of our DIY kits</h1>
                {/* <hr /> */}
               <div className="gridContainer">
                <div className="block">
                    <img src={f1} alt="feature-of-our-DIY-kit" className="featureImage"/>
                    <p>Quality Materials</p>
                </div>
                <div className="block">
                    <img src={f2} alt="feature-of-our-DIY-kit" className="featureImage"/>
                    <p>Educational Value</p>
                </div>
                <div className="block">
                    <img src={f3} alt="feature-of-our-DIY-kit" className="featureImage"/>
                    <p>On Industry Standards</p>
                </div>
                <div className="block">
                    <img src={f5} alt="feature-of-our-DIY-kit" className="featureImage"/>
                    <p>Easy to Understand</p>
                </div>
                <div className="block">
                    <img src={f6} alt="feature-of-our-DIY-kit" className="featureImage"/>
                    <p>Advanced Tech</p>
                </div>
                <div className="block">
                    <img src={f7} alt="feature-of-our-DIY-kit" className="featureImage"/>
                    <p>First-Rate Materials</p>
                </div>
                <div className="block">
                    <img src={f8} alt="feature-of-our-DIY-kit" className="featureImage"/>
                    <p>24/7 Support</p>
                </div>
                <div className="block">
                    <img src={f9} alt="feature-of-our-DIY-kit" className="featureImage"/>
                    <p>Video Explanation</p>
                </div>
               </div>
        </div>
    )
}
export default FeatureContent;