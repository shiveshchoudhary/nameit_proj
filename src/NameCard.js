import React from 'react';
import './NameCard.css'
const nameurl = "https://www.namecheap.com/domains/registration/results/?domain=";
const NameCard =({ suggestedName }) => {
        return (
            <a className="card-link" href={`${nameurl}${suggestedName}`}>
            <div className="result-name-card">
                <p className="result-name">{suggestedName}</p>
                </div>
            </a>
);};

export default NameCard; 