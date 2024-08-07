import React from 'react';
import charm1 from '../../../assets/WEO.png';
import charm2 from '../../../assets/WEO1.png';
import strip from '../../../assets/strip.png';
import WhoAreWeSlider from './Sliders/WhoAreWeSlider';
import './waw.css';


const WAW = () => {
  return (
    <div className='WAW'>
      <img src={charm1} alt="who are we charm" className='charm1'/>
      <img src={charm2} alt="who are we charm" className='charm2'/>
      {/* <img src={strip} alt="who are we charm" className='strip'/>
      <img src={strip} alt="who are we charm" className='strip'/> */}
      <div className="slider">
        <WhoAreWeSlider/>
      </div>
    </div>
  );
};

export default WAW;



// // src/SimpleSlider.js
// import React from 'react';
// import Slider from 'react-slick';
// import "slick-carousel/slick/slick.css";
// import "slick-carousel/slick/slick-theme.css";
// import img from '../../../assets/ignitionhero.svg';
// import './waw.css'
// const WAW = () => {
//   const settings = {
//     dots: true,
//     infinite: true,
//     speed: 1000,
//     slidesToShow: 1,
//     slidesToScroll: 1,
//     autoplay: true,
//     autoplaySpeed: 2000,
//   };

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
