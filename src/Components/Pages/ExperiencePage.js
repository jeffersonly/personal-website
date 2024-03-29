import '../../Styling/Pages/ExperiencePage.css';
import React from 'react';
import StarParticles from '../Particles/StarParticles';
import CircleParticles from '../Particles/CircleParticles';
import HeavenClouds from '../Clouds/HeavenClouds';
import ProjectPage from './ProjectsPage';
import ExperienceCard from '../Cards/ExperienceCard';
import { motion } from 'framer-motion'; //animate route transitions

function ExperiencePage(props) {
    let checkTheme = props.theme.darkMode ? 'darkMode' : 'lightMode'; //check if its dark mode or light mode

    function getParticles() {
        if(props.theme.darkMode) {
            return (
                <StarParticles />
            );
        }
        return (
            <CircleParticles />
        );
    }

    return (
        <div>
            <div className={`ExperiencePage ${checkTheme}`}>
                {getParticles()}
                <motion.div
                    key="experience"
                    initial="initial"
                    animate="in"
                    exit="out"
                    variants={{
                        initial: { opacity: 0, y: "25vh" },
                        in: { opacity: 1, y: "0vh" },
                        out: { opacity: 0, y: "-100vh" }
                    }}
                    transition={{type: 'spring', damping: 100}}
                >
                    <HeavenClouds clouds={"bottom"} theme={props.theme.darkMode} />
                    <h1 className="experiencePageHeaderText"><u>Work Experience</u></h1>
                    <div className="card-container">
                        <ExperienceCard 
                            JobTitle="Predictive Services (IoT) Software Engineering Intern"
                            JobType="Internship"
                            JobLocation="Carl Zeiss X-ray Microscopy | Dublin, CA - Remote"
                            JobDate="Jun 2020 - Aug 2021"
                            BulletPointList={[
                                "Implemented functional services using Javascript on the ThingWorx platform.",
                                "Updated ThingWorx services to effectively display data and optimize workflow for engineers.",
                                "Analyzed system data and utilized linear regression to predict source changes and lifecycle of Versa systems.",
                                "Data cleaned aggregated amounts of data from different systems to display potential trends.",
                                "Adjusted user interface of internal tools to increase intuitiveness and provide a better user experience for service engineers."
                            ]}
                        />
                    </div>
                    <div className="card-container">
                        <ExperienceCard 
                            JobTitle="Web Developer/Admin"
                            JobType="Full Time"
                            JobLocation="Concrete Shells | San Jose, CA"
                            JobDate="May 2019 - Sep 2019"
                            BulletPointList={[
                                "Developed and deployed responsive website using HTML/CSS, jQuery, Javascript.",
                                "Utilized AWS EC2 to deploy existing WordPress based site and incorporated custom code.",
                                "Optimized rendering times using Google Chrome Developer Tools and Google Page Insights."
                            ]}
                        />
                    </div>
                    <div className="card-container">
                        <ExperienceCard 
                            JobTitle="Software Engineer Testing Intern"
                            JobType="Internship"
                            JobLocation="VIA Alliance Technologies | Fremont, CA"
                            JobDate="Jan 2019 - Apr 2019"
                            BulletPointList={[
                                "Downloaded and installed software programs into different systems & motherboards.",
                                "Black box tested computer motherboard programs UI on TVs and desktops.",
                                "Collaborated with senior engineers to track bugs and report them to the RnD team."
                            ]}
                        />
                    </div>
                    <div className="card-container">
                        <ExperienceCard 
                            JobTitle="Front-End Developer Intern"
                            JobType="Internship"
                            JobLocation="Spotmesolutions LLC | San Jose, CA"
                            JobDate="Aug 2018 - Dec 2018"
                            BulletPointList={[
                                "Designed and implemented UI for a mobile application.",
                                "Used expo libraries and open source github repos + libraries for some functionalities.",
                                "Built application using React.js, React Native, and Redux."
                            ]}
                        />
                    </div>
                </motion.div>
            </div>
            <ProjectPage theme={props.theme} />
        </div>
    );
}

export default ExperiencePage;