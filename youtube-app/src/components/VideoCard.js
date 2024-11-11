import React from 'react';
import '../styles/VideoCard.scss';

function VideoCard({ title, thumbnail, channel }) {
  return (
    <div className="video-card">
      <img src={thumbnail} alt={title} className="thumbnail" />
      <div className="video-info">
        <h3>{title}</h3>
        <p>{channel}</p>
      </div>
    </div>
    
  );
}

export default VideoCard;
