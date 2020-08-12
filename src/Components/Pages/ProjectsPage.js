import '../../Styling/Pages/ProjectsPage.css';
import React from 'react';
import HeavenClouds from '../Clouds/HeavenClouds';

function ProjectsPage() {
    return (
        <div className="ProjectsPage">
            <HeavenClouds clouds={"top"} />
        </div>
    );
}

export default ProjectsPage;