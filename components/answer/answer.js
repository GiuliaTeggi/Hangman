import React from 'react';


const Answer = (props) => {
  const city = props.city;
  const letters = props.matchingLetters;
  const listItems = city.split('').map((char, index) => {
    if (letters.indexOf(char.toUpperCase()) != -1) {
      return <li key={index + char.toUpperCase()} className="answer">{char}
      </li>
    }
    else return <li key={index + char.toUpperCase()} className="answer">_</li>
  });
  return (
    <ul>{listItems}</ul>
  )
}

export default Answer; 