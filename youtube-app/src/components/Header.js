
import React from 'react';
import '../styles/Header.scss';

function Header({ toggleSidebar }) {
  return (
    <header className="header">
      <div className="header-left">
        <button className="menu-button" onClick={toggleSidebar}>
          <i className="fas fa-bars"></i>
        </button>
        <img
          src="/images/youtube_logo_white.png"
          alt="YouTube Logo"
          className="logo"
        />
      </div>

      <div className="search-container">
        <input type="text" placeholder="Search" className="search-bar" />
        <button className="search-button">
          <i className="fas fa-magnifying-glass"></i>
        </button>
        <button className="voice-search-button">
          <i className="fas fa-microphone"></i>
        </button>
      </div>

      <div className="header-right">
        <button className="icon-button"><i className="fas fa-bell"></i></button>
        <button className="icon-button"><i className="fas fa-tv"></i></button>
        <button className="icon-button"><i className="fas fa-cog"></i></button>
        <img
          src="https://via.placeholder.com/32"
          alt="Profile"
          className="profile-icon"
        />
      </div>
    </header>
  );
}

export default Header;

