import React, { PropTypes } from 'react';
import '../App.css';

const Questions = ({questionText}) => {
    return (
        <p className="quiz question">{questionText}</p>
    );
}

Questions.propTypes = {
    questionText: PropTypes.string.isRequired
};

export default Questions;