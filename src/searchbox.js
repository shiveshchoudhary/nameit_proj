import React from 'react';
import './searchbox.css';
const Searchbox = ({ onInputChange }) => {
    return (
        <div className="search-box">
            <input 
                onChange={(event) => onInputChange(event.target.value)}
                placeholder="Type Keywords" className = "search-input" />
        </div>
    );
};

export default Searchbox;
