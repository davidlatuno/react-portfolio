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
                <hr/>
                <div className="row">
                    <div className="col-md-6">
                        <Picture source={require("./images/Giftastic.png")} alt="giftastic" github="https://github.com/davidlatuno/Giftastic" deployed="https://davidlatuno.github.io/Giftastic/" />
                    </div>
                    <div className="col-md-6">
                        <Picture source={require("./images/Crystal-Game.png")} alt="crystal-game" github="https://github.com/davidlatuno/Crystal-Game" deployed="https://davidlatuno.github.io/Crystal-Game/" />
                    </div>
                </div>
                <div className="row">
                    <div className="col-md-6">
                        <Picture source={require("./images/RPG-Game.png")} alt="RPG-game" github="https://github.com/davidlatuno/RPG-Game" deployed="https://davidlatuno.github.io/RPG-Game/" />
                    </div>
                    <div className="col-md-6">
                        <Picture source={require("./images/Trivia-Game.png")} alt="Trivia-game" github="https://github.com/davidlatuno/Trivia-Game-MK2" deployed="https://davidlatuno.github.io/Trivia-Game-MK2/" />
                    </div>
                </div>
                <div className="row">
                    <div className="col-md-6">
                        <Picture source={require("./images/Train-Schedule.png")} alt="train-schedule" github="https://github.com/davidlatuno/Train-Schedule" deployed="https://davidlatuno.github.io/Train-Schedule/" />
                    </div>
                    <div className="col-md-6">
                        <Picture source={require("./images/FaceYourself.png")} alt="faceyourself" github="https://github.com/davidlatuno/FaceYourself" deployed="https://davidlatuno.github.io/FaceYourself/" />
                    </div>
                </div>
                <div className="row">
                    <div className="col-md-6">
                        <Picture source={require("./images/Psychic-game.png")} alt="psychic-game" github="https://github.com/davidlatuno/Psychic-Game" deployed="https://davidlatuno.github.io/Psychic-Game/" />
                    </div>
                    <div className="col-md-6">
                        <Picture source={require("./images/Hangman-game.png")} alt="hangman-game" github="https://github.com/davidlatuno/Hangman-Game" deployed="https://davidlatuno.github.io/Hangman-Game/" />
                    </div>
                </div>
                <h3 className="backend">Back End Applications</h3>
                <hr/>
                <div className="row">
                    <div className="col-md-4">
                        <Picture source={require("./images/LIRI.png")} alt="liri" github="https://github.com/davidlatuno/liri-node-app-MK2" />
                    </div>
                    <div className="col-md-4">
                        <Picture source={require("./images/backend-hangman.png")} alt="hangman" github="https://github.com/davidlatuno/Constructor-Word-Guess" />
                    </div>
                    <div className="col-md-4">
                        <Picture source={require("./images/bamazon.png")} alt="bamazon" github="https://github.com/davidlatuno/bamazon" />
                    </div>
                </div>
            </div>
        )
    }
}

export default Home;
