import React from 'react';
import logo from '../assets/images/LOGOSIMBOLO.png'

const Main = () => {
  return (
    <>
      <main className='main-container'>
        <img className='logo' src={logo}/>
      </main>
    </>
  );
};

window.addEventListener('scroll' ,() => {
  console.log('hi')
})

export default Main;