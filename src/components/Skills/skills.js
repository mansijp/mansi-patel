import React, { useState } from 'react';
import './skills.css';
import PythonLogo from '../../img/skills/python.png';
import JavaLogo from '../../img/skills/java.png';
import CLogo from '../../img/skills/c.png';
import ReactLogo from '../../img/skills/react.png';
import NodeLogo from '../../img/skills/nodejs.png';
import MongoDBLogo from '../../img/skills/mongodb.png';
import SQLLogo from '../../img/skills/sql.png';
import GitLogo from '../../img/skills/git.png';
import JSLogo from '../../img/skills/javascript.png';
import ExcelVBALogo from '../../img/skills/excelvba.png';
import VHDLLogo from '../../img/skills/vhdl.png';
import HTML5Logo from '../../img/skills/html5.png';
import CSS3Logo from '../../img/skills/css3.png';
import JavaFXLogo from '../../img/skills/javafx.png';
import JSFLogo from '../../img/skills/jsf.png';
import FigmaLogo from '../../img/skills/figma.png';
import DockerLogo from '../../img/skills/docker.png';
import KubernetesLogo from '../../img/skills/kubernetes.png';
import SpringLogo from '../../img/skills/spring.png';
import TomcatLogo from '../../img/skills/tomcat.png';
import WebsphereLogo from '../../img/skills/websphere.png';
import OracleLogo from '../../img/skills/oracle.png';
import SVNLogo from '../../img/skills/svn.png';
import WaveLogo from '../../img/skills/wave.png';
import JiraLogo from '../../img/skills/jira.png';
import ALMLogo from '../../img/skills/alm.png';
import MSProjectLogo from '../../img/skills/msproject.png';
import GKELogo from '../../img/skills/gke.png';
import SmartsheetLogo from '../../img/skills/smartsheet.png';
import FastAPILogo from '../../img/skills/fastapi.png';
import FlaskLogo from '../../img/skills/flask.png';
import NetlifyLogo from '../../img/skills/netlify.png';
import MyBatisLogo from '../../img/skills/mybatis.png';
import AzureLogo from '../../img/skills/azure.png';

