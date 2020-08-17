import '../../Styling/Pages/ExperiencePage.css';
import React from 'react';
import StarParticles from '../Particles/StarParticles';
import CircleParticles from '../Particles/CircleParticles';
import HeavenClouds from '../Clouds/HeavenClouds';
import ProjectPage from './ProjectsPage';
import HighHopes from '../../Audio/HighHopes.mp3';

function ExperiencePage(props) {
    let checkTheme = props.theme.darkMode ? 'darkMode' : 'lightMode'; //check if its dark mode or light mode

    function getParticles() {
        if(props.theme.darkMode) {
            return (
                <StarParticles />
            );
        }
        return (
            <CircleParticles />
        );
    }

    let playMusic = props.musicState.playMusic; //check if music is played or not

    function renderMusic() {
        if(playMusic) {
            return (
                <audio id="music" src={HighHopes} controls autoPlay loop playsInline 
                style={{bottom: 5, right: 5, position: 'absolute', width: '270px'}}
                />
            );
        }
    }

    return (
        <div>
            <div className={`ExperiencePage ${checkTheme}`}>
                {getParticles()}
                <HeavenClouds clouds={"bottom"} theme={props.theme.darkMode} />
                {renderMusic()}
            </div>

            <ProjectPage theme={props.theme} />
        </div>
    );
}

export default ExperiencePage;