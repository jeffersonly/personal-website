import '../../Styling/Pages/ProjectsPage.css';
import React from 'react';
import HeavenClouds from '../Clouds/HeavenClouds';

function ProjectsPage(props) {
    let checkTheme = props.theme.darkMode ? 'darkMode' : 'lightMode'; //check if its dark mode or light mode

    return (
        <div className={`ProjectsPage ${checkTheme}`}>
            <HeavenClouds clouds={"top"} theme={props.theme.darkMode} />
        </div>
    );
}

export default ProjectsPage;