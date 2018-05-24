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
        selectedLettersArray: [],
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
        this.setState(({ selectedLettersArray }) => {
            selectedLettersArray.push(selectedLetter);
            return {selectedLettersArray}
        })


    }

    render() {
       
        return (
            <React.Fragment>
                <Hint country={this.state.country}/>
                <Chance chances={this.state.chances} />
                <Answer city={this.state.city} />
                <Letters selectHandler={this.handleSelected} />
            </React.Fragment>
        )
    }
}