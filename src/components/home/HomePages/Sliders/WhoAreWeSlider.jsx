import React from "react";
import './whoAreWeSlider.css';
import Slider from 'react-slick';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import ignitionHeroImg from '../../../../assets/ignitionhero.svg';

const WhoAreWeSlider = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 10,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: false,
    autoplaySpeed: 2000,
  };
 
  return (
    <div className="WhoAreWeSlider" style={{
      alignSelf: "center",
      width: "100%", /* Ensure it takes full width of parent container */
    }}>
      
      <Slider {...settings} className="slider-main">
        <div className='slider-container'>
          <div className="container-2">
          <p style={{
            display:"inline"
          }}>Welcome to Ignition Kit, where curiosity meets creativity! Dive into the world of tech with our hands-on sandbox packed with exciting gadgets like the microcontroller. From blinking lights to sensor wizardry, this kit is your gateway to endless innovation. Whether you're a beginner or a seasoned enthusiast, there's something here to ignite your inner inventor. Get ready to explore, experiment, and unleash your imagination. Let's spark a revolution of innovation together!</p>
          <img src={ignitionHeroImg} alt="ingition-kit-hero" className="ingition-kit-hero"/>
          </div>
        </div>
        <div className='slider-container'>
          <div className="container-2">
          <p style={{
            display:"inline"
          }}>Welcome to Ignition Kit, where curiosity meets creativity! Dive into the world of tech with our hands-on sandbox packed with exciting gadgets like the microcontroller. From blinking lights to sensor wizardry, this kit is your gateway to endless innovation. Whether you're a beginner or a seasoned enthusiast, there's something here to ignite your inner inventor. Get ready to explore, experiment, and unleash your imagination. Let's spark a revolution of innovation together!</p>
          <img src={ignitionHeroImg} alt="ingition-kit-hero" className="ingition-kit-hero"/>
          </div>
        </div>
        <div className='slider-container'>
          <div className="container-2">
          <p style={{
            display:"inline"
          }}>Welcome to Ignition Kit, where curiosity meets creativity! Dive into the world of tech with our hands-on sandbox packed with exciting gadgets like the microcontroller. From blinking lights to sensor wizardry, this kit is your gateway to endless innovation. Whether you're a beginner or a seasoned enthusiast, there's something here to ignite your inner inventor. Get ready to explore, experiment, and unleash your imagination. Let's spark a revolution of innovation together!</p>
          <img src={ignitionHeroImg} alt="ingition-kit-hero" className="ingition-kit-hero"/>
          </div>
        </div>
        <div className='slider-container'>
          <div className="container-2">
          <p style={{
            display:"inline"
          }}>Welcome to  <p className="name-p">Ignition Kit</p> , where curiosity meets creativity! Dive into the world of tech with our hands-on sandbox packed with exciting gadgets like the microcontroller. From blinking lights to sensor wizardry, this kit is your gateway to endless innovation. Whether you're a beginner or a seasoned enthusiast, there's something here to ignite your inner inventor. Get ready to explore, experiment, and unleash your imagination. Let's spark a revolution of innovation together!</p>
          <img src={ignitionHeroImg} alt="ingition-kit-hero" className="ingition-kit-hero"/>
          </div>
        </div>
       
      </Slider>
    </div>
  );
}

export default WhoAreWeSlider;

// const WAW = () => {


//   return (
//     <div>
//       <h2>Simple Slider</h2>
//       <Slider {...settings}>
//         <div className='slider-container'>
//           <p>Welcome to Ignition Kit, where curiosity meets creativity! Dive into the world of tech with our hands-on sandbox packed with exciting gadgets like the microcontroller. From blinking lights to sensor wizardry, this kit is your gateway to endless innovation. Whether you're a beginner or a seasoned enthusiast, there's something here to ignite your inner inventor. Get ready to explore, experiment, and unleash your imagination. Let's spark a revolution of innovation together!</p>
//           <img src={img} alt="ignition kit hero" className='ignition-kit-hero' />
//         </div>
//         <div>
//           <h3>this is the second one</h3>
//         </div>
//         <div>
//           <h3>this is the third one</h3>
//         </div>
//         <div>
//           <h3>this is the forth one</h3>
//         </div>
//         <div>
//           <h3>this is the fifth one</h3>
//         </div>
//         <div>
//           <h3>this is the sixth one</h3>
//         </div>
//       </Slider>
//     </div>
//   );
// };

// export default WAW;
