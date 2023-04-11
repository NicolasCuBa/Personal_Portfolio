import React from "react";
import './contact-style.scss';

const Contact = () => {
    return(
        <div className="contact-container">
            <h1 className="contact-title">Get in touch<hr className="contact-line"></hr></h1>
            <div className="contact-description">If you are interested in my work, please contact me. I'm currently open for new opportunities. Here are all the places you can find me. Thanks for passing by!</div>
            <div className="icons-box">
                <a href="https://www.instagram.com/ni.bastit/" target="_blank"><div className="fa brands fa-instagram"></div></a>
                <a href="https://twitter.com/Goshikitoo2323" target="_blank"><div className="fa brands fa-twitter"></div></a>
                <a href="https://github.com/NicolasCuBa" target="_blank"><div className="fa brands fa-github git2"></div></a>
                <a href="https://www.linkedin.com/in/nicol%C3%A1s-curros-bastit-a7022b249/" target="_blank"><div className="fa brands fa-linkedin"></div></a>
                <a href="https://codepen.io/nicoreply23" target="_blank"><div className="fa brands fa-codepen codepen2"></div></a>
            </div>
        </div>
    );
}

export default Contact;