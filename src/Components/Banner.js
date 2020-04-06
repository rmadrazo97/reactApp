import React from 'react';
import './Banner.css';
import logo from './assets/logo.svg';


function Banner() {
    return (
        <div className="App">
            <header className="App-header">
                <img src={logo} className="App-logo" alt="logo" />
                <h1>
                    Alejandro Madrazo
        </h1>
                <p>
                    This is my portfolio app built with react
        </p>

                <span>
                    Email: jmadrazo7@gmail.com
        </span>

            </header>
        </div >
    );
}

export default Banner;