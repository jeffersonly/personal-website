import '../../Styling/Pages/ProjectsPage.css';
import React from 'react';
import HeavenClouds from '../Clouds/HeavenClouds';

import ProjectCard from '../Cards/ProjectCard';

function ProjectsPage(props) {
    let checkTheme = props.theme.darkMode ? 'darkMode' : 'lightMode'; //check if its dark mode or light mode

    return (
        <div className={`ProjectsPage ${checkTheme}`}>
            <HeavenClouds clouds={"top"} theme={props.theme.darkMode} />
            <h1 className="projectPageHeaderText"><u>Projects</u></h1>
            <div className="card-container">
                <ProjectCard 
                    ProjectType="Group Project"
                    ProjectTitle="Swift Realtime Chat App"
                    ProjectTechnologies="Swift, Firebase, UIKit"
                    ProjectDate="Apr 2020 - May 2020"
                    BulletPointList={[
                        "Implemented authentication aspect of application (Create Account, Login/Out)",
                        "Created and designed user interface and user experience flow of application",
                        "Added CRUD functionalites, allowing users to message one another in real time"
                    ]}
                    DemoLink=""
                    CodeLink="https://github.com/jeffersonly/Swift-RealTime-Chat-App"
                />
            </div>

            <div className="card-container">
                <ProjectCard 
                    ProjectType="Group Project"
                    ProjectTitle="Celebrity Recognition Application"
                    ProjectTechnologies="React, AWS Amplify (Various Services)"
                    ProjectDate="Oct 2019 - Nov 2019"
                    BulletPointList={[
                        "Application successfully detects celebrities within photos using AWS services and finds info using IMDB api",
                        "Worked on authentication aspects, image upload, and using AWS Rekognition to recognize celebrities",
                        "Used AWS Amplify backend resources and React.js to build application"
                    ]}
                    DemoLink="https://master.d6r0nf10946qi.amplifyapp.com/"
                    CodeLink="https://github.com/jeffersonly/Celeb-Recognition-App"
                />
            </div>

            <div className="card-container">
                <ProjectCard 
                    ProjectType="Individual Project"
                    ProjectTitle="Mini DropBox Project"
                    ProjectTechnologies="React, AWS Amplify (Various Services)"
                    ProjectDate="Sep 2019 - Oct 2019"
                    BulletPointList={[
                        "Added admin portal and user portal, users are able to view each others files",
                        "Implemented CRUD functionality as well as file upload and download",
                        "Developed using AWS (Amplify, Cognito, DynamoDB, S3, Cloudfront), React.js, and GraphQL"
                    ]}
                    DemoLink="https://d3rprkps2q5szo.cloudfront.net/"
                    CodeLink="https://github.com/jeffersonly/Mini-Dropbox-Project"
                />
            </div>
            
            <div className="card-container">
                <ProjectCard 
                    ProjectType="Group Project"
                    ProjectTitle="Sudoku Project"
                    ProjectTechnologies="Java"
                    ProjectDate="Sep 2018 - Dec 2018"
                    BulletPointList={[

                        "Implemented score calculation and junit tests",
                        "Used valves and messages to update model based on action events",
                        "Built Sudoku GUI using Java Swing and other java components"
                    ]}
                    DemoLink=""
                    CodeLink="https://github.com/Sashanity/Sudoku-game"
                />
            </div>

        </div>
    );
}

export default ProjectsPage;