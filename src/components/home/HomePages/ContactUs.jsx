import React from "react";
import './contactUs.css';
import image from '../../../assets/contactUs.svg'
import img1 from '../../../assets/contactUscharm1.png'
import img2 from '../../../assets/contactUscharm2.png'
import img3 from '../../../assets/contactUscharm3.png'
const ContactUs=()=>{
    return(
        <div className="ContactUs">
                <h1>Questions? <p className="headdingPara">We're here for you</p></h1>
                <img src={img1} alt="contactUscharm" className="contactUscharm1" />
                {/* <img src={img2} alt="contactUscharm" className="contactUscharm2" /> */}
                <img src={img3} alt="contactUscharm" className="contactUscharm3" />
               <div className="contactUsContainer">
               <div className="left-contact-us-section">
                        <img src={image} alt="Contact us illustration" />
                </div>
                <div className="right-contact-us-section">
                    <div className="text">
                        <p className="firstText">
                        We are available 24/7 to assist you. Our service goes beyond mere interaction <br />, we offer personalized one-on-one sessions where you can ask questions,
                        </p>
                        <p className="secondText">
                        gain knowledge, and develop. Reach out anytime for support and guidance on your journey.   
                        </p>
                    </div>
                    <button>
                        Schedule a call back !
                    </button>
                </div>
               </div>
        </div>
    )
}
export default ContactUs;