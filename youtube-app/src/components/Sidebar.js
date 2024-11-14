import React from 'react';
import '../styles/Sidebar.scss';
function Sidebar({ isSidebarOpen }) {
  return (
    <>
      { isSidebarOpen ? (
      <aside className="sidebar">
        <ul>
          <li><i className="fa-solid fa-house"></i> 홈</li>
          <li><i className="fa-solid fa-tv"></i> 쇼츠</li>
          <li><i className="fa-brands fa-square-youtube"></i> 구독</li>
          <li><i className="fa-solid fa-box"></i> 보관함</li>
          <li><i className="fa-solid fa-circle-user"></i> 기록</li>
        </ul>
        <ul>
          <li><i className="fa-solid fa-video"></i> 동영상 관리</li>
          <li><i className="fa-solid fa-clock"></i> 시청 기록</li>
          <li><i className="fa-solid fa-gear"></i> 설정</li>
          <li><i className="fa-solid fa-question-circle"></i> 도움말</li>
        </ul>
      </aside> )
      : (
        <aside className="sidebar mini">
          <ul>
            <li>
              <i className="fa-solid fa-house"></i>
              <p>  홈</p>
            </li>
            <li>
              <i className="fa-solid fa-tv"></i>
              <p>  쇼츠</p>
            </li>
            <li>
              <i className="fa-brands fa-square-youtube"></i>
              <p>  구독</p>
            </li>
            <li>
              <i className="fa-solid fa-box"></i>
              <p>  보관함</p>
            </li>
            <li>
              <i className="fa-solid fa-circle-user"></i>
              <p>  기록</p>
            </li>
          </ul>
        </aside> )
      }
    </>
  );
}
export default Sidebar;









