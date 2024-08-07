import React from "react";
import './video.css';
import { useLocation } from "react-router-dom";
import YouTubePlaylist from "./YouTubePlaylist";
const Video=()=>{
    const location=useLocation();
    const {playlistID,apiKey}=location.state || {};
    
    return(
                 
        <div className="Video">
       
      
        <YouTubePlaylist playlistId={playlistID} apiKey={apiKey} />
      </div>
        
    )
}
export default Video;