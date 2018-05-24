import React from 'react';
import Hint from '../hint/hint';
import Chance from '../chance/chance';
import Answer from '../answer/answer';
import Letters from '../letters/letters';
import fetchGameData from '../../utils/fetchGameData/fetchGameData'
import selectRandomCounty from "../../utils/selectRandomCounty/selectRandomCounty";


export default class Game extends React.Component {
  state = {
    chances: 5,
    country: '',
    city: '',
    answerArray: [],
    selectedLettersArray: [],
  }

  componentDidMount() {
    fetchGameData()
      .then(selectRandomCounty)
      .then(({ country, city }) => {
        const answerArray = city
          .toUpperCase()
          .split('')
          .map((letter, index) => {
            return {
              letter,
              display: false,
              id: `${index}:${letter}`
            }
          })
        this.setState({ country, city, answerArray });
      });
  }


  handleSelected = (event) => {
    const { city } = this.state

    const selectedLetter = event.target.firstChild.textContent;
    const selectedLetterIndex = city.toUpperCase().indexOf(selectedLetter);

    if (selectedLetterIndex !== -1) {
      this.setState((prevState) => {

        const newAnswerArray = prevState.answerArray
          .map((letterObj) => {
            if (letterObj.letter === selectedLetter) {
              letterObj.display = true;
              return letterObj;
            }
            return letterObj;
          })
        return { newAnswerArray }
      }, this.checkWin);

    }
    else {
      this.setState((prevState) => {
        return {
          chances: prevState.chances - 1,
        }
      }, this.checkChances)
    }
  } // handleSelected

  checkChances = () => {
    const chances = this.state.chances;
    if (chances == 0) {
      this.props.updatePlay();
    }
  }

  checkWin = () => {
    const { answerArray } = this.state;
    const { updatePlay } = this.props;
    const numOfDisplayingLetters = answerArray
      .reduce((sum, letterObj) => {
        if (letterObj.display) {
          sum++
        }
        return sum;
      }, 0);

    if (numOfDisplayingLetters === answerArray.length) {
      updatePlay();
    }

  }


  render() {
    const { answerArray } = this.state
    return (
      <React.Fragment>
        <Hint country={this.state.country} />
        <Chance chances={this.state.chances} />
        <Answer answerArray={answerArray} />
        <Letters selectHandler={this.handleSelected} />
      </React.Fragment>
    )
  }
}