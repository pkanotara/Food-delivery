import React from 'react';
import './Footer.css';
import { assets } from '../../assets/assets';

const Footer = () => {
  return (
    <div className='footer' id='footer'>
      <div className="footer-content">
        <div className="footer-content-left">
          <img src={assets.logo} alt="App Logo" />
          <p>
            Order your favorite meals from our platform. Fresh, fast and reliable delivery at your doorstep. Experience the taste of quality service.
          </p>
          <div className="footer-social-icons">
            <img src={assets.facebook_icon} alt="Facebook" />
            <img src={assets.twitter_icon} alt="Twitter" />
            <img src={assets.linkedin_icon} alt="LinkedIn" />
          </div>
        </div>
        <div className="footer-content-center">
          <h2>COMPANY</h2>
          <ul>
            <li>Home</li>
            <li>About Us</li>
            <li>Delivery</li>
            <li>Privacy Policy</li>
          </ul>
        </div>
        <div className="footer-content-right">
          <h2>GET IN TOUCH</h2>
          <ul>
            <li>+91 6351xxxxxx</li>
            <li>support@petpooja.com</li>
          </ul>
        </div>
      </div>
      <hr />
      <p className="footer-copyright">
        © {new Date().getFullYear()} PetPooja All rights reserved.
      </p>
    </div>
  );
};

export default Footer;
