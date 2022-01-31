import React from 'react';
import video from '../videos/menu-video-animation.mp4';

const Nav = () => {
  return (
    <>
    <video autoPlay="autoplay" muted id="menu-video">
    <source src={video} type="video/mp4"></source>
    </video>
    <nav className="nav-container">
      <ul className="menu-items">
        <li className="menu-item">
          <a href="#Web Development">Web Development</a>
        </li>
        <li className="menu-item">
          <a href="#Graphic Design">Graphic Design</a>
        </li>
        <li className="menu-item">
          <a href="#2D Animation">2D Animation</a>
        </li>
      </ul>
    </nav>
    </>
  );
};

export default Nav;