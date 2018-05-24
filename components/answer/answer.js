import React from 'react';
import './answer.css';

const Answer = (props) => {
  const city = props.city;
  const letters = props.matchingLetters;
  const listItems = city.split('').map((char, index) => {
      if (letters.indexOf(char.toUpperCase()) != -1) {
      return <li key={index + char.toUpperCase()}>{char}
      </li>
    }
    else return <li key={index + char.toUpperCase()}>_</li>
  });
  return (
    <ul>{listItems}</ul>
  )
}

export default Answer; 