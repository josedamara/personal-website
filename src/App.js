import { useState, useEffect } from "react";
import React from "react";
import logo from './img/Logo.png';
import profilepic from './img/Profile picture.jpg';
import doublearrow from './img/double-arrow.png';
import './App.css';

function App() {
    const [filter, setFilter] = useState("invert(100%) brightness(200%)");

    useEffect(() => {
        setFilter("invert(100%)");

        const handleScroll = () => {
            const scrollY = window.scrollY;
            const filterValue = `invert(${100 - Math.min(scrollY / 5, 100)}%) brightness(${200 - Math.min(scrollY / 10, 100)})`;
            setFilter(filterValue);
            console.log("ScrollY:", scrollY, " Filter:", filterValue);
        };

        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

  return (
    <div className="App">
    <div className="root-container">
        <header>
            <div className="logo-container">
                <img 
                src={logo}
                className="logo" 
                alt="Logo"
                style={{
                    filter: filter,
                    width: "10rem",
                }}></img>
            </div>
            <div className="menu">
                <div className="menu-list">
                    Contact
                </div>
                <div className="menu-list">
                    Project
                </div>
                <div className="menu-list">
                    About
                </div>
            </div>
        </header>
        <div className="Photo">
            <img
            src={profilepic}
            className="profilepic"
            alt="Profile">
            </img>
        </div>
        <div className="Greetings">
            <p className="GreetingText">Hi! I'm Jose</p>
        </div>
        <div className="Title">
            <h1 className="Title-text">Building digital products,<br />brands, and experience</h1>
        </div>
        <div className="Description">
            <h3 className="Description-text">I'm a Front-end Developer based in Canada. I specialize in UI/UX Design,
                <br />Responsive Web Design, and Visual Development
            </h3>
        </div>
    </div>
    <div className="body-struct">
        <img src={doublearrow}
        className="down-arrow"
        alt="Down Arrow"></img>
    </div>
    <div className="body-container">
        <h2 className="my-work">My Work</h2>
        <p>A collection of projects I've worked on</p>
    </div>
    </div>
  );
}

export default App;
