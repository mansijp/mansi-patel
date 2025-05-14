import React, { useState } from "react";
import './projects.css';

import GitHubIcon from '../../img/contacts/github-icon.png';

// 1
import BookstoreApp from '../../img/projects/bookstoreapp.gif';
import BookstoreAppThumb from '../../img/projects/bookstoreapp.JPG';
// 2
import ThisWebsite from '../../img/projects/thiswebsite.gif';
import ThisWebsiteThumb from '../../img/projects/thiswebsite.JPG';
// 3
import PhishMe from '../../img/projects/phishme.gif';
import PhishMeThumb from '../../img/projects/phishme.JPG';
// 4
import LibraryManagement from '../../img/projects/librarymanagement.gif';
import LibraryManagementThumb from '../../img/projects/librarymanagement.JPG';
// 5
//import EmotionDetection from '../../img/projects/emotiondetection.gif';
//import EmotionDetectionThumb from '../../img/projects/emotiondetection.png';
// 6
import Bizpoints from '../../img/projects/bizpoints.gif';
import BizpointsThumb from '../../img/projects/bizpoints.JPG';
// 7
import RoverOperatorDashboard from '../../img/projects/roveroperatordashboard.gif';
import RoverOperatorDashboardThumb from '../../img/projects/roveroperatordashboardthumb.JPG';


// Skills Logos
import PythonLogo from '../../img/skills/python.png';
import JavaLogo from '../../img/skills/java.png';
import ReactLogo from '../../img/skills/react.png';
import MongoDBLogo from '../../img/skills/mongodb.png';
import GitLogo from '../../img/skills/git.png';
import JSLogo from '../../img/skills/javascript.png';
import HTML5Logo from '../../img/skills/html5.png';
import CSS3Logo from '../../img/skills/css3.png';
import JavaFXLogo from '../../img/skills/javafx.png';
import FigmaLogo from '../../img/skills/figma.png';
import DockerLogo from '../../img/skills/docker.png';
import KubernetesLogo from '../../img/skills/kubernetes.png';
import GKELogo from '../../img/skills/gke.png';
import FastAPILogo from '../../img/skills/fastapi.png';
import NginxLogo from '../../img/skills/nginx.png';
import AzureLogo from '../../img/skills/azure.png';

