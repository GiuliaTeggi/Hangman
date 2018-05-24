import React from 'react';
import './answer.css';

const AnswerLetter = ({ letter, display }) =>
  <li>
    {
      display ? letter : '_'
    }
  </li>

const Answer = ({ answerArray }) => {
  const answerLetterList = answerArray.map((letterObj) => {
    return <AnswerLetter key={letterObj.id} {...letterObj} />;
  });
  return (
    <ul>
      { answerLetterList }
    </ul>
  )
}

export default Answer; 