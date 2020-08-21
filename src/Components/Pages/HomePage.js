import '../../Styling/Pages/HomePage.css';
import React from 'react';
import StarParticles from '../Particles/StarParticles';

import RockSpeechAndWings from '../../Audio/RockSpeechAndWings.mp3';
import Typed from 'react-typed'; //typing animation

function HomePage(props) {
    let checkTheme = props.theme.darkMode ? 'darkMode' : 'lightMode'; //check if its dark mode or light mode

    let playMusic = props.musicState.playMusic; //check if music is played or not
    function renderMusic() {
        if(playMusic) {
            return (
                <audio id="music" src={RockSpeechAndWings} controls autoPlay loop playsInline 
                style={{bottom: 5, right: 5, position: 'absolute', width: '270px'}}
                />
            );
        }
    }

    return (
        <>
            <div className={`HomePage ${checkTheme}`}>
                <StarParticles />
                {renderMusic()}

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
            </div>
        </>
    );
}

export default HomePage;