import '../../Styling/Modals/AboutModal.css';
import React from 'react';

function AboutModal(props) {
    let checkModalState = props.modalState ? 'open' : 'closed';

    return (
        <div className={`about-modal-wrapper ${checkModalState}`} onClick={e => props.modalStateChange(e.target.value)}>
            <div className={`about-modal ${checkModalState}`}>
                Hello testetestest
            </div>
        </div>
    );
}

export default AboutModal;