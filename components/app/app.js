import React from 'react';
import fetchGameData from '../../utils/fetchGameData/fetchGameData'
import selectRandomCounty from "../../utils/selectRandomCounty/selectRandomCounty";
import Title from '../title/title';
import Hint from '../hint/hint'; 

export default class App extends React.Component {
    state = {
        playing: true,
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
            </React.Fragment>
        )
    }
}


