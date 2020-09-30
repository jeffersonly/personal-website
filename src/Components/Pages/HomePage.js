import '../../Styling/Pages/HomePage.css';
import React, { useState } from 'react';
import StarParticles from '../Particles/StarParticles';
import Typed from 'react-typed'; //typing animation
import InfoModal from '../Modals/InfoModal';
import { motion } from 'framer-motion'; //animate route transitions

function HomePage(props) {
    const [aboutModalState, setAboutModalState] = useState(false);
    let checkTheme = props.theme.darkMode ? 'darkMode' : 'lightMode'; //check if its dark mode or light mode

    function handleShowAboutMe() {
        setAboutModalState(true);
    }

    return (
        <>
            <div className={`HomePage ${checkTheme}`}>
                <StarParticles />
                <motion.div
                    key="home"
                    initial="initial"
                    animate="in"
                    exit="out"
                    variants={{
                        initial: { opacity: 0, y: "25vh" },
                        in: { opacity: 1, y: "0vh" },
                        out: { opacity: 0, y: "-100vh" }
                    }}
                    transition={{type: 'spring', damping: 100}}
                >
                    <div className={`text-body ${checkTheme}`}>
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
                            <div className={`ledButton ${checkTheme}`} onClick={handleShowAboutMe}>
                                <span></span>
                                <span></span>
                                <span></span>
                                <span></span>
                                About Me
                            </div>
                        </div>
                    </div>

                    <InfoModal 
                        openInfoModal={aboutModalState}
                        onChangeModalState={() => setAboutModalState(!aboutModalState)}
                    />
                </motion.div>
            </div>        
        </>
    );
}

export default HomePage;