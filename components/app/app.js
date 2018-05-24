import React from 'react';
import fetchGameData from '../../utils/fetchGameData/fetchGameData'
import selectRandomCounty from "../../utils/selectRandomCounty/selectRandomCounty";
import Title from '../title/title';
import Hint from '../hint/hint'; 
import Chance from '../chance/chance'; 
import Answer from '../answer/answer'; 
import Letters from '../letter/letter';

export default class App extends React.Component {
    state = {
        playing: true,
        chances: 5,
        country: '',
        city: '',
    }
    
    componentDidMount() {
        fetchGameData()
            .then(selectRandomCounty)
            .then(({ country, city }) => {
                this.setState({ country, city })
            });
    }

    render() {
       
        return (
            <React.Fragment>
                <Title />
                <Hint country={this.state.country}/>
                <Chance chances={this.state.chances} />
                <Answer city={this.state.city} />
                    <Letters />
            </React.Fragment>
        )
    }
}


