import { useState, useEffect } from "react";
import React from "react";
import logo from './img/Logo.png';
import favicon from './img/Favicon.png';
import profilepic from './img/Profile picture.jpg';
import doublearrow from './img/double-arrow.png';
import moneytrackerapp from './img/MoneyTrackerApp.png';
import heartdisease from './img/HeartDiseasePrediction.png';
import financialadpersonanalysis from './img/FinancialAdPersonAnalysis.png';
import braintactoe from './img/BrainTacToe.jpeg';
import mail from './img/mail.png';
import instagram from './img/Instagram Logo.png';
import linkedin from './img/Linkedin.png';
import triplebar from './img/Triple Bar.png';
import promptflow from './img/PromptFlow.png';
import trijebali from './img/TrijeBali.png';
import insightUBC from './img/InsightUBC.png';
import wasteNot from './img/WasteNot.png';
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

    const [backgroundColorSaver, setBackgroundColorSaver] = useState("rgba(0, 0, 0, 0)");

    function openMenu() {
        if (window.innerWidth >= 768) {
            return;
        }

        if (menuDisplay === "none") {
            setMenuDisplay("block");
            setDarkerDisplay("block");
            setBackgroundColorSaver(backgroundColor);
            setBackgroundColor("rgba(0, 0, 0, 1");
            document.body.style.overflow = "hidden";
        } else {
            setMenuDisplay("none");
            setDarkerDisplay("none");
            setBackgroundColor(backgroundColorSaver);
            document.body.style.overflow = "auto";
        }
    }

    const [menuDisplay, setMenuDisplay] = useState(
        window.innerWidth < 768 ? "none" : "block"
    );

    const [darkerDisplay, setDarkerDisplay] = useState(
        "none"
    );

    const [listOfItems, setListOfItems] = useState([])

    function splitProjects() {
        if (window.innerWidth >= 768) {
            let listOfItemsTemporary = [];

            for (let i = 0; i < listItems.length; i++) {
                if (i % 3 === 0) {
                    listOfItemsTemporary.push([]);
                }
                listOfItemsTemporary[listOfItemsTemporary.length - 1].push(listItems[i][0]);

            }

            setListOfItems(listOfItemsTemporary);
        } else {
            setListOfItems(listItems);
        }

        return
    }

    useEffect(() => {
        splitProjects();
    }, []);

    useEffect(() => {
        function handleResize() {
            splitProjects();
        }

        window.addEventListener("resize", handleResize);

        return () => window.removeEventListener("resize", handleResize);
    }, [])

    const [bodyHeight, setBodyHeight] = useState("0");

    useEffect(() => {
        if (window.innerWidth >= 768) {
            console.log("abc");
            setBodyHeight(listOfItems.length * 30 + 10 + "vw");
        } else {
            setBodyHeight(listOfItems.length * 24 + 5 + "rem");
        }
    },)

    // List of projects made
    const [listItems, setListItems] = useState([
        [{
            name: "MoneyTrackerApp",
            tools: ["Java", "JUnit", "Swing"],
            github: true,
            githubLink: "https://github.com/josedamara/MoneyTrackerApp",
            description: "A Java-based windows app to help one's track money flow with a lot of features, including filtering by various properties and allowing multiple bank accounts. The whole application was built using Java. The data is saved/loaded using JSON file and the UI was built using Java Swing library",
            image: moneytrackerapp
        }],
        [{
            name: "BrainTacToe",
            tools: ["Python", "JavaScript", "HTML", "CSS"],
            github: true,
            githubLink: "https://github.com/Ivan-web-source/matchmind",
            description: "A Python-based web app to improve learning quality through a combination of flashcard learning system with tic tac toe game. Each correct answer grants a turn to play the tic tac toe.",
            image: braintactoe
        }],
        [{
            name: "Heart Disease Prediction",
            tools: ["R", "JupyterLab", "KNN"],
            github: true,
            githubLink: "https://github.com/wtarit/dsci-100-project",
            description: "A heart disease prediction report based on the Cleveland Heart Disease dataset on Kaggle. The whole process was done with R programming language in the JupyterLab platform. The prediction was done using KNN-algorithm with a testing accuracy of 0.9.",
            image: heartdisease
        }],
        [{
            name: "Financial Ad Person Analysis",
            tools: ["Python", "JupyterLab", "PyTorch", "Selenium", "CNN"],
            github: true,
            githubLink: "https://github.com/josedamara/financial-ad-person-analysis",
            description: "A financial ad analysis classification report based on scraped financial ad images from Google Images using Selenium. Built a simple CNN model to classify ads with person and without person existence.",
            image: financialadpersonanalysis
        }],
        [{
            name: "PromptFlow",
            tools: ["HTML", "CSS", "Figma"],
            github: true,
            githubLink: "https://github.com/potatotyper/PromptFlow",
            description: "An automated prompt engineering as a service to improve your chatbot system prompt by gathering user satisfaction feedback, which then will be improved using RAG method. Mainly taking part as UI/UX designer as well as implementing it into HTML and CSS.",
            image: promptflow
        }],
        [{
            name: "InsightUBC",
            tools: ["RestAPI", "Express", "React", "Vite", "TypeScript", "Mocha", "Selenium", "TailwindCSS", "HTML"],
            github: false,
            description: "A web app that allows user to add and delete datasets containing valid UBC courses information. Built using React Typescript on the frontend and Typescript on the backend, with Express for the server. Additionally, implemented backend unit testing with Mocha + Chai testing, as well as Selenium E2E testing.",
            image: insightUBC
        }],
        [{
            name: "WasteNot",
            tools: ["SQL", "Oracle", "JavaScript", "HTML"],
            github: false,
            description: "A web application for food waste management that tracks surplus ingredients, suggests recipes based on available food, and connects users with local donation options for unused items. Built using JavaScript on the frontend that allows user to access and modify data on the Oracle database.",
            image: wasteNot
        }],
        [{
            name: "Trije Bali",
            tools: ["React", "Vite", "TypeScript", "TailwindCSS", "HTML", "Figma", "Cloudflare"],
            github: true,
            githubLink: "https://github.com/josedamara/website-trije-bali",
            description: "A company website for a Balinese local coffee product, with a premium but authentic vibes. Developed using TypeScript on a React + Vite framework and deployed with Cloudflare.",
            image: trijebali
        }]
    ])

    return (
        <div className="App">
            {/* Container for the purple and black background */}
            <div className="darker" style={{ display: darkerDisplay }} onClick={() => openMenu()}>&nbsp;</div>
            <div className="root-container" id="about">
                {/* Header to put logo and menus */}
                <header style={{ backgroundColor: backgroundColor }}>
                    {/* Logo */}
                    <div className="logo-container">
                        <img
                            src={logo}
                            className="logo"
                            alt="Logo"></img>
                        <img
                            src={triplebar}
                            className="triplebar"
                            alt="Menu"
                            onClick={() => openMenu()}></img>
                    </div>
                    {/* Menus */}
                    <div className="menu" style={{ display: menuDisplay }}>
                        {/* Contact */}
                        <div className="menu-list">
                            <a className="menu-button" href="#contact" onClick={() => { openMenu() }}>Contact</a>
                        </div>
                        {/* Project */}
                        <div className="menu-list">
                            <a className="menu-button" href="#projects" onClick={() => { openMenu() }}>Project</a>
                        </div>
                        {/* About */}
                        <div className="menu-list">
                            <a className="menu-button" href="#about" onClick={() => { openMenu() }}>About</a>
                        </div>
                    </div>
                </header>
                {/* My photo */}
                <div className="Photo">
                    <span className="profilepic">
                        <img
                            src={favicon}
                            className="profilepic-back"
                            alt="Profile">
                        </img>
                        <img
                            src={profilepic}
                            className="profilepic-front"
                            alt="Profile">
                        </img>
                    </span>
                </div>
                {/* Greetings text */}
                <div className="Greetings">
                    <p className="GreetingText">Hi! I'm Jose</p>
                </div>
                {/* Title text */}
                <div className="Title">
                    <h1 className="Title-text">Turning logic into software<br /> and data into insights</h1>
                </div>
                {/* Personal description text */}
                <div className="Description">
                    <h3 className="Description-text">I'm a Software Engineer and Data Analyst based in Vancouver.
                        <br />Interested in Front-End Development, Responsive Web Design, and Machine Learning
                    </h3>
                </div>
            </div>
            <div className="body-struct">
                {/* Arrow pointing down to projects */}
                <a href="#projects">
                    <img src={doublearrow}
                        className="down-arrow"
                        alt="Down Arrow"></img>
                </a>
            </div>
            <div className="body-container" id="projects" style={{ height: `${bodyHeight}` }}>
                <h2 className="my-work">My Work</h2>
                <p className="collection">A collection of projects I've worked on</p>
                {listOfItems.map((list) => (
                    <div className="project-container">
                        {list.map((item) => (
                            // A place containing each project
                            <div className="project">
                                {/* Project image container */}
                                <div
                                    className="project-image"
                                    style={{
                                        background: `url(${item.image}) center/cover no-repeat`,
                                        position: "absolute"
                                    }}>
                                    {/* Gradation */}
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
                                {/* Project body container */}
                                <div className="project-body">
                                    {/* Project name */}
                                    <h3><a className="project-link" href={item.githubLink} target="_blank" rel="noreferrer">{item.name}</a></h3>
                                    {/* Project tools list */}
                                    <div className="tool-list">
                                        {item.tools.map((tool) => (
                                            <span className="project-tool">{tool}</span>
                                        ))}
                                    </div>
                                    {/* Project description */}
                                    <p className="project-description">{item.description}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                ))}
            </div>
            <footer id="contact">
                <h6>Contact</h6>
                <div className="contact-container">
                    <div>
                        <div className="contact instagram"><a className="a-contact" href="https://www.instagram.com/jose.damara/" target="_blank" rel="noreferrer">
                            <img src={instagram}
                                alt="Instagram"></img>
                            <span>Instagram</span>
                        </a></div>
                        <div className="contact email"><a className="a-contact" href="mailto:josedamara0211@gmail.com">
                            <img src={mail}
                                alt="Mail"></img>
                            <span>Email</span>
                        </a></div>
                        <div className="contact linkedin"><a className="a-contact" href="https://www.linkedin.com/in/jose-damara-hadriana/" target="_blank" rel="noreferrer">
                            <img src={linkedin}
                                alt="Mail"></img>
                            <span>LinkedIn</span>
                        </a></div>
                    </div>
                </div>
            </footer>
        </div>
    );
}

export default App;
