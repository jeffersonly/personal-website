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
                                        I'm on track to graduate in December 2020 and will hopefully secure a full time job offer before so. 
                                        I'm primarily interested in Web development, Artificial Intelligence, Machine Learning, Virtual Reality, 
                                        Game Development, and CyberSecurity. However, I'm open to all fields of Software Development and I am 
                                        trying to soak up as much knowledge as possible.
                                    </p>
                                </div>
                            </Tab>
                            <Tab eventKey="Education" title="Education">
                                <div className="tab-info-container">
                                    <p className="tab-info">
                                        I'm currently a fourth year Software Engineering student at San Jose State University! 
                                        I'm involved in organizations such as MEP (Mesa Engineering Program), 
                                        SASE (Society of Asian Scientists and Engineers), 
                                        SCE (Software and Computer Engineering Society), and
                                        EOP (Educational Oppourtunity Program). 
                                        <br/><br/>
                                        I enjoy the sense of community I get from within these organizations. 
                                        Most of my friends that I've made in college were through these orgs/clubs. 
                                        We work on professional development, club projects, and focus on social interaction.
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
                                        At the moment, I enjoy playing Valorant with my friends. 
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