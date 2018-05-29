import React, { Component } from 'react';
import Navbar from "../Navbar";
import Jumbotron from "../Jumbotron";
import Card from "../Card";
import gmail from "./images/gmail.png"
import "./Pages.css";

class App extends Component {
    render() {
        return (
            <div>
            <Navbar />
            <Jumbotron phrase="From You to Me." subtitle="Avenues to get in contact with me"/>
            <hr />
            <div className="row">
                <div className="col">
                    <Card source={require("./images/gmail.png")} text="dslatuno@gmail.com"/>
                    <Card source={require("./images/github.png")} text={<a href="https://github.com/davidlatuno" target="_blank"><button className="btn btn-dark">GitHub</button></a>}/>
                    <Card source={require("./images/linkedin.png")} text={<a href="https://www.linkedin.com/in/david-latuno" target="_blank"><button className="btn btn-dark">LinkedIn</button></a>}/>
                    <Card source={require("./images/phone.png")} text="619-493-6024"/>
                </div>
            </div>
            </div>
    )
    }
}

export default App;