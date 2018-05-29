import React, { Component } from 'react';
import Navbar from "../Navbar";
import Jumbotron from "../Jumbotron";
import "./Pages.css";

class App extends Component {
    render() {
        return (
            <div>
            <Navbar />
            <Jumbotron phrase="From You to Me." subtitle="Avenues to get in contact with me"/>
            </div>
    )
    }
}

export default App;