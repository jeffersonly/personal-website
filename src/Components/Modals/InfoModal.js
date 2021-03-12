import '../../Styling/Modals/InfoModal.css';
import React, {useState, useEffect} from 'react';
import { Modal, Tab, Tabs } from 'react-bootstrap';
import { Link } from 'react-router-dom'; //links for navigation

function InfoModal(props) {
    //modal related states 
    const [show, setShow] = useState(props.openInfoModal);

    function closeModal() {
        props.onChangeModalState();
    }

    useEffect(() => {
        setShow(props.openInfoModal);
    }, [props.openInfoModal]);

    return (
        <>
            <Modal show={show} onHide={closeModal} centered>
                <Modal.Body>
                    <div className="tabs-container">
                        <Tabs defaultActiveKey="Interests" id="home-page-tabs" bsPrefix="tabs">
                            <Tab eventKey="Interests" title="Interests">
                                <div className="tab-info-container">
                                    <p className="tab-info">
                                        I graduated from SJSU in December of 2020 and am excited about my future endeavors!
                                        I code primarily in Java and Javascript however, I love learning new technologies.
                                        My main fields of interest are Web Development, CyberSecurity, and Machine Learning. 
                                        I would love to secure a full time job that provides me with the flexibility to learn new technologies and build connections!
                                    </p>
                                </div>
                            </Tab>
                            <Tab eventKey="Education" title="Education">
                                <div className="tab-info-container">
                                    <p className="tab-info">
                                        I'm a SJSU Alumni who majored in Software Engineering!
                                        I was involved in organizations such as MEP (Mesa Engineering Program), 
                                        SASE (Society of Asian Scientists and Engineers), 
                                        SCE (Software and Computer Engineering Society), and
                                        EOP (Educational Oppourtunity Program) during my time at SJSU.
                                        <br/><br/>
                                        I enjoyed the sense of community I got from within these organizations and keep in touch with the members even though I graduated.
                                        Most of my friends that I've made in college were through these orgs/clubs. 
                                        We worked on professional development, projects, and learned lots of new things with each other!
                                    </p>
                                </div>
                            </Tab>
                            <Tab eventKey="Hobbies" title="Hobbies">
                                <div className="tab-info-container">
                                    <p className="tab-info">
                                        In my free time, I enjoy hanging out with my friends, coding, working out, and playing games! 
                                        In one way or another, I believe that a good balance between the four results in a fun, healthy, 
                                        and maintainable lifestyle. I also enjoy giving back to the community through volunteering!
                                        <br/><br/>
                                        At the moment, I enjoy playing Apex Legends with my friends. 
                                        I believe that games provide a means to challenge oneself as they require strategical thinking, 
                                        communication skills, and time management.
                                    </p>
                                </div>
                            </Tab>
                        </Tabs>
                    </div>
                </Modal.Body>
                <Modal.Footer>
                    <Link to="/experience" className="btnLink">Experiences & Projects</Link>
                    <Link to="/contact" className="btnLink">Get in Touch</Link>
                </Modal.Footer>
            </Modal>
        </>
    )
}

export default InfoModal;