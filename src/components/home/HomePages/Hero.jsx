import React from "react";
import './hero.css';
import img1 from '../../../assets/herocircle1.png';
import img2 from '../../../assets/herocircle2.png';
import img3 from '../../../assets/herodesignimage.png';
import img4 from '../../../assets/heroimage.svg';
import img5 from '../../../assets/heroSectionCharms.png';
const Hero=()=>{
    return(
        <div className="Hero">
           <div className="hero-left-container">
                    <img src={img1} alt="first-hero-circle" className="first"/>
                    <img src={img2} alt="second-hero-circle" className="second"/>
                    <img src={img4} alt="forth image" className="third"/>
                    <img src={img3} alt="third-hero-circle" className="forth"/>

           </div>
           <div className="hero-right-container">
                        <h1>“ Let’s Fertilize the seeds of Bots ” </h1>
                        <p>Welcome to Bhartiya Robotics, where innovation meets education! Unleash your creativity with our cutting-edge IoT DIY kits designed to inspire and educate. At Bhartiya Robotics, we believe in empowering individuals to harness the power of technology and cultivate a passion for robotics. "Let's fertilize the seeds of bots" is not just a tagline; it's a philosophy that drives us to provide hands-on learning experiences that are both engaging and transformative.</p>
                        <button>Explore</button>
                        <img src={img5} alt="hero-section-charms" className="fifth"/>    
           </div>
        </div>
    )
}
export default Hero;