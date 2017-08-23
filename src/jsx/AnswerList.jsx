import React, { PropTypes } from 'react';
import ListItem from './ListItem.jsx';

const AnswerList = ({answers, answerCallback}) => {
    return (
        <ul className="quiz answer-list">
            {answers.map(function(answer, index) {
                return (
                    <ListItem answerItem={answer} answerCallback={answerCallback} index={index} />
                )
            },this)}
        </ul>
    );
}

AnswerList.propTypes = {
    answers: PropTypes.array.isRequired,
    answerCallback: PropTypes.func.isRequired
};

export default AnswerList;