import React, { useState } from "react";
import './experience.css';

// Companies Logo
import MinistryofEducation from '../../img/experience/ministryofeducation.png';
import Ryan from '../../img/experience/ryan.png';
import TMU from '../../img/experience/tmu.jpg';
import AvisoWealth from '../../img/experience/avisowealth.png';

// Utilities
import RightArrow from '../../img/experience/rightarrow.png';
import LeftArrow from '../../img/experience/leftarrow.png';
import location from '../../img/experience/location.png';
import date from '../../img/experience/date.png';

// Skills Logos
import JavaLogo from '../../img/skills/java.png';
import CLogo from '../../img/skills/c.png';
import SQLLogo from '../../img/skills/sql.png';
import ExcelVBALogo from '../../img/skills/excelvba.png';
import HTML5Logo from '../../img/skills/html5.png';
import CSS3Logo from '../../img/skills/css3.png';
import JSFLogo from '../../img/skills/jsf.png';
import FigmaLogo from '../../img/skills/figma.png';
import SpringLogo from '../../img/skills/spring.png';
import WebsphereLogo from '../../img/skills/websphere.png';
import OracleLogo from '../../img/skills/oracle.png';
import SVNLogo from '../../img/skills/svn.png';
import WaveLogo from '../../img/skills/wave.png';
import JiraLogo from '../../img/skills/jira.png';
import ALMLogo from '../../img/skills/alm.png';
import SmartsheetLogo from '../../img/skills/smartsheet.png';

