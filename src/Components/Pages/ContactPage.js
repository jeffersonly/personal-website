import '../../Styling/Pages/ContactPage.css';
import React from 'react';
import CircleParticles from '../Particles/CircleParticles';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faFacebookF, faLinkedin, faGithub } from '@fortawesome/free-brands-svg-icons';
import { faMailBulk, faMobile } from '@fortawesome/free-solid-svg-icons';

import { motion } from 'framer-motion'; //animate route transitions

function ContactPage(props) {
    let checkTheme = props.theme.darkMode ? 'darkMode' : 'lightMode'; //check if its dark mode or light mode

    function copyToClipboard() {
        navigator.clipboard.writeText("jeffersonly98@gmail.com");
        alert("Copied email to Clipboard!");
    }

    function notifyPhone() {
        navigator.clipboard.writeText("(408)387-4709");
        alert("Please shoot me a message or email before calling! Thanks! \nPhone number: (408)387-4709 \nCopied Phone Number to Clipboard");
    }

    return (
        <div className={`ContactPage ${checkTheme}`}>
            <CircleParticles />
            <motion.div
                key="contact"
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
                <h1 className="contactPageHeaderText"><u>Contact Me</u></h1>
                <h2 className="contactPageText">Have a question? Feel free to reach out to me!</h2>
                
                <form className="contact-form" action="https://formspree.io/jeffersonly98@gmail.com" method="POST">
                    <div className={`contact-container ${checkTheme}`}>
                        <div className="row100">
                            <div className="col">
                                <div className="inputBox">
                                    <input type="text" name="email" id="email" required="required"></input>
                                    <span className="text">Email</span>
                                    <span className="line"></span>
                                </div>
                            </div>
                        </div>
                        <div className="row100">
                            <div className="col">
                                <div className="inputBox">
                                    <input type="text" name="name" id="name" required="required"></input>
                                    <span className="text">Name</span>
                                    <span className="line"></span>
                                </div>
                            </div>
                        </div>
                        <div className="row100">
                            <div className="col">
                                <div className="inputBox textarea">
                                    <textarea name="message" type="text" id="message" required="required"></textarea>
                                    <span className="text">Type your message</span>
                                    <span className="line"></span>
                                </div>
                            </div>
                        </div>
                        
                        
                        <div className="contact-btn-container">
                            <button className={`ledButton`} type="submit">
                                <span></span>
                                <span></span>
                                <span></span>
                                <span></span>
                                Submit
                            </button>
                        </div>
                    </div>
                </form>
            </motion.div>
            
            <div className="social-icons-list">
                <ul>
                    <li onClick={() => window.open("https://www.facebook.com/jefferson.ly.3", '_blank')}>
                        <FontAwesomeIcon icon={faFacebookF} className="social-icon facebook" />
                    </li>

                    <li onClick={() => window.open("https://www.linkedin.com/in/jeffersonly/", '_blank')}>
                        <FontAwesomeIcon icon={faLinkedin} className="social-icon linkedin" />
                    </li>

                    <li onClick={() => window.open("https://github.com/jeffersonly", '_blank')}>
                        <FontAwesomeIcon icon={faGithub} className="social-icon github" />
                    </li>

                    <li onClick={copyToClipboard} className="gmail-list-item">
                        <FontAwesomeIcon icon={faMailBulk} className="social-icon gmail" />
                    </li>
                    
                    <li onClick={notifyPhone} className="phone-list-item">
                        <a href="tel:1-408-387-4709">
                            <FontAwesomeIcon  icon={faMobile} className="social-icon phone" />
                        </a>
                    </li>
                </ul>
            </div>
        </div>
    );
};

export default ContactPage;