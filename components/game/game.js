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
        matchingLetters: []
    }

    componentDidMount() {
        fetchGameData()
            .then(selectRandomCounty)
            .then(({ country, city }) => {
                this.setState({ country, city });
            });
    }

    handleSelected = (event) => {
        const selectedLetter = event.target.firstChild.textContent;
        const city = this.state.city.toUpperCase();

        if (city.indexOf(selectedLetter) != -1) {
            console.log("It's a match");
            this.setState((prevState) => {
                const newArray = prevState.matchingLetters; 
                newArray.push(selectedLetter); 
                return {
                    matchingLetters: newArray
                }
            })
        }
        else {
            this.setState((prevState) => {
                return {
                    chances: prevState.chances - 1,
                }
            }, this.checkChances)
        }
    }
    
    checkChances = () => {
        const chances = this.state.chances; 
        if (chances == 0){
            this.props.updatePlay(); 
        }
    }

    render() {

        return (
            <React.Fragment>
                <Hint country={this.state.country} />
                <Chance chances={this.state.chances} />
                <Answer city={this.state.city} matchingLetters={this.state.matchingLetters}/>
                <Letters selectHandler={this.handleSelected}/>
            </React.Fragment>
        )
    }
}