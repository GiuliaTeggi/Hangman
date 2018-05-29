import React from 'react';

const Modal = props => 
<div className="modal">
    <div className="content">
    {props.win.length === 0 &&
    <p>Whohoo you guessed it!<br /> The capital of {props.country} is {props.city}.</p>}
    {props.win.length > 0 &&
    <p>Oh no! <br />The capital of {props.country} is {props.city}.</p>}
        <button onClick={props.playAgain}>Play Again
            </button>
    </div>
</div>;

export default Modal; 