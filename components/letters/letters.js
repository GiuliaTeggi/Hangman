import React from 'react';

const alphabet = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H',
    'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S',
    'T', 'U', 'V', 'W', 'X', 'Y', 'Z'];

const Letters = (props) => {
    const listItems = alphabet.map((el) =>
    <li  key={el}><button onClick={props.selectHandler}>{el}</button></li>); 
    return (
        <ul className="game">{listItems}</ul>
    );
}

export default Letters;



