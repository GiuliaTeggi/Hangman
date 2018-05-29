import React from 'react';

const Score = props => {
    return (
        <React.Fragment>
            <h3 className="game">Score: {props.score}</h3>
            <i className="far fa-star"></i>
        </React.Fragment>);
}

export default Score; 