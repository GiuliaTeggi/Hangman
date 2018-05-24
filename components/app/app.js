import React from 'react';
import Title from '../title/title';
import Game from '../game/game';

export default class App extends React.Component {
    state = {
        playing: true,
    }

    render() {
       
        return (
            <React.Fragment>
                <Title />
                <Game />
            </React.Fragment>
        )
    }
}


