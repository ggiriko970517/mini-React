import React from 'react';

function VideoCard ({thumbnail, title}) {
  return (
    <div className="video-card">
      <img src={thumbnail} alt={title} className="video-card__thumbnail" />
      <h3 className="video-card__title">{title}</h3>
    </div>
  );
};

export default VideoCard;

