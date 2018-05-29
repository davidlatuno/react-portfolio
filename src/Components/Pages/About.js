import React, { Component } from 'react';
import Navbar from "../Navbar";
import Jumbotron from "../Jumbotron";
import "./Pages.css";

class App extends Component {
    render() {
        return (
            <div>
            <Navbar />
            <Jumbotron phrase="Beer to Code." />
            </div>
    )
    }
}

export default App;
