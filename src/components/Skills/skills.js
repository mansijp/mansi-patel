import React from 'react';
import './skills.css';
import JS from '../../img/javascript.png';

const Skills = () => {
    return(
        <section id="skills">
            <div className='skills-content'>
                <div className='table-row-skills'>
                    <div className='table-column-skills'>
                        <span className='skill-name'><img className='skill-img' src={JS} /><p id="text">JavaScript</p></span>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Skills;