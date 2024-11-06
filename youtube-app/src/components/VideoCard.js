import React from 'react';
import './style/VideoCard.scss';

function VideoCard({ thumbnail, title, channel, views }) {
  return (
    <div className="video-card">
      <img src={thumbnail} alt={title} />
      <div className="info">
        <h4>{title}</h4>
        <p>{channel} • {views} views</p>
      </div>
    </div>
  );
}

export default VideoCard;

