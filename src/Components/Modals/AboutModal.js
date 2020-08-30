import '../../Styling/Modals/AboutModal.css';
import React from 'react';

import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';

function AboutModal(props) {
    let checkModalState = props.modalState ? 'open' : 'closed';
    let checkTheme = props.darkMode ? 'darkMode' : 'lightMode';

    return (
        <div className={`about-modal-wrapper ${checkModalState}`} onClick={e => props.modalStateChange(e.target.value)}>
            <div className={`about-modal ${checkModalState} ${checkTheme}`} onClick={e => e.stopPropagation()}>
                <Tabs>
                    <TabList>
                        <Tab>Interests</Tab>
                        <Tab>Education</Tab>
                        <Tab>Hobbies</Tab>
                    </TabList>

                    <TabPanel>
                        <h2>
                            I'm on track to graduate in December 2020 and will hopefully secure a full time job offer before so. 
                            I'm primarily interested in Web development, Artificial Intelligence, Machine Learning, Virtual Reality, 
                            Game Development, and CyberSecurity. However, I'm open to all fields of Software Development and I am 
                            trying to soak up as much knowledge as possible.
                        </h2>
                    </TabPanel>
                    <TabPanel>
                        <h2>
                            I'm currently a fourth year Software Engineering student at San Jose State University! 
                            I'm involved in organizations such as MEP (Mesa Engineering Program), 
                            SASE (Society of Asian Scientists and Engineers), 
                            SCE (Software and Computer Engineering Society), and
                            EOP (Educational Oppourtunity Program). 
                        </h2>
                        
                        <h2>
                            I enjoy the sense of community I get from within these organizations. 
                            Most of my friends that I've made in college were through these orgs/clubs. 
                            We work on professional development, club projects, and focus on social interaction.
                        </h2>
                    </TabPanel>
                    <TabPanel>
                        <h2>
                            In my free time, I enjoy hanging out with my friends, coding, working out, and playing games! 
                            In one way or another, I believe that a good balance between the four results in a fun, healthy, 
                            and maintainable lifestyle. I also enjoy giving back to the community through volunteering!
                        </h2>
                        <h2>
                            At the moment, I enjoy playing Valorant with my friends. 
                            I believe that games provide a means to challenge oneself as they require strategical thinking, 
                            communication skills, and time management.
                        </h2>
                    </TabPanel>
                </Tabs>
            </div>
        </div>
    );
}

export default AboutModal;