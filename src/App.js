import { useState, useEffect } from "react";
import React from "react";
import logo from './img/Logo.png';
import profilepic from './img/Profile picture.jpg';
import doublearrow from './img/double-arrow.png';
import moneytrackerapp from './img/MoneyTrackerApp.png';
import heartdisease from './img/HeartDiseasePrediction.png';
import mail from './img/mail.png';
import instagram from './img/Instagram Logo.png';
import linkedin from './img/Linkedin.png';
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

    const [backgroundColor, setBackgroundColor] = useState("rgba(0, 0, 0, 0)");

    useEffect(() => {
        const handleScroll = () => {
            const scrollY = window.scrollY;
            const colorValue = `rgba(0, 0, 0, ${Math.min(0.8, scrollY / 1000)})`;
            setBackgroundColor(colorValue);
        }

        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, [])

    const [items, setItems] = useState([
        { name: "MoneyTrackerApp",
          tools: ["Java", "JUnit", "Swing"],
          github: true,
          githubLink: "https://github.com/josedamara/MoneyTrackerApp",
          description: "A Java-based windows app to help one's track money flow with a lot of features, including filtering by various properties and allowing multiple bank accounts. The whole application was built using Java. The data is saved/loaded using JSON file and the UI was built using Java Swing library",
          image: moneytrackerapp
        },
        { name: "Heart Disease Prediction",
          tools: ["R", "JupyterLab", "KNN"],
          github: true,
          githubLink: "https://github.com/wtarit/dsci-100-project",
          description: "A heart disease prediction report based on the Cleveland Heart Disease dataset on Kaggle. The whole process was done with R programming language in the JupyterLab platform. The prediction was done using KNN-algorithm with a testing accuracy of 0.9.",
          image: heartdisease
        }
    ])

  return (
    <div className="App">
    <div className="root-container" id="about">
        <header style={{backgroundColor : backgroundColor}}>
            <div className="logo-container">
                <img 
                src={logo}
                className="logo" 
                alt="Logo"></img>
            </div>
            <div className="menu">
                <div className="menu-list">
                    <a className="menu-button" href="#contact">Contact</a>
                </div>
                <div className="menu-list">
                    <a className="menu-button" href="#projects">Project</a>
                </div>
                <div className="menu-list">
                    <a className="menu-button" href="#about">About</a>
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
            <h1 className="Title-text">Turning logic into software<br /> and data into insights</h1>
        </div>
        <div className="Description">
            <h3 className="Description-text">I'm a Software Engineer and Data Analyst based in Vancouver.
                <br />Interested in Front-End Development, Responsive Web Design, and Machine Learning
            </h3>
        </div>
    </div>
    <div className="body-struct">
        <img src={doublearrow}
        className="down-arrow"
        alt="Down Arrow"></img>
    </div>
    <div className="body-container" id="projects">
        <h2 className="my-work">My Work</h2>
        <p>A collection of projects I've worked on</p>
        <div className="project-container">
            {items.map((item) => (
                <div className="project">
                    <div
                    style={{
                        width: "20vw",
                        height: "10vw",
                        borderRadius: "1vw",
                        background: `url(${item.image}) center/cover no-repeat`,
                        position: "absolute"
                    }}>
                        <div
                            style={{
                                width: "100%",
                                height: "100%",
                                position: "relative",
                                inset: 0,
                                background: "linear-gradient(to bottom, rgba(0, 0, 0, 0), white)",
                                borderRadius: "inherit"
                            }}>
                        </div>
                    </div>
                    <div className="project-body">
                        <h3><a className="project-link" href={item.githubLink} target="_blank" rel="noreferrer">{item.name}</a></h3>
                        {item.tools.map((tool) => (
                            <span className="project-tool">{tool}</span>
                        ))}
                        <p className="project-description">{item.description}</p>
                    </div>
                </div>
            ))}
        </div>
    </div>
    <footer id="contact">
        <h6>Contact</h6>
        <div className="contact-container">
            <div>
                <a href="https://www.instagram.com/jose.damara/" target="_blank" rel="noreferrer"><div className="contact instagram">
                    <img src={instagram}
                    alt="Instagram"></img>
                    <span>Instagram</span>
                </div></a>
                <a href="mailto:josedamara0211@gmail.com"><div className="contact email">
                    <img src={mail}
                    alt="Mail"></img>
                    <span>Email</span>
                </div></a>
                <a href="https://www.linkedin.com/in/jose-damara-hadriana/" target="_blank" rel="noreferrer"><div className="contact linkedin">
                    <img src={linkedin}
                    alt="Mail"></img>
                    <span>LinkedIn</span>
                </div></a>
            </div>
        </div>
    </footer>
    </div>
  );
}

export default App;
