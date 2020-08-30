import '../../Styling/Pages/ContactPage.css';
import React, { useState } from 'react';
import CircleParticles from '../Particles/CircleParticles';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faFacebookF, faLinkedinIn, faGithub } from '@fortawesome/free-brands-svg-icons';
import { faMailBulk, faMobile } from '@fortawesome/free-solid-svg-icons';

function ContactPage(props) {
    let checkTheme = props.theme.darkMode ? 'darkMode' : 'lightMode'; //check if its dark mode or light mode
    const [emailHover, setEmailHover] = useState(false);
    const [phoneHover, setPhoneHover] = useState(false);
    const [copiedToClipboard, setCopiedToClipboard] = useState(false);

    let emailHovered = emailHover ? 'emailHovered' : 'emailNotHovered';
    let phoneHovered = phoneHover ? 'phoneHovered' : 'phoneNotHovered';
    let copiedToClip = copiedToClipboard ? 'copied' : 'notcopied';

    function copyToClipboard() {
        navigator.clipboard.writeText("jeffersonly98@gmail.com");
        setCopiedToClipboard(true);
    }

    function unhoverEmail() {
        setEmailHover(false);
        setCopiedToClipboard(false);
    }

    return (
        <div className={`ContactPage ${checkTheme}`}>
            <CircleParticles />
            <h1 className="contactPageHeaderText"><u>Contact Me</u></h1>
            <h2 className="contactPageText">Have a question? Feel free to reach out to me!</h2>
            
            <form className="contact-form" action="https://formspree.io/jeffersonly98@gmail.com" method="POST">
                <div className={`contact-container ${checkTheme}`}>
                    <div className="row100">
                        <div className="col">
                            <div className="inputBox">
                                <input type="text" name="" required="required"></input>
                                <span className="text">Email</span>
                                <span className="line"></span>
                            </div>
                        </div>
                    </div>
                    <div className="row100">
                        <div className="col">
                            <div className="inputBox">
                                <input type="text" name="" required="required"></input>
                                <span className="text">Name</span>
                                <span className="line"></span>
                            </div>
                        </div>
                    </div>
                    <div className="row100">
                        <div className="col">
                            <div className="inputBox textarea">
                                <textarea required="required"></textarea>
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

            <div className={`EmailIconHoverText ${emailHovered}`}>
                <p>Click to Copy</p>
                <p>JeffersonLy98@gmail.com</p>
                <p className={`copiedToClickboardMsg ${copiedToClip}`}>Copied to Clipboard!</p>
            </div>

            <div className={`PhoneIconHoverText ${phoneHovered}`}>
                <p>(408) 387-4709</p>
                <p>Please message or email me before making a call!</p>
            </div>
            
            <div className="social-icons-list">
                <ul>
                    <li onClick={() => window.open("https://www.facebook.com/jefferson.ly.3", '_blank')}>
                        <FontAwesomeIcon icon={faFacebookF} className="social-icon facebook" />
                    </li>

                    <li onClick={() => window.open("https://www.linkedin.com/in/jeffersonly/", '_blank')}>
                        <FontAwesomeIcon icon={faLinkedinIn} className="social-icon linkedin" />
                    </li>

                    <li onClick={() => window.open("https://github.com/jeffersonly", '_blank')}>
                        <FontAwesomeIcon icon={faGithub} className="social-icon github" />
                    </li>

                    <li onClick={copyToClipboard} className="gmail-list-item">
                        <FontAwesomeIcon 
                            icon={faMailBulk} 
                            className="social-icon gmail" 
                            onClick={() => setEmailHover(true)}
                            onMouseEnter={() => setEmailHover(true)}
                            onMouseLeave={unhoverEmail}
                        />
                    </li>

                    <li className="phone-list-item">
                        <a href="tel:1-408-387-4709">
                            <FontAwesomeIcon 
                                icon={faMobile} 
                                className="social-icon phone" 
                                onClick={() => setPhoneHover(true)}
                                onMouseEnter={() => setPhoneHover(true)}
                                onMouseLeave={() => setPhoneHover(false)}
                            />
                        </a>
                    </li>
                </ul>
            </div>
        </div>
    );
};

export default ContactPage;