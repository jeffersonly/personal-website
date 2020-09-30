import '../../Styling/Cards/ExperienceCard.css';
import React from 'react';

function ExperienceCard(props) {
    function getListDetails() {
        if(props.BulletPointList) {
            return props.BulletPointList.map((details, i) => <li className="bulletpoint-text" key={i}>{details}</li>)
        }
    }

    return (
        <div className="card">
            <div className="content">
                <h2 className="job-type">{props.JobType}</h2>
                <h3 className="job-title">{props.JobTitle}</h3>
                <h4 className="company-and-location">{props.JobLocation}</h4>
                <h4 className="job-date">{props.JobDate}</h4>
            </div>

            <ul className="bulletpoints">
                {getListDetails()}
            </ul>
            
        </div>
    );
}

export default ExperienceCard;