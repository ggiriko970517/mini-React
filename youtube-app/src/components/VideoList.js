import React from 'react';
import VideoCard from './VideoCard';
import '../styles/VideoList.scss';

function VideoList() {
  const videos = [
    {
      thumbnail: "https://via.placeholder.com/250x140",
      title: "제목",
      channel: "채널",
      views: "1M",
      uploaded: "1일전",
    },
    {
      thumbnail: "https://via.placeholder.com/250x140",
      title: "제목",
      channel: "채널",
      views: "500K",
      uploaded: "3일전",
    },
    {
      thumbnail: "https://via.placeholder.com/250x140",
      title: "제목",
      channel: "채널",
      views: "500K",
      uploaded: "3일전",
    },
    {
      thumbnail: "https://via.placeholder.com/250x140",
      title: "제목",
      channel: "채널",
      views: "500K",
      uploaded: "3일전",
    },
        {
      thumbnail: "https://via.placeholder.com/250x140",
      title: "제목",
      channel: "채널",
      views: "500K",
      uploaded: "3일전",
    },
    {
      thumbnail: "https://via.placeholder.com/250x140",
      title: "제목",
      channel: "채널",
      views: "500K",
      uploaded: "3일전",
    },
    {
      thumbnail: "https://via.placeholder.com/250x140",
      title: "제목",
      channel: "채널",
      views: "500K",
      uploaded: "3일전",
    },
    {
      thumbnail: "https://via.placeholder.com/250x140",
      title: "제목",
      channel: "채널",
      views: "500K",
      uploaded: "3일전",
    },
    {
      thumbnail: "https://via.placeholder.com/250x140",
      title: "제목",
      channel: "채널",
      views: "500K",
      uploaded: "3일전",
    },
    {
      thumbnail: "https://via.placeholder.com/250x140",
      title: "제목",
      channel: "채널",
      views: "500K",
      uploaded: "3일전",
    },
    {
      thumbnail: "https://via.placeholder.com/250x140",
      title: "제목",
      channel: "채널",
      views: "500K",
      uploaded: "3일전",
    },
    {
      thumbnail: "https://via.placeholder.com/250x140",
      title: "제목",
      channel: "채널",
      views: "500K",
      uploaded: "3일전",
    },
    
    
  ];

  return (
    <div className="video-list">
      {videos.map((video, index) => (
        <VideoCard
          key={index}
          thumbnail={video.thumbnail}
          title={video.title}
          channel={video.channel}
          views={video.views}
          uploaded={video.uploaded}
        />
      ))}
    </div>
  );
}

export default VideoList;
