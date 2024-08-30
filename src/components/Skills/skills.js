import React from 'react';
import './skills.css';
import JS from '../../img/javascript.png';

const Skills = () => {
    return(
        <section id="skills">
            <div className='table-skills'>
                <div className='table-row-skills'>
                    <div className='table-column-skills'>
                        <div className='skill-section'><span className='skill-section-text'></span>Programming Languages
                            <span className='skill-name'>
                                <img className='skill-img' src={JS} /><p id="text">JavaScript</p>
                                <img className='skill-img' src={JS} /><p id="text">JavaScript</p>
                                <img className='skill-img' src={JS} /><p id="text">JavaScript</p>
                                <img className='skill-img' src={JS} /><p id="text">JavaScript</p>
                                <img className='skill-img' src={JS} /><p id="text">JavaScript</p>
                            </span>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Skills;