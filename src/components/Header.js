import React from "react";
import "../styles/Header.css";
import "../styles/HeaderAnimation.css";

const Header = () => {
  return (
    <div className="headerContainer">
      {/* <p className="headerText">Hello! My name is</p> */}
      {/* <h1 className="headerText headerName">Lek Jing Kai</h1> */}
      <div className="box">
        <div className="title">
          <span className="block"></span>
          <h2>
            LEK JING KAI<span></span>
          </h2>
        </div>
      </div>
      <h1 className="headerDesc">Front-end developer</h1>
      <p className="headerText">
        Hello there! I'm an aspiring front-end developer who wants to provide
        high-impact modern web applications. Passionate about learning new
        things to increase the quality of my web applications.
      </p>
    </div>
  );
};

export default Header;
