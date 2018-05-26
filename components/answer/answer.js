import React from 'react';

const Answer = (props) => {
  const city = props.city;
  const letters = props.matchingLetters;

  const listItems = city.split('').map((char, index) => {

    if (letters.indexOf(char.toUpperCase()) != -1) {
      return <li key={index + char.toUpperCase()} className="answer game">{char}
      </li>
    }
    else if (char === ' ' || char === '.') {
      return <li key={index + "Empty"} className="answer game"></li>
    }
    return <li key={index + char.toUpperCase()} className="answer game">_</li>
  });
  return (
    <ul>{listItems}</ul>
  )
}


export default Answer; 