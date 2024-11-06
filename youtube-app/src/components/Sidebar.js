import React from 'react';
import './style/Sidebar.scss';

function Sidebar() {
  return (
    <div className="sidebar">
      <a href="/">홈</a>
      <a href="/">shorts</a>
      <a href="/">구독</a>
      <a href="/">유튜브 뮤직</a>
      <a href="/">내 페이지</a>\
      <a href="/">오프라인 저장</a>
    </div>
  );
}

export default Sidebar;