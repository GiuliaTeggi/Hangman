import React from 'react';

const alphabet = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H',
    'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S',
    'T', 'U', 'V', 'W', 'X', 'Y', 'Z'];

const Letters = () => {
    const listItems = alphabet.map((el) =>
        <li key={el}><a href="" onClick={(e) => e.preventDefault()}>{el}</a></li>);
    return (
        <ul className="letterName">{listItems}</ul>
    );
}

export default Letters;



