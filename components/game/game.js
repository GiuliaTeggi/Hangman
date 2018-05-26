import React from 'react';
import Hint from '../hint/hint';
import Chance from '../chance/chance';
import Score from '../score/score'; 
import Modal from '../modal/modal';
import Answer from '../answer/answer';
import Letters from '../letters/letters';
import fetchGameData from '../../utils/fetchGameData/fetchGameData'
import selectRandomCounty from "../../utils/selectRandomCounty/selectRandomCounty";

export default class Game extends React.Component {
    state = {
        country: '',
        city: '',
        chances: '',
        score: 0,
        matchingLetters: [],
        openModal: false
    }

    startGame = () => {
        fetchGameData()
            .then(selectRandomCounty)
            .then(({ country, city }) => {
                this.setState({ country, city });
            })
            .then(() => this.setState(({ chances }) => {
                return {
                    chances: chances + 5
                }
            }))
    }

    componentDidMount() {
        this.startGame();
    }

    handleSelected = (event) => {
        const selectedLetter = event.target.firstChild.textContent;
        const city = this.state.city.toUpperCase();

        if (city.indexOf(selectedLetter) != -1) {
            this.setState(({ matchingLetters }) => {
                const newArray = matchingLetters;
                newArray.push(selectedLetter);
                return {
                    matchingLetters: newArray
                }
            })
        }
        else {
            this.setState(({ chances }) => {
                return {
                    chances: chances - 1,
                }
            }, this.checkChances)
        }
    }

    playAgain = () => {
        if (this.state.showModal === false) {
            this.startGame();
        }
    }

    showModal = () => {
        this.setState(({ showModal }) => {
            return {
                showModal: !showModal
            }
        }, this.playAgain)
    }

    checkChances = () => {
        const chances = this.state.chances;
        if (chances == 0) {
            this.props.updatePlay();
            this.showModal();
        }
    }

    render() {

        return (
            <React.Fragment>
                <Hint country={this.state.country} />
                <Chance chances={this.state.chances} />
                <Score score={this.state.score}/> 
                {this.state.openModal &&
                    <Modal showModal={this.showModal} />}
                <Answer city={this.state.city} matchingLetters={this.state.matchingLetters} />
                <Letters selectHandler={this.handleSelected} />
            </React.Fragment>
        )
    }
}