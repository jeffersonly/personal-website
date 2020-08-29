import '../../Styling/Pages/ContactPage.css';
import React from 'react';
import CircleParticles from '../Particles/CircleParticles';

function ContactPage(props) {
    let checkTheme = props.theme.darkMode ? 'darkMode' : 'lightMode'; //check if its dark mode or light mode

    return (
        <div className={`ContactPage ${checkTheme}`}>
            <CircleParticles />
            <h1 className="contactPageHeaderText"><u>Contact Me</u></h1>
            <h2 className="contactPageText">Have a question? Feel free to reach out to me!</h2>
            
            <form className="contact-form" action="https://formspree.io/jeffersonly98@gmail.com" method="POST">
                <div className="contact-container">
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
                            <div class="inputBox textarea">
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
        </div>
    );
};

export default ContactPage;