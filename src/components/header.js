import React, {useState} from 'react';
import Nav from './menu-nav';

const Header = () => {
  const [open, openMenu] = useState(false);
  return (
    <header className='header'>
      {
        open?
        null
        :
        <>
        <button onClick={() => openMenu(true)}>Menu</button>
        <h1 className='logo'>Nebula Estudio</h1>
        </>
      }
      {
        open?
        <>
        <button class="close-button" onClick={() => openMenu(false)}>Close</button>
        <Nav />
        </>
        :null
      }
    </header>
  );
};

export default Header;