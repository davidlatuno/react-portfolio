import React, { Component } from 'react';
import Navbar from "../Navbar";
import Jumbotron from "../Jumbotron";
import psychic from "./images/Psychic-game.png";
import "./Pages.css";

class Home extends Component {
    render() {
        return (
            <div>
                <Navbar />
                <Jumbotron phrase="Front to Back" />
                <div className="row">
                    <div className="col-md-4">
                        <div class="picContainer">
                            <img src={psychic} alt="psychic-game" class="image" />
                            <div class="overlay">
                                <div class="text">Hello World</div>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-4">
                    </div>
                    <div className="col-md-4">
                    </div>
                </div>
            </div>
        )
    }
}

export default Home;
