import React, { PropTypes } from 'react';
import '../App.css';

const Score = ({score}) => {
    return (
        <span className="quiz score">Score: {score}</span>
    );
}

Score.propTypes = {
    score: PropTypes.number.isRequired
};

export default Score;