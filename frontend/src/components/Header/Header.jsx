import React from 'react';
import './Header.css';

const Header = () => {
  return (
    <div className='header' id="header">
      <div className="header-overlay"></div>
      <div className="header-contents">
        <h1>Delicious Meals Delivered Fast</h1>
        <p>Fresh, hot, and right to your doorstep. Discover your next favorite meal today.</p>
        <button>Explore Menu</button>
      </div>
    </div>
  );
};

export default Header;
