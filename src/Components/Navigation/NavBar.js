import '../../Styling/Navigation/NavBar.css';
import React, { useState } from 'react';
import { Link } from 'react-router-dom'; //links for navigation

import {ReactComponent as HomeSVG} from '../../Images/SVGs/home.svg';
import {ReactComponent as ExperienceSVG}from '../../Images/SVGs/work.svg';
import {ReactComponent as ContactSVG} from '../../Images/SVGs/contact.svg';
import {ReactComponent as MoonSVG} from '../../Images/SVGs/moon.svg';
import {ReactComponent as SunSVG} from '../../Images/SVGs/sun.svg';
import {ReactComponent as ResumeSVG} from '../../Images/SVGs/resume.svg';

function NavBar(props) {
    const [open, setOpen] = useState(false);
    let checkOpen = open ? 'open' : 'closed'; //check if the navbar icons are open (when window is shrunk)
    let checkTheme = props.initialTheme.darkMode ? 'darkMode' : 'lightMode'; //check if its dark mode or light mode

    //renders the mode icons (light/dark)
    function renderModeIcon() {
        if(!props.initialTheme.darkMode) {
            return (
                <>
                    <SunSVG className="mode icon" />
                    <div className={`navbar-list-text mode ${checkTheme}`}>
                        Light Mode
                    </div>
                </>
            );
        } else {
            return (
                <>
                    <MoonSVG className="mode icon" />
                    <div className={`navbar-list-text mode ${checkTheme}`}>
                        Dark Mode
                    </div>
                </>
            );
        }
    }

    return (
        <div>
            <div className="navBurger" open={open} onClick={() => setOpen(!open)}>
                <div className={`lineItem ${checkOpen} ${checkTheme} childOne`} />
                <div className={`lineItem ${checkOpen} ${checkTheme} childTwo`} />
                <div className={`lineItem ${checkOpen} ${checkTheme} childThree`} />
            </div>
            
            <div className={`navbar ${checkOpen}`}>
                <ul className="navbar-list">
                    <li className="navbar-item home">
                        <Link to="/" className="link">
                            <HomeSVG className="svg home" />
                            <div className={`navbar-list-text home ${checkTheme}`}>
                                Home
                            </div>
                        </Link> 
                    </li>

                    <li className="navbar-item exp"> 
                        <Link to="experience" className="link">
                            <ExperienceSVG className="svg exp" />
                            <div className={`navbar-list-text experience ${checkTheme}`}>
                                Experience
                            </div>
                        </Link>
                    </li>

                    <li className="navbar-item contact">
                        <ContactSVG className="svg contact" />
                        <div className={`navbar-list-text contact ${checkTheme}`}>
                            Contact
                        </div>
                    </li>

                    <li className="navbar-item resume">
                        <ResumeSVG className="resume icon" />
                        <div className={`navbar-list-text resume ${checkTheme}`}>
                            Resume
                        </div>
                    </li>

                    {/* on change event for when switch is toggled, updates parent component */}
                    <li className="navbar-item mode" onClick={e => props.onModeChange(e.target.value)}> 
                        {renderModeIcon()}
                    </li>
                </ul>
            </div>
        </div>
    );
}

export default NavBar;