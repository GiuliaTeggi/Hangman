import React from 'react';
import Title from '../title/title';
import Hint from '../hint/hint'; 

export default class App extends React.Component {
    state = {
        playing: true,
        country: "Italy",
        city: "Rome"
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


