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
        cityArray: [],
        chances: '',
        score: 0,
        lettersArray: [],
        openModal: false
    }

    startGame = () => {
        fetchGameData()
            .then(selectRandomCounty)
            .then(({ country, city, cityArray }) => {
                this.setState({ country, city });
            })
            .then(() => this.setState(({ chances, cityArray }) => {
                console.log("City", this.state.city)
                return {
                    chances: chances + 5,
                    cityArray: this.state.city.toUpperCase().split(''), 
                    //reset lettersArray to empty array
                    lettersArray: []
                }
            }))
    }

    componentDidMount() {
        this.startGame();
    }

    handleSelected = (event) => {
        const selectedLetter = event.target.firstChild.textContent;
        const lettersArray = this.state.lettersArray;
        console.log("City array", this.state.cityArray)
        if (this.state.cityArray.indexOf(selectedLetter) !== -1) {
            const newCityArray = this.state.cityArray.filter((char) => char != selectedLetter); 
            const newLettersArray = lettersArray;
            newLettersArray.push(selectedLetter);
            this.setState(({ cityArray, lettersArray }) => {
                return {
                    cityArray: newCityArray,
                    lettersArray: newLettersArray
                }
            }, () => {
                console.log("Updated city array", this.state.cityArray)
                if (this.state.cityArray.length === 0){
                    this.setState(({ score }) => {
                        return {
                            score: score + 1, 
                        }
                    }, this.showModal)
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
        if (this.state.openModal === true) {
            this.startGame();
            this.showModal(); 
        }
    }

    showModal = () => {
        console.log("Showmodal reached")
        this.setState(({ openModal }) => {
            return {
                openModal: !openModal
            }
        })
    }

    checkChances = () => {
        const chances = this.state.chances;
        if (chances == 0) {
            this.props.updatePlay();
            this.showModal();
            this.playAgain(); 
        }
    }

    render() {

        return (
            <React.Fragment>
                <Hint country={this.state.country} />
                <Chance chances={this.state.chances} />
                <Score score={this.state.score} />
                {this.state.openModal &&
                    <Modal playAgain={this.playAgain} />}
                <Answer city={this.state.city} matchingLetters={this.state.lettersArray} />
                <Letters selectHandler={this.handleSelected} />
            </React.Fragment>
        )
    }
}