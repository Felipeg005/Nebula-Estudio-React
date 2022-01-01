import React from 'react';
import Nav from './menu-nav';

const Header = () => {
  return (
    <header className='header'>
      <button>Menu</button>
      <h1>Nebula Estudio</h1>
      <Nav />
    </header>
  );
};

export default Header;