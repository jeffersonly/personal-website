import '../../Styling/Clouds/HeavenClouds.css'; //css file
import React from 'react';
import Cloud1 from '../../Images/Clouds/cloud1.png';
import Cloud2 from '../../Images/Clouds/cloud2.png';
import Cloud3 from '../../Images/Clouds/cloud3.png';
import Cloud4 from '../../Images/Clouds/cloud4.png';
import Cloud5 from '../../Images/Clouds/cloud5.png';

function HeavenClouds(props) {
    //determines if clouds are at top of screen or bottom
    const clouds = props.clouds;

    return (
        <div className={`heavenClouds ${clouds === 'bottom' ? 'bottom' : 'top'}`}>
            <img src={Cloud1} alt="clouds" className="cloud1" />
            <img src={Cloud2} alt="clouds" className="cloud2" />
            <img src={Cloud3} alt="clouds" className="cloud3" />
            <img src={Cloud4} alt="clouds" className="cloud4" />
            <img src={Cloud5} alt="clouds" className="cloud5" />
            <img src={Cloud1} alt="clouds" className="cloud6" />
            <img src={Cloud2} alt="clouds" className="cloud7" />
            <img src={Cloud3} alt="clouds" className="cloud8" />
            <img src={Cloud4} alt="clouds" className="cloud9" />
            <img src={Cloud5} alt="clouds" className="cloud10" />
        </div>
    );
}

export default HeavenClouds;