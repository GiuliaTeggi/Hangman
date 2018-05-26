import React from 'react';

const Modal = props => 
<div className="modal">
    <div className="content">
        <p>GAME OVER</p>
        <button onClick={props.showModal}>Play Again
            </button>
    </div>
</div>;

export default Modal; 