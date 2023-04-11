import React from "react";
import './about-style.scss';
import StyledTag from "../styled-tags/tags";

const About = () => {
    return (
        <div className="about-container">
            <div className="info-container">
                <h1 className="about-title">About me<hr className="title-line" /></h1>
                <p className="info">Hey! I'm Nicolás and I'm a <b>FrontEnd Developer</b> from Argentina. I started getting interested in Web Developement in 2020. I rapedly began doing <b>courses and tutorials</b> in order to increase my programming skills. I've been working on own <b>Projects</b> so I can imporve my skills as much as i can.</p>
                <p className="info">I enjoy sharing all my knowledge and learning about the new <b>tools</b> that will help me in my work and projects. My <b>main focus</b> right now is to learn more and get my chance in having a job as a Developer.</p>
                <p className="info">These are <b>the technologies</b> I'm currently working with:</p>
                <div className="skills-info">
                    <StyledTag content="HTML" />
                    <StyledTag content="CSS" />
                    <StyledTag content="JavaScript" />
                    <StyledTag content="Responsive Design" />
                    <StyledTag content="React" />
                    <StyledTag content="SASS" />
                    <StyledTag content="Git" />
                    <StyledTag content="GitHub" />
                    <StyledTag content="React Native" />
                    <StyledTag content="Expo" />
                    <StyledTag content="JSON" />
                </div>
            </div>
            <div className="picture-container">
                <div className="my-picture"></div>
            </div>
        </div>
    );
}

export default About;