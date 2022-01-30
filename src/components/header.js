import React, {useState} from 'react';
import Nav from './menu-nav';

const Header = () => {
  const [open, openMenu] = useState(false);
  return (
    <>
    <header className='header'>
      {
        open?
        null
        :
        <>
        <button className="nav-button" onClick={() => openMenu(true)}>Menu</button>
        </>
      }
      {
        open?
        <>
        <button className="close-button" onClick={() => openMenu(false)}>Close</button>
        <Nav />
        </>
        :null
      }
    </header>
    </>
  );
};

export default Header;