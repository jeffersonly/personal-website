import '../../Styling/Pages/ExperiencePage.css';
import React from 'react';
import StarParticles from '../StarParticles';
import HeavenClouds from '../Clouds/HeavenClouds';

function ExperiencePage() {
    return (
        <div className="ExperiencePage">
            <StarParticles />
            <HeavenClouds clouds={"bottom"} />
        </div>
    );
}

export default ExperiencePage;