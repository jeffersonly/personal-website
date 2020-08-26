import '../../Styling/Pages/HomePage.css';
import React from 'react';
import StarParticles from '../Particles/StarParticles';

import Typed from 'react-typed'; //typing animation

function HomePage(props) {
    let checkTheme = props.theme.darkMode ? 'darkMode' : 'lightMode'; //check if its dark mode or light mode

    return (
        <>
            <div className={`HomePage ${checkTheme}`}>
                <StarParticles />
                <div className="text-body">
                    <Typed
                        className={`typedText ${checkTheme}`}
                        strings={[
                            "Hello World, I'm <b><u>Adaptive<u><b>!",
                            "Hello World, I'm <b><u>Ambitious<u><b>!",
                            "Hello World, I write <b><u>code<u><b>!",
                            "Hello World, I'm a <b><u>Developer<u><b>!",
                            "Hello World, I'm a <b><u>Software Engineer<u><b>!",
                            "Hello World, I'm <b><u>Jefferson<u><b>!",
                        ]} 
                        typeSpeed={70}
                        startDelay={500} 
                        smartBackspace
                        backSpeed={85}
                    />
                    <div className="container">
                        <div className={`ledButton ${checkTheme}`}>
                            <span></span>
                            <span></span>
                            <span></span>
                            <span></span>
                            About Me
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}

export default HomePage;