import React, { useEffect, useState } from 'react';
import axios from 'axios';
import YouTube from 'react-youtube';
import './playList.css';

const YouTubePlaylist = ({ playlistId, apiKey }) => {
  const [videos, setVideos] = useState([]);
  const [selectedVideo, setSelectedVideo] = useState(null);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchPlaylistItems = async () => {
      try {
        const result = await axios.get('https://www.googleapis.com/youtube/v3/playlistItems', {
          params: {
            part: 'snippet',
            maxResults: 20,
            playlistId: playlistId,
            key: apiKey,
          },
        });
        setVideos(result.data.items);
        if (result.data.items.length > 0) {
          setSelectedVideo(result.data.items[0].snippet.resourceId.videoId);
        }
      } catch (err) {
        setError(err.response ? err.response.data.error.message : err.message);
      }
    };
    fetchPlaylistItems();
  }, [playlistId, apiKey]);

  const handleVideoSelect = (videoId) => {
    setSelectedVideo(videoId);
  };

  const opts = {
    height: '390',
    width: '640',
    playerVars: {
      autoplay: 0,
    },
  };

  return (
    <div className='main-div'>
       <h1 style={{
        color:"#005C78"
       }}>YouTube Playlist in React</h1>
      {error ? (
        <div>Error: {error}</div>
      ) : (
        <div className='playlist-container'>
          {selectedVideo && <YouTube videoId={selectedVideo} opts={opts} className='video'/>}
          <div className="playlist" >
            {videos.map((video) => (
              <div  key={video.snippet.resourceId.videoId} onClick={() => handleVideoSelect(video.snippet.resourceId.videoId)} className='video'>
                <img  src={video.snippet.thumbnails.default.url} alt={video.snippet.title} />
                <p>{video.snippet.title}</p>
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

export default YouTubePlaylist;
