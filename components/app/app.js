import React from 'react';
import Title from '../title/title';
import Hint from '../hint/hint'; 
import Chance from '../chance/chance'; 
import Answer from '../answer/answer'; 
import Letters from '../letter/letter';

export default class App extends React.Component {
    state = {
        playing: true,
        chances: 5, 
        country: 'Italy',
        city: "Rome"
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


