import React from "react";
import './welcome-style.scss';

const WelcomeSection = () => {
    return (
          <div className="welcome-container">
            <div className="title-container">
              <h1 className="title">Hi, Welcome to my space</h1>
              <div className="subtitle-container">
                <p className="subtitle">My name is Nicolás Curros Bastit and I'm a FrontEnd Developer. I specialize in building responsive Websites and Web Applications</p>
              </div>
              <div className="button-container">
              <a href="#projects"><button className="projects-button">PROJECTS</button></a>
              </div>
            </div>
          </div>
    );
}

export default WelcomeSection;