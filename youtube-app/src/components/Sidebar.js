import React from 'react';
import '../styles/Sidebar.scss';

function Sidebar({ className }) {
  return (
    <aside className={`sidebar ${className}`}>
      <ul>
        <li><i className="fa-solid fa-house"></i> 홈</li>
        <li><i className="fa-solid fa-tv"></i> 쇼츠</li>
        <li><i className="fa-brands fa-square-youtube"></i> 구독</li>
        <li><i className="fa-solid fa-box"></i> 보관함</li>
        <li><i className="fa-solid fa-circle-user"></i> 기록</li>
      </ul>
    </aside>
  );
}

export default Sidebar;
