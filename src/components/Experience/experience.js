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
                "Performed bug fixes and AODA defects for two releases of the SOR-RL project.",
                "Resolved Jira defects, added new features, and ensured AODA compliance for the SOR-RL project.",
                "Reviewed business rules and thoroughly tested code prior to submission.",
                "Optimized code for performance improvements.",
                "Participated in an AI hackathon focusing on GIS and geospatial document processing.",
                "Developed a Copilot model, PowerApps frontend, and presented frontend prototype to the team for the AI hackathon."
            ]
        },
        {
            title: "Scientific Research & Experimental Development Intern",
            company: "Ryan, LLC",
            logo: Ryan,
            dates: "July 2022 - August 2022",
            location: "Mississauga, ON",
            skills: [
                { name: "Excel VBA", logo: ExcelVBALogo }
            ],
            tasks: [
                "Developed an Excel Workbook using Excel VBA, allowing engineering directors to automate Profit After Tax calculations.",
                "Worked closely with the Software Engineering director to implement functional UI/UX requirements.",
                "Pitched final project to the SRED team, met software requirements and achieved a VBA certification."
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
                "Introduced elementary and secondary school females to the field of Computer Science and Technology.",
                "Assisted 20 participants in developing error-free programs using the C programming language.",
                "Worked with an excellent team to maintain time, participation, and positive environment."
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
                "Designed kXG Credential webpages using HTML5 and CSS3 on Adobe Dreamweaver.",
                "Streamlined the rebranding of Qtrade Direct Investing with the VP of Product Marketing.",
                "Incorporated Smartsheet, InVision, Figma, Google Analytics, and Dialogue Insights in projects.",
                "Arranged, booked, attended, and managed agency onboarding meetings."
            ]
        }
    ];

    const [currentIndex, setCurrentIndex] = useState(0);

    const nextExperience = () => {
        setCurrentIndex((prevIndex) => (prevIndex + 1) % experiences.length);
    };

    const prevExperience = () => {
        setCurrentIndex((prevIndex) =>
            prevIndex === 0 ? experiences.length - 1 : prevIndex - 1
        );
    };

    const currentExperience = experiences[currentIndex];

    return (
        <section id="experience">
            <div className="experience-container">
                <p className="experience-title">Experiences</p>
                <div className="experience-card-wrapper">
                    <div className="experience-card">
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