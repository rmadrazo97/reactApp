import React from 'react';
import './Nav.css';


function Nav() {
    return (
        <div className="topnav">
            <a className="active" href="#home">Alejandro Madrazo</a>
            <a href="#about">About me</a>
            <a href="#projects">Projects</a>
            <a href="#contact">Contact</a>
        </div>
    );
}

export default Nav;
