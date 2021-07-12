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
                    ProjectType="Individual Project"
                    ProjectTitle="MERN Auth BP"
                    ProjectTechnologies="AntD, Express.js, GSAP, JS, Node.js, React, Redux"
                    ProjectDate="Mar 2021 - May 2021"
                    BulletPointList={[
                        "Led a team of engineers to implement a fully functional, highly scalable web application as the technical lead.",
                        "Provided technical guidance and support for team members to meet project deadlines on time.",
                        "Utilized AWS Amplify services to handle user authentication, text recognition, and data storage services.",
                        "Implemented user interface for landing page and various components using React and styling libraries such as Material-UI/Bootstrap.",
                        "Stored images to S3 with a relational field in DynamoDB using GraphQL after processing them with AWS Textract."
                    ]}
                    DemoLink="https://mern-auth-bp.herokuapp.com/"
                    CodeLink="https://github.com/jeffersonly/mern-authentication-boilerplate"
                />
            </div>

            <div className="card-container">
                <ProjectCard 
                    ProjectType="Group Project"
                    ProjectTitle="Fintrack"
                    ProjectTechnologies="AWS, GraphQL, HTML/CSS, JS, React"
                    ProjectDate="Sep 2020 - Dec 2020"
                    BulletPointList={[
                        "Led a team of engineers to implement a fully functional, highly scalable web application as the technical lead.",
                        "Provided technical guidance and support for team members to meet project deadlines on time.",
                        "Utilized AWS Amplify services to handle user authentication, text recognition, and data storage services.",
                        "Implemented user interface for landing page and various components using React and styling libraries such as Material-UI/Bootstrap.",
                        "Stored images to S3 with a relational field in DynamoDB using GraphQL after processing them with AWS Textract."
                    ]}
                    DemoLink="https://master.d191rl4e83chd.amplifyapp.com/"
                    CodeLink="https://github.com/jeffersonly/Fintrack"
                />
            </div>
            
            <div className="card-container">
                <ProjectCard 
                    ProjectType="Group Project"
                    ProjectTitle="Swift Realtime Chat App"
                    ProjectTechnologies="Swift, Firebase, UIKit"
                    ProjectDate="Apr 2020 - May 2020"
                    BulletPointList={[
                        "Developed authentication functionalities for application (register, login, signout, oAuth).",
                        "Designed and implemented UI for application screens, created application based on MVC architecture.",
                        "Enabled real time messaging between users by efficiently storing and fetching data from Firestore"
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
                        "Serverless web application leveraging AWS and IMDB api to recognize celebrities.",
                        "Implemented authentication aspects of app, leveraging AWS Amplify and Cognito.",
                        "Utilized Amplify backend resources and GraphQL to store data to DynamoDB and images to S3."
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