const Experience = () => {
    const experiences = [
        {
            title: "Application Programmer Analyst (Co-op)",
            company: "Ontario Ministry of Education",
            logo: MinistryofEducation,
            dates: "May 2023 - August 2024",
            location: "Toronto, ON",
            skills: [
                { name: "Java", logo: JavaLogo },
                { name: "SVN", logo: SVNLogo },
                { name: "Spring", logo: SpringLogo },
                { name: "Wave", logo: WaveLogo },
                { name: "JSF", logo: JSFLogo },
                { name: "Oracle", logo: OracleLogo },
                { name: "SQL", logo: SQLLogo },
                { name: "Websphere", logo: WebsphereLogo },
                { name: "Jira", logo: JiraLogo },
                { name: "ALM", logo: ALMLogo }
            ],
            tasks: [
                "Achieved a 100% compliance rate for bug fixes and auditing AODA defects across two releases of the SOR-RL project.",
                "Resolved Jira defects and implemented new features, reducing ticket backlog by 5%.",
                "Reviewed business rules to thoroughly test code, optimizing code quality leading to a 10% decline in post-release defects.",
                "Optimized code with a Selenium script and Apache JMeter, improving performance and reducing execution time by 10 seconds.",
                "Developed a Microsoft Copilot model, PowerApps frontend, and pitched a frontend prototype during an AI hackathon.",
                "Participated in a Microsoft AI hackathon focusing on GIS and geospatial document processing."
            ]
        },
        {
            title: "Scientific Research & Experimental Development (SRED) Intern",
            company: "Ryan, LLC",
            logo: Ryan,
            dates: "July 2022 - August 2022",
            location: "Mississauga, ON",
            skills: [
                { name: "Excel VBA", logo: ExcelVBALogo }
            ],
            tasks: [
                "Developed an Excel workbook using Excel VBA to automate the creation of workbooks for client SRED-qualifying projects, eliminating 2 hours of manual data entry time for company staff.",
                "Designed a system with numerous subroutines and macros for data processing to improve the speed by 15% for Profit After Tax (PAT) calculations.",
                "Explored the the Excel VBA library to reduce the script execution time by 20 seconds.",
                "Implemented 4 requested software features in the Excel workbook from IT directors and engineers.",
                "Gained proficiency in Excel VBA programming within 2 days, completing the certification 100% faster during onboarding."
            ]
        },
        {
            title: "Go Code Girl Ambassador 2022",
            company: "Faculty of Engineering & Architectural Science (FEAS) at TMU",
            logo: TMU,
            dates: "March 2022 - April 2022",
            location: "Remote",
            skills: [
                { name: "C", logo: CLogo }
            ],
            tasks: [
                "Increased female participation in STEM by 25%, introducing elementary and secondary school students to Computer Science and Technology.",
                "Facilitated a hands-on coding workshop for 30 participants to develop error-free programs using the C programming language.",
                "Collaborated with a team to ensure time management, a positive learning environment, and high engagement."
            ]
        },
        {
            title: "Marketing OBDW Summer Intern",
            company: "Aviso Wealth, Online Brokerage & Digital Wealth Teams",
            logo: AvisoWealth,
            dates: "June 2021 - August 2021",
            location: "Remote",
            skills: [
                { name: "HTML5", logo: HTML5Logo },
                { name: "CSS3", logo: CSS3Logo },
                { name: "Figma", logo: FigmaLogo },
                { name: "Smartsheet", logo: SmartsheetLogo },
            ],
            tasks: [
                "Collaborated with the VP of Product Marketing with the rebranding of Qtrade Direct Investing by planning and scheduling meetings.",
                "Implemented new webpages for kXG Credential using HTML5, CSS3, and Adobe Dreamweaver to enhance the user engagement by 20%.",
                "Utilized industry tools including Smartsheet, InVision, Figma, Google Analytics, Dialogue Insights, and Microsoft BI to analyze and increase rebranding task efficiency by 15%.",
                "Streamlined the transcription of responses during client interviews on user experience, reducing the analysis time by 45 minutes."
            ]
        }
    ];

    // Slide Right & Left
    function slideOutLeft() {
        const toSlide = document.getElementById("experienceCard");
        toSlide.style.transform = "translateX(-110%)";
    }

    function slideOutRight() {
        const toSlide = document.getElementById("experienceCard");
        toSlide.style.transform = "translateX(110%)";
    }

    function slideInFromLeft() {
        const toSlide = document.getElementById("experienceCard");
        toSlide.style.transform = "translateX(-110%)";  
        toSlide.style.visibility = "hidden";
        setTimeout(() => {
            toSlide.style.visibility = "visible";
            toSlide.style.transform = "translateX(0%)";
        }, 500);
    }
    
    function slideInFromRight() {
        const toSlide = document.getElementById("experienceCard");
        toSlide.style.transform = "translateX(110%)";  
        toSlide.style.visibility = "hidden";
        setTimeout(() => {
            toSlide.style.visibility = "visible";
            toSlide.style.transform = "translateX(0%)";
        }, 500);
    }

    const [currentIndex, setCurrentIndex] = useState(0);

    const nextExperience = () => {
        slideOutRight();  

        setTimeout(() => {
            setCurrentIndex((prevIndex) => (prevIndex + 1) % experiences.length);
        }, 500);

        setTimeout(() => {
            slideInFromLeft();
        }, 500);

        setTimeout(() => {
            const experienceCard = document.getElementById("experienceCard");
            experienceCard.scrollIntoView({ behavior: 'smooth', block: 'center' });
        }, 600);
    };

    const prevExperience = () => {
        slideOutLeft();  

        setTimeout(() => {
            setCurrentIndex((prevIndex) => prevIndex === 0 ? experiences.length - 1 : prevIndex - 1);  // Update to the previous experience
        }, 500);

        setTimeout(() => {
            slideInFromRight();
        }, 500);

        setTimeout(() => {
            const experienceCard = document.getElementById("experienceCard");
            experienceCard.scrollIntoView({ behavior: 'smooth', block: 'center' });
        }, 600);
    };

    const currentExperience = experiences[currentIndex];

    return (
        <section id="experience">
            <div className="experience-container">
                <p className="experience-title">Experiences</p>
                <div className="experience-card-wrapper">
                    <div id="experienceCard" className="experience-card">
                        <header className="experience-header">
                            <img src={currentExperience.logo} alt={currentExperience.company} className="company-logo" />
                            <div className="experience-header-info">
                                <h2>{currentExperience.title}</h2>
                                <p className="company-name">{currentExperience.company}</p>
                                <div className="experience-meta">
                                    <img src={date} alt="Date" className="icon" /><p className="dates">{currentExperience.dates}</p>
                                </div>
                                <div className="experience-meta">
                                    <img src={location} alt="Location" className="icon" /><p className="location">{currentExperience.location}</p>
                                </div>
                            </div>
                        </header>
                        <div className="skills-used">
                            <h3>Skills</h3>
                            <div className="skills-list-left">
                                {currentExperience.skills.map((skill, index) => (
                                    <div className="skill" key={index}>
                                        <img src={skill.logo} alt={skill.name} className="skill-logo" />
                                        <span className="skill-name">{skill.name}</span>
                                    </div>
                                ))}
                            </div>
                        </div>
                        <div className="tasks-responsibilities">
                            <h3>Responsibilities & Tasks</h3>
                            <ul>
                                {currentExperience.tasks.map((task, index) => (
                                    <li key={index}>{task}</li>
                                ))}
                            </ul>
                        </div>
                    </div>
                </div>

                <div className="dots">
                    {experiences.map((_, index) => (
                        <span
                            key={index}
                            className={`dot ${currentIndex === index ? "active" : ""}`}
                        ></span>
                    ))}
                </div>

                <button className="arrow left" onClick={prevExperience}>
                    <img src={LeftArrow} alt="Left Arrow" />
                </button>
                <button className="arrow right" onClick={nextExperience}>
                    <img src={RightArrow} alt="Right Arrow" />
                </button>
            </div>
        </section>
    );
};

export default Experience;