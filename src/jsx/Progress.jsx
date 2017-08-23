import React, { PropTypes } from 'react';
import '../App.css';


const Progress = ({progress}) => {
    return (
        <span className="quiz progress">Question {progress + 1}</span>
    );
}

Progress.propTypes = {
    progress: PropTypes.number.isRequired
};

export default Progress;