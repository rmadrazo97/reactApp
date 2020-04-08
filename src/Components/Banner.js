import React from 'react';
import './Banner.css';
import logo from './assets/logo.svg';


function Banner() {
    var name = 'Alejandro',
        lastname = 'Madrazo';

    const date = new Date();


    return (
        <div className="App">
            <header className="App-header">
                <img src={logo} className="App-logo" alt="logo" />
                <h1>
                    {`${name} ${lastname}`}
                </h1>
                <p>
                    Software Architect
        </p>

                <span>
                    Email: jmadrazo7@gmail.com
                </span>
                <p>
                    {` Time: ${date.getHours() % 12} o'clock `}
                    with {date.getMinutes()} minutes
                </p>

            </header>
        </div >
    );
}

export default Banner;
