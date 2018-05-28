import React, { Component } from 'react';
import Navbar from "../Navbar";
import Jumbotron from "../Jumbotron";
import Picture from "../Picture"
import "./Pages.css";

class Home extends Component {
    render() {
        return (
            <div>
                <Navbar />
                <Jumbotron phrase="Front to Back" />
                <h3>Front End Sites</h3>
                <div className="row">
                    <div className="col-md-4">
                        <Picture source={require("./images/Psychic-game.png")} alt="psychic-game" github="https://github.com/davidlatuno/Psychic-Game" deployed="https://davidlatuno.github.io/Psychic-Game/" />
                    </div>
                    <div className="col-md-4">
                        <Picture source={require("./images/Hangman-game.png")} alt="hangman-game" github="https://github.com/davidlatuno/Hangman-Game" deployed="https://davidlatuno.github.io/Hangman-Game/" />
                    </div>
                    <div className="col-md-4">
                        <Picture source={require("./images/Crystal-Game.png")} alt="crystal-game" github="https://github.com/davidlatuno/Crystal-Game" deployed="https://davidlatuno.github.io/Crystal-Game/" />
                    </div>
                </div>
                <div className="row">
                    <div className="col-md-4">
                        <Picture source={require("./images/RPG-Game.png")} alt="psychic-game" github="https://github.com/davidlatuno/RPG-Game" deployed="https://davidlatuno.github.io/RPG-Game/" />
                    </div>
                    <div className="col-md-4">
                        <Picture source={require("./images/Trivia-Game.png")} alt="hangman-game" github="https://github.com/davidlatuno/Trivia-Game-MK2" deployed="https://davidlatuno.github.io/Trivia-Game-MK2/" />
                    </div>
                    <div className="col-md-4">
                        <Picture source={require("./images/Giftastic.png")} alt="crystal-game" github="https://github.com/davidlatuno/Giftastic" deployed="https://davidlatuno.github.io/Giftastic/" />
                    </div>
                </div>
            </div>
        )
    }
}

export default Home;
