import React from "react";
import './videoSection.css';
import YouTubePlaylist from "./YouTubePlaylist";
import youtube from '../../assets/youtube.png';
import img1 from '../../assets/ignitionhouse.png';
import img2 from '../../assets/explorerCar.png';
import img3 from '../../assets/microScope.png';
import {Link} from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
const VideoSection=()=>{
    const history=useNavigate();
    const handleClick1=()=>{
        const links={playlistID:"PLLv8PnK6VRlnPWX-9ZTA7zvCaSIiJbRmQ",apiKey:"AIzaSyCdBL5ujLFjwH6dsdBCWsvx_T2W52DM62o"};
            history('/video-Section',{state:links})
    }
    return(
        <div className="VideoSection">
          
          <div className="first-image-card" style={{
                backgroundColor:"#D80032"
            }} onClick={handleClick1}>
                <div className="left-view">
                    <p>Ingnition</p>
                    <img src={img1} alt="" />
                </div>
                <div className="right-view">
                    <img src={youtube} alt="" />
                </div>
            </div>
          
          <div className="first-image-card" style={{
                backgroundColor:"#FAEF5D"
            }}>
                <div className="left-view">
                    <p>Ingnition</p>
                    <img src={img2} alt="" />
                </div>
                <div className="right-view">
                    <img src={youtube} alt="" />
                </div>
            </div>
        
          
          <div className="first-image-card" style={{
                backgroundColor:"#005C78"
            }}>
                <div className="left-view">
                    <p>Ingnition</p>
                    <img src={img3} alt="" />
                </div>
                <div className="right-view">
                    <img src={youtube} alt="" />
                </div>
            </div>
        
           
           
        </div>
    )
}
export default VideoSection;
