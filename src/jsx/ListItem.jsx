import React, { PropTypes } from 'react';

const ListItem = ({answerItem, answerCallback, index}) => {
    function onClickAnswer() {
        answerCallback(index);
    }

    return (
        <li onClick={onClickAnswer}>{answerItem}</li>
    );
}

ListItem.propTypes = {
    answerItem: PropTypes.string.isRequired,
    answerCallback: PropTypes.func.isRequired,
    index: PropTypes.number.isRequired
};

export default ListItem;