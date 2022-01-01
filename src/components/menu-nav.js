import React from 'react';
import menuAnimation from '../assets/videos/menu-video-animation.mp4'

const Nav = () => {
  const openMenu = () => {

  }

  return (
    <nav className="nav-container hidden">
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
  );
};

export default Nav;