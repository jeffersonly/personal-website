import '../../Styling/Pages/HomePage.css';
import React from 'react';
import StarParticles from '../StarParticles';
import HeavenClouds from '../Clouds/HeavenClouds';

function HomePage() {
    return (
        <div className="HomePage">
            <StarParticles />
            <HeavenClouds clouds={"bottom"} />
        </div>
    );
}

export default HomePage;