import React from 'react'; 
import '../../style.css'

const Answer = (props) => {
    const city = props.city; 
    const listItems = city.split('').map((char, index) => <li key={index}>_</li>); 
    return (
      <ul>{listItems}</ul>
    );
  }

export default Answer; 