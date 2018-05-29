import React, { Component } from 'react';
import Navbar from "../Navbar";
import Jumbotron from "../Jumbotron";
import "./Pages.css";
import ProfilePic from "./images/ProfilePic.jpg"
import IconImage from "../IconImage";
import html from "./icons/html.png";
import bootstrap from "./icons/bootstrap.png";
import css from "./icons/css.png";
import github from "./icons/github.png";
import handlebars from "./icons/handlebars.png";
import javascript from "./icons/javascript.png";
import mern from "./icons/mern.jpg";
import mongodb from "./icons/mongodb.png";
import mysql from "./icons/mysql.png";
import node from "./icons/nodejs.png";
import react from "./icons/React.png";
import jquery from "./icons/jquery.png";

class App extends Component {
    render() {
        return (
            <div>
                <Navbar />
                <Jumbotron phrase="From Beer to Code." subtitle="The story of my transition from Ballast Point Brewing Company to software development" />
                <h3>My Story</h3>
                <hr />
                <div className="row">
                    <div className="col-md-5">
                        <img className="profilePic" src={ProfilePic} alt="profilepic" />
                    </div>
                    <div className="col-md-7">
                        <h4 className="bio">I am a Full Stack Web Developer who completed the UCSD full-time Coding Bootcamp in May 2018. My previous career as a Filter Technician at Ballast Point Brewing Company revealed my passion for mechanical processes, problem solving everyday, and creating quality products through collaborative teamwork. <br /><br />
                            Similar to my start with Ballast Point, I began my coding career from the ground up. Thanks to the bootcamp I have grown my front and back end coding skills and am now helping my classmates in seeing the big picture of projects, developing our skills to the next level, and encouraging them to stay positive.</h4>
                    </div>
                </div>
                <h3 className="skills">My Skills</h3>
                <hr />
                <div className="row">
                    <div className="col">
                        <div className="row">
                            <div className="col-sm-6">
                                <IconImage source={html} alt="html" />
                                <IconImage source={bootstrap} alt="bootstrap" />
                                <IconImage source={css} alt="css" />
                            </div>
                            <div className="col-sm-6">
                                <IconImage source={github} alt="github" />
                                <IconImage source={handlebars} alt="handlebars" />
                                <IconImage source={javascript} alt="javascript" />
                            </div>
                        </div>
                    </div>
                </div>
                <div className="row">
                    <div className="col">
                        <div className="row">
                            <div className="col-sm-6">
                                <IconImage source={jquery} alt="jquery" />
                                <IconImage source={mern} alt="mern" />
                                <IconImage source={mongodb} alt="mongodb" />
                            </div>
                            <div className="col-sm-6">
                                <IconImage source={mysql} alt="mysql" />
                                <IconImage source={node} alt="node" />
                                <IconImage source={react} alt="react" />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default App;
