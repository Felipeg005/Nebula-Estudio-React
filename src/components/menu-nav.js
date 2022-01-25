import React from 'react';
import video from '../videos/menu-video-animation.mp4'

const Nav = () => {
  return (
    <>
    <video autoPlay="autoplay" muted id="menu-video">
    <source src={video} type="video/mp4"></source>
    </video>
    <nav className="nav-container">
      <ul className="menu-items">
        <li className="menu-item">
          <a href="#portfolio">Portfolio</a>
        </li>
        <li className="menu-item">
          <a href="#aboutme">Aboutme</a>
        </li>
        <li className="menu-item">
          <a href="#contactme">Contact</a>
        </li>
      </ul>
    </nav>
    </>
  );
};

export default Nav;