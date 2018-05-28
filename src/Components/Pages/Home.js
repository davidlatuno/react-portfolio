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
                <div className="row">
                    <div className="col-md-4">
                        <Picture source={require("./images/Psychic-game.png")} alt="psychic-game"/>
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
