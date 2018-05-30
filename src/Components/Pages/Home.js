import React, { Component } from 'react';
import Navbar from "../Navbar";
import Jumbotron from "../Jumbotron";
import Picture from "../Picture";
import Footer from "../Footer";
import "./Pages.css";

class Home extends Component {
    render() {
        return (
            <div>
                <Navbar />
                <Jumbotron phrase="From Front to Back." subtitle="A list of full stack, front end, and back end projects I worked on"/>
                <h3>Full Stack Sites</h3>
                <hr />
                <div className="row">
                    <div className="col-md-6">
                        <Picture source={require("./images/EventSMS.png")} alt="eventsms" github="https://github.com/davidlatuno/event-project" deployed="https://event-sms.herokuapp.com/" />
                    </div>
                    <div className="col-md-6">
                        <Picture source={require("./images/whistlr.png")} alt="whistlr" github="https://github.com/kabdullah9/Whistlr" deployed="https://whistlr.herokuapp.com/" />
                    </div>
                </div>
                <div className="row">
                    <div className="col-md-6">
                        <Picture source={require("./images/newsScraper.png")} alt="scraper" github="https://github.com/davidlatuno/news-scraper" deployed="https://dl-news-scraper.herokuapp.com/" />
                    </div>
                    <div className="col-md-6">
                        <Picture source={require("./images/nytreact.png")} alt="nytreact" github="https://github.com/davidlatuno/nytreact" deployed="https://nyt-react-dl.herokuapp.com/" />
                    </div>
                </div>
                <div className="row">
                    <div className="col-md-6">
                        <Picture source={require("./images/friendFinder.png")} alt="friendfinder" github="https://github.com/davidlatuno/FriendFinder" deployed="https://friend-finder-dl.herokuapp.com/" />
                    </div>
                    <div className="col-md-6">
                        <Picture source={require("./images/burger.png")} alt="burger" github="https://github.com/davidlatuno/burger" deployed="https://burger-dl.herokuapp.com/" />
                    </div>
                </div>
                <h3 className="frontend">Front End Sites</h3>
                <hr />
                <div className="row">
                    <div className="col-md-6">
                        <Picture source={require("./images/Giftastic.png")} alt="giftastic" github="https://github.com/davidlatuno/Giftastic" deployed="https://davidlatuno.github.io/Giftastic/" />
                    </div>
                    <div className="col-md-6">
                        <Picture source={require("./images/FaceYourself.png")} alt="faceyourself" github="https://github.com/davidlatuno/FaceYourself" deployed="https://davidlatuno.github.io/FaceYourself/" />
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
                        <Picture source={require("./images/Crystal-Game.png")} alt="crystal-game" github="https://github.com/davidlatuno/Crystal-Game" deployed="https://davidlatuno.github.io/Crystal-Game/" />
                    </div>
                </div>
                <div className="row">
                    <div className="col-md-4">
                        <Picture source={require("./images/Psychic-game.png")} alt="psychic-game" github="https://github.com/davidlatuno/Psychic-Game" deployed="https://davidlatuno.github.io/Psychic-Game/" />
                    </div>
                    <div className="col-md-4">
                        <Picture source={require("./images/Hangman-game.png")} alt="hangman-game" github="https://github.com/davidlatuno/Hangman-Game" deployed="https://davidlatuno.github.io/Hangman-Game/" />
                    </div>
                    <div className="col-md-4">
                        <Picture source={require("./images/memory-game.png")} alt="memory-game" github="https://github.com/davidlatuno/memory-game" deployed="https://davidlatuno.github.io/memory-game//" />
                    </div>
                </div>
                <h3 className="backend">Back End Applications</h3>
                <hr />
                <div className="row">
                    <div className="col-md-4">
                        <Picture source={require("./images/liri.png")} alt="liri" github="https://github.com/davidlatuno/liri-node-app-MK2" />
                    </div>
                    <div className="col-md-4">
                        <Picture source={require("./images/backend-hangman.png")} alt="hangman" github="https://github.com/davidlatuno/Constructor-Word-Guess" />
                    </div>
                    <div className="col-md-4">
                        <Picture source={require("./images/bamazon.png")} alt="bamazon" github="https://github.com/davidlatuno/bamazon" />
                    </div>
                </div>
                <Footer />
            </div>
        )
    }
}

export default Home;
