import React from 'react';

const Nav = () => {
  return (
    <nav className="headerelement headerelement2">
      <div className="lines">
        <div className="menuline line-1"></div>
        <div className="menuline line-2"></div>
        <div className="menuline line-3"></div>
      </div>
      <ul className="menuitems">
        <li className="menuitem menuitem-1">
          <a href="#portfolio">Portfolio</a>
        </li>
        <li className="menuitem menuitem-2">
          <a href="#aboutme">Aboutme</a>
        </li>
        <li className="menuitem menuitem-3">
          <a href="#contactme">Contact</a>
        </li>
      </ul>
      <div className="navmenubottom"></div>
    </nav>
  );
};

export default Nav;