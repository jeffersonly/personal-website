import '../../Styling/Pages/HomePage.css';
import React from 'react';
import StarParticles from '../Particles/StarParticles';

import RockSpeechAndWings from '../../Audio/RockSpeechAndWings.mp3';

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
            </div>
        </>
    );
}

export default HomePage;