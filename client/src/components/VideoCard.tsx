import React from 'react';
import './styles/video-list.css';

const VideoCard: React.FC<any> = ({video}) => {
    return (
        <div className="video-card-container">
            <h2>{video.title}</h2>
            <p>{video.episode}</p>
            <img className="image" src={video.image_url}/> 
            <div className="video-link-container">
                <a className="card-link" href={`${video.url}`}>View Video</a> 
            </div>
        </div>
    )
}

export default VideoCard;