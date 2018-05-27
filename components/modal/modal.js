import React from 'react';

const Modal = props => 
<div className="modal">
    <div className="content">
        <button onClick={props.playAgain}>Play Again
            </button>
    </div>
</div>;

export default Modal; 