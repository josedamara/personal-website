import { useState, useEffect } from "react";
import React from "react";
import logo from './img/Logo.webp';
import favicon from './img/Favicon.webp';
import profilepic from './img/ProfilePicture.webp';
import doublearrow from './img/double-arrow.webp';
import moneytrackerapp from './img/MoneyTrackerApp.webp';
import heartdisease from './img/HeartDiseasePrediction.webp';
import financialadpersonanalysis from './img/FinancialAdPersonAnalysis.webp';
import braintactoe from './img/BrainTacToe.webp';
import mail from './img/mail.webp';
import instagram from './img/Instagram.webp';
import linkedin from './img/Linkedin.webp';
import triplebar from './img/TripleBar.webp';
import promptflow from './img/PromptFlow.webp';
import trijebali from './img/TrijeBali.webp';
import insightUBC from './img/InsightUBC.webp';
import wasteNot from './img/WasteNot.webp';
import ubcOpenRobotics from './img/UBCOpenRobotics.webp';
import './App.css';

// List of projects made
// liveLink: deployed site (the title links here), githubLink: repo (shown as an icon),
// status: optional small badge, e.g. "Deploying soon"
const projects = [
    {
        name: "MoneyTrackerApp",
        tools: ["Java", "JUnit", "Swing"],
        githubLink: "https://github.com/josedamara/MoneyTrackerApp",
        description: "A Java-based windows app to help people track money flow with a lot of features, including filtering by various properties and allowing multiple bank accounts. The whole application was built using Java. The data is saved/loaded using JSON file and the UI was built using Java Swing library",
        image: moneytrackerapp
    },
    {
        name: "BrainTacToe",
        tools: ["Python", "JavaScript", "HTML", "CSS"],
        githubLink: "https://github.com/Ivan-web-source/matchmind",
        description: "A Python-based web app to improve learning quality through a combination of flashcard learning system with tic tac toe game. Each correct answer grants a turn to play the tic tac toe.",
        image: braintactoe
    },
    {
        name: "Heart Disease Prediction",
        tools: ["R", "JupyterLab", "KNN"],
        githubLink: "https://github.com/wtarit/dsci-100-project",
        description: "A heart disease prediction report based on the Cleveland Heart Disease dataset on Kaggle. The whole process was done with R programming language in the JupyterLab platform. The prediction was done using KNN-algorithm with a testing accuracy of 0.9.",
        image: heartdisease
    },
    {
        name: "Financial Ad Person Analysis",
        tools: ["Python", "JupyterLab", "PyTorch", "Selenium", "CNN"],
        githubLink: "https://github.com/josedamara/financial-ad-person-analysis",
        description: "A financial ad analysis classification report based on scraped financial ad images from Google Images using Selenium. Built a simple CNN model to classify ads with person and without person existence.",
        image: financialadpersonanalysis
    },
    {
        name: "PromptFlow",
        tools: ["HTML", "CSS", "Figma"],
        githubLink: "https://github.com/potatotyper/PromptFlow",
        description: "An automated prompt engineering as a service to improve your chatbot system prompt by gathering user satisfaction feedback, which then will be improved using RAG method. Mainly taking part as UI/UX designer as well as implementing it into HTML and CSS.",
        image: promptflow
    },
    {
        name: "InsightUBC",
        tools: ["RestAPI", "Express", "React", "Vite", "TypeScript", "Mocha", "Selenium", "TailwindCSS", "HTML"],
        description: "A web app that allows users to add and delete datasets containing valid UBC courses information. Built using React Typescript on the frontend and Typescript on the backend, with Express for the server. Additionally, implemented backend unit testing with Mocha + Chai testing, as well as Selenium E2E testing.",
        image: insightUBC
    },
    {
        name: "WasteNot",
        tools: ["SQL", "Oracle", "JavaScript", "HTML"],
        githubLink: "https://github.com/josedamara/WasteNot",
        description: "A web application for food waste management that tracks surplus ingredients, suggests recipes based on available food, and connects users with local donation options for unused items. Built using JavaScript on the frontend that allows user to access and modify data on the Oracle database.",
        image: wasteNot
    },
    {
        name: "Trije Bali",
        tools: ["React", "Vite", "TypeScript", "TailwindCSS", "HTML", "Figma", "Cloudflare"],
        githubLink: "https://github.com/josedamara/website-trije-bali",
        liveLink: "https://www.trijebali.com",
        description: "A company website for a Balinese local coffee product, with a premium but authentic vibe. Developed using TypeScript on a React + Vite framework and deployed with Cloudflare.",
        image: trijebali
    },
    {
        name: "UBC Open Robotics",
        tools: ["HTML", "TailwindCSS", "JavaScript", "Jekyll"],
        githubLink: "https://github.com/UBC-OpenRobotics/website",
        liveLink: "https://openrobotics.ca",
        description: "UBC Open Robotics profile website that provides complete information about the club activities and organization. Built using static Jekyll framework, that allows efficient website by minimizing rendering at runtime.",
        image: ubcOpenRobotics
    }
];

// Header background gets darker as the page scrolls down
function headerColorFromScroll() {
    return `rgba(0, 0, 0, ${Math.min(0.8, window.scrollY / 1000)})`;
}

