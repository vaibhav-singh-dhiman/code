import React from "react";
import './explore.css';
import img1 from '../../../assets/explore1.png';
import img2 from '../../../assets/explore2.png';
import img3 from '../../../assets/explore3.png';
import map from '../../../assets/map.png';
const Explore=()=>{
    return(
        <div className="Explore">
            <h1>Explore our Impact</h1>
            <hr />
            <div className="main-explore-container">
            <div className="explore-left">
                <img src={map} alt="exploring our impact" />
            </div>
            <div className="explore-right">
                    <div className="explore-block">
                        <img src={img1} alt="exploring our impact right div image" />
                        <p>500+ KIDS REACHED</p>
                    </div>
                    <div className="explore-block">
                        <img src={img2} alt="exploring our impact right div image" />
                        <p>Available in 16000+ Cities</p>
                    </div>
                    <div className="explore-block">
                        <img src={img3} alt="exploring our impact right div image" />
                        <p>Top Institute Instructors</p>
                    </div>
            </div>

            </div>

            </div>
    )
}
export default Explore;