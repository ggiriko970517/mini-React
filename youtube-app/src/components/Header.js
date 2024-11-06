import React from 'react';
import './style/Header.scss';

function Header() {
  return (
    <header>
      <div className="logo">YouTube</div>
      <input type="text" placeholder="Search" />
    </header>
  );
}

export default Header;