import React from 'react';
import Title from '../title/title';
import Game from '../game/game';

export default class App extends React.Component {
    state = {
        playing: true,
    }

    updatePlay = () => {
        this.setState((prevState) => {
            console.log("UpdatePlay reached"); 
            return {
                playing: !prevState.playing
            }
        })
    }

    render() {

            return (
                <React.Fragment>
                    <Title />
                    <Game updatePlay={this.updatePlay} />
                </React.Fragment>
            )
        }
    }


