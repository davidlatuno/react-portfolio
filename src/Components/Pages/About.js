import React, { Component } from 'react';
import Navbar from "../Navbar";
import Jumbotron from "../Jumbotron";
import "./Pages.css";
import ProfilePic from "./images/ProfilePic.jpg"
import IconImage from "../IconImage";
import html from "./icons/html.png";

class App extends Component {
    render() {
        return (
            <div>
                <Navbar />
                <Jumbotron phrase="From Beer to Code." subtitle="The story of my transition from Ballast Point Brewing Company to software development" />
                <h3>My Story</h3>
                <hr />
                <div className="row">
                    <div className="col-md-7">
                        <h4 className="bio">I am a Full Stack Web Developer who completed the UCSD full-time Coding Bootcamp in May 2018. My previous career as a Filter Technician at Ballast Point Brewing Company revealed my passion for mechanical processes, problem solving everyday, and creating quality products through collaborative teamwork. <br /><br />
                            Similar to my start with Ballast Point, I began my coding career from the ground up. Thanks to the bootcamp I have grown my front and back end coding skills and am now helping my classmates in seeing the big picture of projects, developing our skills to the next level, and encouraging them to stay positive.</h4>
                    </div>
                    <div className="col-md-5">
                        <img className="profilePic" src={ProfilePic} alt="profilepic" />
                    </div>
                </div>
                <h3>My Skills</h3>
                <hr />
                <div className="row">
                    <div className="col-xs-2">
                        <IconImage source={html} alt="html" />
                    </div>
                    <div className="col-xs-2">
                        <IconImage source={html} alt="html" />
                    </div>
                    <div className="col-xs-2">
                        <IconImage source={html} alt="html" />
                    </div>
                    <div className="col-xs-2">
                        <IconImage source={html} alt="html" />
                    </div>
                    <div className="col-xs-2">
                        <IconImage source={html} alt="html" />
                    </div>
                    <div className="col-xs-2">
                        <IconImage source={html} alt="html" />
                    </div>
                </div>
            </div>
        )
    }
}

export default App;
