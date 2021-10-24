import React from 'react';
import { Link } from 'react-router-dom';
import { ReactComponent as Logo } from '../assets/crown.svg'
import './Header_19.scss'

const Header_19 = () => {
  return (
    <div>
      <div className="header">
        <Link to="/" className="logo-container">
          <Logo />
        </Link>
        <div className="options">
          <Link to="./shop_19" className="option">
            Shop
          </Link>
          <Link to="/contact_19" className="option">
            Contact
          </Link>
          <Link to="/signin_19" className="option">
            Sign In
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Header_19;
