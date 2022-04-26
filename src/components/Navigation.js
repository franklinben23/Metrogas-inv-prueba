import React from 'react';
import { Link } from 'react-router-dom';
import './navigation.css';
import * as image from '../assets/index.png'

const Navigation = () => {
  return (
    <nav className="navigation">
      <div className="image-cont">
        <img src={image.default} alt="metrogas-logo" className="nav-logo"/>
      </div>
      <div className="links-cont">
        <Link to="/"> Envasadoras </Link>
        <Link to="Combustibles"> Combustibles </Link>
      </div>
    </nav>
  );
};

export default Navigation;