function App() {
    const [backgroundColor, setBackgroundColor] = useState("rgba(0, 0, 0, 0)");

    useEffect(() => {
        const handleScroll = () => {
            setBackgroundColor(headerColorFromScroll());
        }

        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, [])

    // Mobile menu only; on desktop the menu is always shown by CSS
    const [menuOpen, setMenuOpen] = useState(false);

    useEffect(() => {
        document.body.style.overflow = menuOpen ? "hidden" : "auto";
    }, [menuOpen]);

    // Close the mobile menu if the window is widened to desktop size
    useEffect(() => {
        function handleResize() {
            if (window.innerWidth >= 768) {
                setMenuOpen(false);
            }
        }

        window.addEventListener("resize", handleResize);
        return () => window.removeEventListener("resize", handleResize);
    }, [])

    return (
        <div className="App">
            {/* Dark overlay behind the open mobile menu */}
            {menuOpen && <div className="darker" onClick={() => setMenuOpen(false)}></div>}
            {/* Header to put logo and menus */}
            <header style={{ backgroundColor: menuOpen ? "rgba(0, 0, 0, 1)" : backgroundColor }}>
                {/* Logo */}
                <div className="logo-container">
                    <img
                        src={logo}
                        className="logo"
                        alt="Logo"></img>
                    <button
                        type="button"
                        className="triplebar"
                        aria-label="Menu"
                        aria-expanded={menuOpen}
                        aria-controls="site-menu"
                        onClick={() => setMenuOpen(!menuOpen)}>
                        <img src={triplebar} alt=""></img>
                    </button>
                </div>
                {/* Menus */}
                <nav id="site-menu" className={menuOpen ? "menu open" : "menu"}>
                    <a className="menu-button" href="#about" onClick={() => setMenuOpen(false)}>About</a>
                    <a className="menu-button" href="#projects" onClick={() => setMenuOpen(false)}>Project</a>
                    <a className="menu-button" href="#contact" onClick={() => setMenuOpen(false)}>Contact</a>
                </nav>
            </header>
            <section className="hero" id="about">
                {/* My photo */}
                <div className="Photo">
                    <span className="profilepic">
                        <img
                            src={favicon}
                            className="profilepic-back"
                            alt="Jose's logo">
                        </img>
                        <img
                            src={profilepic}
                            className="profilepic-front"
                            alt="Jose's profile">
                        </img>
                    </span>
                </div>
                {/* Greetings text */}
                <p className="GreetingText">Hi! I'm Jose</p>
                {/* Title text */}
                <h1 className="Title-text">Turning logic into software<br /> and data into insights</h1>
                {/* Personal description text */}
                <p className="Description-text">I'm a Software Engineer and Data Analyst based in Vancouver.
                    <br />Interested in Front-End Development, Responsive Web Design, and Machine Learning
                </p>
            </section>
            <section className="projects-section" id="projects">
                {/* Arrow pointing down to projects */}
                <a href="#projects">
                    <img src={doublearrow}
                        className="down-arrow"
                        alt="Down Arrow"></img>
                </a>
                <h2 className="my-work">My Work</h2>
                <p className="collection">A collection of projects I've worked on</p>
                <div className="project-grid">
                    {projects.map((item) => (
                        // A place containing each project
                        <div className="project" key={item.name}>
                            {/* Project image with a fade into the card */}
                            <div className="project-image">
                                <img src={item.image} alt={`${item.name} screenshot`} loading="lazy" />
                            </div>
                            {/* Project body container */}
                            <div className="project-body">
                                {/* Project name */}
                                <h3>
                                    {item.liveLink ? (
                                        <a className="project-link" href={item.liveLink} target="_blank" rel="noreferrer">
                                            {item.name}<span className="external-mark" aria-hidden="true">↗</span>
                                        </a>
                                    ) : (
                                        item.name
                                    )}
                                </h3>
                                {/* Project tools list */}
                                <div className="tool-list">
                                    {item.tools.map((tool) => (
                                        <span className="project-tool" key={tool}>{tool}</span>
                                    ))}
                                </div>
                                {/* Project description */}
                                <p className="project-description">{item.description}</p>
                            </div>
                            {/* GitHub icon and status badge */}
                            {(item.githubLink || item.status) && (
                                <div className="project-footer">
                                    {item.githubLink && (
                                        <a className="github-link" href={item.githubLink} target="_blank" rel="noreferrer" aria-label={`${item.name} on GitHub`}>
                                            <svg viewBox="0 0 16 16" aria-hidden="true">
                                                <path d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.06-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.013 8.013 0 0016 8c0-4.42-3.58-8-8-8z" />
                                            </svg>
                                        </a>
                                    )}
                                    {item.status && <span className="project-status">{item.status}</span>}
                                </div>
                            )}
                        </div>
                    ))}
                </div>
            </section>
            <footer id="contact">
                <h2 className="contact-title">Contact</h2>
                <div className="contact-container">
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
                            alt="LinkedIn"></img>
                        <span>LinkedIn</span>
                    </a></div>
                </div>
            </footer>
        </div>
    );
}

export default App;
