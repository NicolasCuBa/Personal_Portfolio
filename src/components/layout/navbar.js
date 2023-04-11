import React from "react";
import './navbar-style.scss'


const Navbar = () => {
    return (
        <div className="header">
            <p className="logo"><a className="logo-link" href="#welcome">NCB</a></p>
            <nav className="navbar">
                <ul>
                    <li><a className="nav-link" href="#welcome">Home</a></li>
                    <li><a className="nav-link" href="#about">About</a></li>
                    <li><a className="nav-link" href="#projects">Work</a></li>
                    <li><a className="nav-link" href="#contact">Contact</a></li>
                </ul>
            </nav>
        </div>
    )
}

export default Navbar;