const projects = [
    {
        title: "This Website!",
        githubLink: "https://github.com/mansijp/mansi-patel",
        skills: [[JSLogo, "JavaScript"], [CSS3Logo, "CSS3"], [HTML5Logo, "HTML5"], [ReactLogo, "React"], [GitLogo, "Git"]],          
        description: [
            "Built a full-stack web application with a ReactJS front-end, and JavaScript backend.",
            "Implemented a user-friendly interface with CSS styling and appealing color theme.",
            "Applied custom light setting functionality for improved user experience.",
            "Applied code versioning using Git.",
            <>
                Access the application here: {" "}
                <a id="project-link" href="https://mansi-patel.netlify.app/#home" rel="noopener noreferrer">
                    <br/><b>Mansi Patel's Website</b>
                </a>
            </>
        ],
        image: ThisWebsite,
        staticImage: ThisWebsiteThumb
    },
    {
        title: "Library Management System",
        githubLink: "https://github.com/mansijp/LMS_CAPSTONE_2025/",
        skills: [[PythonLogo, "Python"], [FastAPILogo, "FastAPI"], [CSS3Logo, "CSS3"], [HTML5Logo, "HTML5"], [FigmaLogo, "Figma"], [MongoDBLogo, "MongoDB"], [DockerLogo, "Docker"], [KubernetesLogo, "Kubernetes"], [GKELogo, "Google Cloud"], [NginxLogo, "NGINX Logo"]],          
        description: [
            "Developed a libray management system to reduce manual efforts and errors with customer or catalog management and administration.",
            "Implemented a microservice architecture with FastAPI applications, JavaScript, HTML, CSS and Bootstrap.",
            "Deployed on Google Cloud using Docker, Kubernetes, and the Google Kubernetes Engine with NGINX and Ingress.",
            <>
                Access the application here: {" "}
                <a id="project-link" href="https://34.47.39.132/auth" target="_blank" rel="noopener noreferrer">
                    <br/><b>Library Management System</b>
                </a>
            </>
        ],
        image: LibraryManagement,
        staticImage: LibraryManagementThumb
    },
    {
        title: "Rover Operator Dashboard",
        githubLink: "https://github.com/mansijp/Rover-Navigator-and-Operator",
        skills: [[PythonLogo, "Python"], [AzureLogo, "Azure"], [DockerLogo, "Docker"], [JSLogo,"JavaScript"], [HTML5Logo,"HTML5"], [CSS3Logo, "CSS3"], [GitLogo, "Git"]],
        description: [
            "Innovated a responsive Python algorithm enabling rover navigation on a dynamic map and CRUD operations for disarming mines.",
            "Deployed and tested the scalable application using Docker and Microsoft Azure with concurrent access for multiple users.",
            "Implemented Bootstrap techniques and improved UI elements for optimal user experience and responsiveness.",
            <>
                Access the application here: {" "}
                <a id="project-link" href="https://coe892lab42025g17-eubjf7asb2acbpdx.canadacentral-01.azurewebsites.net/lab4" target="_blank" rel="noopener noreferrer">
                    <br/><b>Rover Operator Dashboard</b>
                </a>
            </>
        ],
        image: RoverOperatorDashboard,
        staticImage: RoverOperatorDashboardThumb
    },
    {
        title: "BizPoints: Resources Module",
        githubLink: "https://github.com/mansijp/resources-and-programs",
        skills: [[ReactLogo, "React"], [JSLogo, "JavaScript"], [MongoDBLogo, "MongoDB"], [HTML5Logo, "HTML5"], [CSS3Logo, "CSS3"]],
        description: [
            "Developed a responsive full-stack ReactJS application with a JavaScript backend to provide resources and training programs for AlphaBiz Clients.",
            "Implemented the backend logic and API endpoints with real-time data IO for the CPS714 (Software Project Management) class.",
            "Created a Work Breakdown Structure on MS Project to allocate resources as the group's Project Manager."
        ],
        image: Bizpoints,
        staticImage: BizpointsThumb
    },
    {
        title: "BookStore App",
        githubLink: "https://github.com/mansijp/BookStoreApplication",
        skills: [[JavaLogo, "Java"], [JavaFXLogo, "JavaFX"], [GitLogo, "Git"]],
        description: [
            "Developed a Java bookstore application for item and customer management as a group project for COE528 (Object Oriented Analysis & Design).",
            "Implemented various software design patterns and object relationships.",
            "Designed the frontend GUI using HTML5 and CSS3 itnegrated with JavaFX.",
            "Ran and demoed the application to professor using the Netbeans IDE."
        ],
        image: BookstoreApp,
        staticImage: BookstoreAppThumb
    },
    {
        title: "Phish Me!",
        githubLink: "https://github.com/mansijp/Phish-It",
        skills: [[JSLogo, "JavaScript"], [CSS3Logo, "CSS3"], [HTML5Logo, "HTML5"], [ReactLogo, "React"]],
        description: [
            "Created a ReactJS web application to spread awareness about phishing emails and cybersecurity.",
            "Won the Cybersecurity Award from the Level-Up Socity hackathon for innovation and gamified solution to prevent phishing attacks.",
            <>
                Pitched project and idea to judges:{" "}
                <a id="project-link" href="https://www.youtube.com/watch?v=r7kYrnl168w" target="_blank" rel="noopener noreferrer">
                    <br/><b>Phish-Me Presentation | YT</b>
                </a>
            </>
        ],
        image: PhishMe,
        staticImage: PhishMeThumb
    }
];

const Projects = () => {
    const [clickedGif, setClickedGif] = useState(null);

    const handleImageClick = (index) => {
        setClickedGif(clickedGif === index ? null : index);
    };

    return (
        <section id="projects">
            <div className="projects-title-container">
                <p className="projects-title">Projects</p>
                <div className="demo-container"><i id="enlarge-instruct">Click image to play the Demo!</i></div><hr id="divider" />
                <div className="projects-container">
                    {projects.map((project, index) => (
                        <div className="project-card" key={index}>
                            <div className="project-header">
                                <h3 className="project-title">{project.title}</h3>
                                <a href={project.githubLink} className="github-link" target="_blank" rel="noopener noreferrer">
                                    <img src={GitHubIcon} alt="GitHub" />
                                </a>
                            </div>
                            <img 
                                src={clickedGif === index ? project.image : project.staticImage} 
                                alt={project.title} 
                                className="project-image" 
                                onClick={() => handleImageClick(index)} 
                            />
                            <div className="skills-list">
                                {project.skills && project.skills.map((skill, idx) => (
                                    <img key={idx} src={skill[0]} alt={skill[1]} className="skill-icon" title={skill[1]} />
                                ))}
                            </div>
                            <div className="project-description">
                                <ul>
                                    {project.description.map((desc, idx) => (
                                        <li key={idx}>{desc}</li>
                                    ))}
                                </ul>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Projects;