const Skills = () => {

    const [activeTab, setActiveTab] = useState('programming');

    const renderSection = () => {
        switch (activeTab) {
            case 'programming':
                return (
                    <div className='skill-list'>
                        <div className='skill-item'>
                            <img className='skill-img' src={PythonLogo} alt="Python Logo" />
                            <p className='skill-text'>Python</p>
                        </div>
                        <div className='skill-item'>
                            <img className='skill-img' src={JavaLogo} alt="Java Logo" />
                            <p className='skill-text'>Java</p>
                        </div>
                        <div className='skill-item'>
                            <img className='skill-img' src={CLogo} alt="C Logo" />
                            <p className='skill-text'>C</p>
                        </div>
                        <div className='skill-item'>
                            <img className='skill-img' src={JSLogo} alt="JavaScript Logo" />
                            <p className='skill-text'>JavaScript</p>
                        </div>
                        <div className='skill-item'>
                            <img className='skill-img' src={ExcelVBALogo} alt="Excel VBA Logo" />
                            <p className='skill-text'>Excel VBA</p>
                        </div>
                        <div className='skill-item'>
                            <img className='skill-img' src={VHDLLogo} alt="VHDL Logo" />
                            <p className='skill-text'>VHDL</p>
                        </div>
                        <div className='skill-item'>
                            <img className='skill-img' src={JSFLogo} alt="JSF Logo" />
                            <p className='skill-text'>JSF</p>
                        </div>
                    </div>
                );
            case 'deployment':
                return (
                    <div className='skill-list'>
                        <div className='skill-item'>
                            <img className='skill-img' src={DockerLogo} alt="Docker Logo" />
                            <p className='skill-text'>Docker</p>
                        </div>
                        <div className='skill-item'>
                            <img className='skill-img' src={KubernetesLogo} alt="Kubernetes Logo" />
                            <p className='skill-text'>Kubernetes</p>
                        </div>
                        <div className='skill-item'>
                            <img className='skill-img' src={GKELogo} alt="GKE Logo" />
                            <p className='skill-text'>Google Cloud</p>
                        </div>
                        <div className='skill-item'>
                            <img className='skill-img' src={NetlifyLogo} alt="Netlify Logo" />
                            <p className='skill-text'>Netlify</p>
                        </div>
                        <div className='skill-item'>
                            <img className='skill-img' src={AzureLogo} alt="Azure Logo" />
                            <p className='skill-text'>Azure</p>
                        </div>
                    </div>
                );
            case 'databases':
                return (
                    <div className='skill-list'>
                        <div className='skill-item'>
                            <img className='skill-img' src={MongoDBLogo} alt="MongoDB Logo" />
                            <p className='skill-text'>MongoDB</p>
                        </div>
                        <div className='skill-item'>
                            <img className='skill-img' src={SQLLogo} alt="SQL Logo" />
                            <p className='skill-text'>SQL</p>
                        </div>
                        <div className='skill-item'>
                            <img className='skill-img' src={MyBatisLogo} alt="MyBatis Logo" />
                            <p className='skill-text'>MyBatis</p>
                        </div>
                        <div className='skill-item'>
                            <img className='skill-img' src={OracleLogo} alt="Oracle Logo" />
                            <p className='skill-text'>Oracle DBMS</p>
                        </div>

                    </div>
                );
            case 'version-control':
                return (
                    <div className='skill-list'>
                        <div className='skill-item'>
                            <img className='skill-img' src={GitLogo} alt="Git Logo" />
                            <p className='skill-text'>Git</p>
                        </div>
                        <div className='skill-item'>
                            <img className='skill-img' src={SVNLogo} alt="SVN Logo" />
                            <p className='skill-text'>SVN</p>
                        </div><div className='skill-item'>
                            <img className='skill-img' src={JiraLogo} alt="Jira Logo" />
                            <p className='skill-text'>Jira</p>
                        </div>
                        <div className='skill-item'>
                            <img className='skill-img' src={ALMLogo} alt="ALM Logo" />
                            <p className='skill-text'>ALM</p>
                        </div>
                        <div className='skill-item'>
                            <img className='skill-img' src={MSProjectLogo} alt="MS Project Logo" />
                            <p className='skill-text'>MS Project</p>
                        </div>
                        <div className='skill-item'>
                            <img className='skill-img' src={SmartsheetLogo} alt="Smartsheet Logo" />
                            <p className='skill-text'>Smartsheet</p>
                        </div>
                    </div>
                );
            case 'frameworks':
                return (
                    <div className='skill-list'>
                        <div className='skill-item'>
                            <img className='skill-img' src={ReactLogo} alt="ReactJS Logo" />
                            <p className='skill-text'>ReactJS</p>
                        </div>
                        <div className='skill-item'>
                            <img className='skill-img' src={NodeLogo} alt="NodeJS Logo" />
                            <p className='skill-text'>NodeJS</p>
                        </div>
                        <div className='skill-item'>
                            <img className='skill-img' src={FastAPILogo} alt="FastAPI Logo" />
                            <p className='skill-text'>FastAPI</p>
                        </div>
                        <div className='skill-item'>
                            <img className='skill-img' src={FlaskLogo} alt="Flask Logo" />
                            <p className='skill-text'>Flask</p>
                        </div>
                        <div className='skill-item'>
                            <img className='skill-img' src={SpringLogo} alt="Spring Logo" />
                            <p className='skill-text'>Spring</p>
                        </div>
                        <div className='skill-item'>
                            <img className='skill-img' src={TomcatLogo} alt="Tomcat Logo" />
                            <p className='skill-text'>Tomcat</p>
                        </div>
                        <div className='skill-item'>
                            <img className='skill-img' src={WebsphereLogo} alt="Websphere Logo" />
                            <p className='skill-text'>Websphere</p>
                        </div>
                    </div>
                );
            case 'design':
                return (
                    <div className='skill-list'>
                        <div className='skill-item'>
                            <img className='skill-img' src={HTML5Logo} alt="HTML5 Logo" />
                            <p className='skill-text'>HTML5</p>
                        </div>
                        <div className='skill-item'>
                            <img className='skill-img' src={CSS3Logo} alt="CSS3 Logo" />
                            <p className='skill-text'>CSS3</p>
                        </div>
                        <div className='skill-item'>
                            <img className='skill-img' src={JavaFXLogo} alt="JavaFX Logo" />
                            <p className='skill-text'>JavaFX</p>
                        </div>
                        <div className='skill-item'>
                            <img className='skill-img' src={FigmaLogo} alt="Figma Logo" />
                            <p className='skill-text'>Figma</p>
                        </div>
                        <div className='skill-item'>
                            <img className='skill-img' src={WaveLogo} alt="WAVE Chrome Extension" />
                            <p className='skill-text'>WAVE</p>
                        </div>
                    </div>
                );
            default:
                return null;
        }
    };

    return (
        <section id="skills">
            <div className="skills-content">
                <p className="skills-title">My Skills</p>
                <div className="tabs">
                    <div
                        className={`tab ${activeTab === 'programming' ? 'active' : ''}`}
                        onClick={() => setActiveTab('programming')}>
                        Programming<br/>Languages
                    </div>
                    <div
                        className={`tab ${activeTab === 'design' ? 'active' : ''}`}
                        onClick={() => setActiveTab('design')}>
                        Design
                    </div>
                    <div
                        className={`tab ${activeTab === 'databases' ? 'active' : ''}`}
                        onClick={() => setActiveTab('databases')}>
                        Databases
                    </div>
                    <div
                        className={`tab ${activeTab === 'frameworks' ? 'active' : ''}`}
                        onClick={() => setActiveTab('frameworks')}>
                        Frameworks<br />Libraries
                    </div>
                    <div
                        className={`tab ${activeTab === 'deployment' ? 'active' : ''}`}
                        onClick={() => setActiveTab('deployment')}>
                        Deployment
                    </div>
                    <div
                        className={`tab ${activeTab === 'version-control' ? 'active' : ''}`}
                        onClick={() => setActiveTab('version-control')}>
                        Versioning<br />PM Tools
                    </div>
                </div>

                <div className="skill-section">
                    {renderSection()}
                </div>
            </div>
        </section>
    );
};

export default Skills;