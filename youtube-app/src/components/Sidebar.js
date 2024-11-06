import React from 'react';

function Sidebar () {
  return (
    <div className="sidebar">
      <button className="sidebar__item"><i class="fa-solid fa-house"></i>홈</button>
      <button className="sidebar__item"><i class="fa-solid fa-tv"></i>쇼츠</button>
      <button className="sidebar__item"><i class="fa-brands fa-square-youtube"></i>구독</button>
      <button className="sidebar__item"><i class="fa-solid fa-box"></i>보관함</button>
      <button className="sidebar__item"><i class="fa-solid fa-circle-user"></i>내 페이지</button>
    </div>
  );
};

export default Sidebar;