import React from 'react';
import NameCard from './NameCard';
import './Results.css';
const Results = ({ suggestedNames }) => {
    const suggestName = suggestedNames.map((sugName) => {
        return <NameCard key={sugName} suggestedName={sugName} />;
    });
    return (
        <div className='results-container'>
            {suggestName}
        </div>
    );
};

export default Results;