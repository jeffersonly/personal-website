import '../../Styling/Pages/ExperiencePage.css';
import React from 'react';
import StarParticles from '../Particles/StarParticles';
import CircleParticles from '../Particles/CircleParticles';
import HeavenClouds from '../Clouds/HeavenClouds';

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

    return (
        <div className={`ExperiencePage ${checkTheme}`}>
            {getParticles()}
            <HeavenClouds clouds={"bottom"} theme={props.theme.darkMode} />
        </div>
    );
}

export default ExperiencePage;