import { useState, useEffect } from 'react'
import React from 'react'
import "./NavigationBar2.css"


const NavigationBar = () => {
const [navbar, setNavbar] = useState(false);
const [mobileNavbarBtn, setMobileNavbarBtn] = useState(false);

//changes the css class of navbar when scrolled
const changeBackground = () => {
    if(window.scrollY >= 80) {
        setNavbar(true);
    }else{
        setNavbar(false);
    }
};

const mobileNavBtn = () => {
    console.log("help");
}

window.addEventListener('scroll', changeBackground);

    return (

        // <div className={navbar ? 'topnav active' : 'topnav'}>
        <div className={`topnav ${navbar ? "active" : ""} ${mobileNavbarBtn ? "responsive" : ""}`}>
              <a class="active" href="#home">Home</a>
  <a href="#news">News</a>
  <a href="#contact">Contact</a>
  <a href="#about">About</a>
  <a href="javascript:void(0)" class="icon" onClick={() => setMobileNavbarBtn(!mobileNavbarBtn)}>
    <i class="fa fa-bars"></i>
  </a>
        </div>
    )
}

export default NavigationBar
