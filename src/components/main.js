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
  const logo = document.querySelector('.logo');
  const scrolled = window.pageYOffset;
  console.log(window.pageYOffset)
  const changeVal = scrolled * 0.01;
  logo.style.transform = `scale(${1 + changeVal})`;
  logo.style.opacity = `${100 - changeVal * 5}%`;
})

export default Main;