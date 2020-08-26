import '../../Styling/Cards/ProjectCard.css';
import React from 'react';

function ProjectCard(props) {
    function getListDetails() {
        if(props.BulletPointList) {
            return props.BulletPointList.map((details, i) => <li key={i}>{details}</li>)
        }
    }

    function handleDemoClick() {
        window.open(props.DemoLink, '_blank');
    }

    function renderDemoButton() {
        if(props.DemoLink.trim() !== "") {
            return (
                <div className={`ledButton`} onClick={handleDemoClick} >
                    <span></span>
                    <span></span>
                    <span></span>
                    <span></span>
                    Demo
                </div>
            );
        }
    }

    function handleCodeClick() {
        window.open(props.CodeLink, '_blank');
    }

    function renderCodeButton() {
        if(props.CodeLink.trim() !== "") {
            return (
                <div className={`ledButton`} onClick={handleCodeClick} >
                    <span></span>
                    <span></span>
                    <span></span>
                    <span></span>
                    Code
                </div>
            );
        }
    }

    return (
        <div className="card">
            <div className="content">
                <h2 className="project-type">{props.ProjectType}</h2>
                <h3 className="project-title">{props.ProjectTitle}</h3>
                <h4 className="technologies">{props.ProjectTechnologies}</h4>
                <h4 className="project-date">{props.ProjectDate}</h4>
            </div>

            <ul className="bulletpoints">
                {getListDetails()}
            </ul>

            <div className="buttonContainer">
                {renderDemoButton()}
                {renderCodeButton()}
            </div>
            
        </div>
    );
}

export default ProjectCard;
    