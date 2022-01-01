import React from 'react';

const Nav = () => {
  return (
    <>
    <video autoplay="autoplay" muted id="menu-video">
    <source src="/assets/videos/menu-video-animation.mp4" type="video/mp4"></source>
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