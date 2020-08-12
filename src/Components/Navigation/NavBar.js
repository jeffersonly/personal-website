import '../../Styling/Navigation/NavBar.css';
import React, { useState } from 'react';

import {ReactComponent as HomeSVG} from '../../Images/SVGs/home.svg';
import {ReactComponent as ExperienceSVG}from '../../Images/SVGs/work.svg';
import {ReactComponent as ContactSVG} from '../../Images/SVGs/contact.svg';
import {ReactComponent as MoonSVG} from '../../Images/SVGs/moon.svg';
import {ReactComponent as SunSVG} from '../../Images/SVGs/sun.svg';
import {ReactComponent as Music} from '../../Images/SVGs/music.svg';
import {ReactComponent as NoMusic} from '../../Images/SVGs/nomusic.svg';
import {ReactComponent as ResumeSVG} from '../../Images/SVGs/resume.svg';

function NavBar() {
    const [open, setOpen] = useState(false);
    let checkOpen = open ? 'open' : 'closed'; //check if the navbar icons are open (when window is shrunk)

    return (
        <div>
            <div className="navBurger" open={open} onClick={() => setOpen(!open)}>
                <div className={`lineItem ${checkOpen} childOne`} />
                <div className={`lineItem ${checkOpen} childTwo`} />
                <div className={`lineItem ${checkOpen} childThree`} />
            </div>
            
            <div className={`navbar ${checkOpen}`}>
                <ul className="navbar-list">
                    <li className="navbar-item home"> 
                        <HomeSVG className="svg home" />
                        <div className="navbar-list-text home">
                            Home
                        </div>
                    </li>

                    <li className="navbar-item exp"> 
                        <ExperienceSVG className="svg exp" />
                        <div className="navbar-list-text experience">
                            Experience
                        </div>
                    </li>

                    <li className="navbar-item contact">
                        <ContactSVG className="svg contact" />
                        <div className="navbar-list-text contact">
                            Contact
                        </div>
                    </li>

                    <li className="navbar-item resume">
                        <ResumeSVG className="resume icon" />
                        <div className="navbar-list-text resume">
                            Resume
                        </div>
                    </li>

                    <li className="navbar-item music"> 
                        <Music className="music icon" />
                        <div className="navbar-list-text music">
                            Play Music
                        </div>
                    </li>

                    <li className="navbar-item mode"> 
                        <MoonSVG className="mode icon" />
                        <div className="navbar-list-text mode">
                            Dark Mode
                        </div>
                    </li>
                </ul>
            </div>
        </div>
    );
}

export default NavBar;