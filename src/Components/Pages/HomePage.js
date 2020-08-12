import '../../Styling/Pages/HomePage.css';
import React from 'react';
import StarParticles from '../Particles/StarParticles';

function HomePage(props) {
    let checkTheme = props.theme.darkMode ? 'darkMode' : 'lightMode'; //check if its dark mode or light mode

    return (
        <div className={`HomePage ${checkTheme}`}>
            <StarParticles />
        </div>
    );
}

export default HomePage;