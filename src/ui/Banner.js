import React from 'react';
import { Link } from 'react-router-dom';
import arrow from '../assets/arrow.png';
import profilePicture from '../assets/maja.jpg';

export default () => (
  <div className="banner">
    <img src={profilePicture} className="banner__profile-picture"/>
    <div className="banner__text">
      Hi! My name is Maja. I’m a product design graduate based in Stockholm looking for a UI/UX designer position.<br />
      <Link to="/about-me">Learn more about me<img src={arrow} /></Link>
    </div>
  </div>
);
