import React from 'react';

function Header() {
  return (
    <header className="header">
      <i class="fa-solid fa-bars"></i>
      <img src = "https://www.gstatic.com/youtube/img/branding/youtubelogo/svg/youtubelogo.svg"  alt="YouTube Logo" className="header__logo" />
      <input type="text" className="header__search" placeholder= "검색" />
      <div className="header__icons">
        <button className="header__icon"><i class="fa-solid fa-bell"></i></button>
        <button className="header__icon"><i class="fa-solid fa-user"></i></button>
      </div>
    </header>
  );
};

export default Header;
