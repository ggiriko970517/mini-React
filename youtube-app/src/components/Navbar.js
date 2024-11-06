import React from 'react';
import './style/Navbar.css';

const Navbar = () => {
  return (
    <div className="navbar">
      <div className="navbar-left">
        <img 
          src="https://upload.wikimedia.org/wikipedia/commons/3/39/YouTube_Logo_2015.png" 
          alt="YouTube logo" 
          className="logo" 
        />
        <input 
          type="text" 
          placeholder="검색" 
          className="search-bar" 
        />
      </div>
      <div className="navbar-right">
        <button className="icon">🔔</button>
        <button className="icon">👤</button>
      </div>
    </div>
  );
};

export default Navbar;