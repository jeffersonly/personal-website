import '../../Styling/Clouds/HeavenClouds.css'; //css file
import React, {useState} from 'react';
import Cloud1 from '../../Images/Clouds/cloud1.png';
import Cloud2 from '../../Images/Clouds/cloud2.png';
import Cloud3 from '../../Images/Clouds/cloud3.png';
import Cloud4 from '../../Images/Clouds/cloud4.png';
import Cloud5 from '../../Images/Clouds/cloud5.png';

function HeavenClouds(props) {
    //determines if clouds are at top of screen or bottom
    const clouds = props.clouds;
    const theme = props.theme ? 'darkMode' : 'lightMode';

    return (
        <div className={`heavenClouds ${clouds === 'bottom' ? 'bottom' : 'top'}`}>
            <img src={Cloud1} alt="clouds" className={`cloud1 ${theme}`} />
            <img src={Cloud2} alt="clouds" className={`cloud2 ${theme}`} />
            <img src={Cloud3} alt="clouds" className={`cloud3 ${theme}`} />
            <img src={Cloud4} alt="clouds" className={`cloud4 ${theme}`} />
            <img src={Cloud5} alt="clouds" className={`cloud5 ${theme}`} />
            <img src={Cloud1} alt="clouds" className={`cloud6 ${theme}`} />
            <img src={Cloud2} alt="clouds" className={`cloud7 ${theme}`} />
            <img src={Cloud3} alt="clouds" className={`cloud8 ${theme}`} />
            <img src={Cloud4} alt="clouds" className={`cloud9 ${theme}`} />
            <img src={Cloud5} alt="clouds" className={`cloud10 ${theme}`} />
        </div>
    );
}

export default HeavenClouds;