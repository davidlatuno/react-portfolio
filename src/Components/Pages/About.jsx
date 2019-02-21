import React from 'react';
import Navbar from '../Navbar';
import Jumbotron from '../Jumbotron';
import Footer from '../Footer';
import './Pages.css';
import ProfilePic from './images/DSC_6082.jpg';
import IconImage from '../IconImage';
import html from './icons/html.png';
import bootstrap from './icons/bootstrap.png';
import css from './icons/css.png';
import github from './icons/github.png';
import handlebars from './icons/handlebars.png';
import javascript from './icons/javascript.png';
import mern from './icons/mern.jpg';
import mongodb from './icons/mongodb.png';
import mysql from './icons/mysql.png';
import node from './icons/nodejs.png';
import react from './icons/React.png';
import jquery from './icons/jquery.png';

const App = () => (
  <div>
    <Navbar />
    <Jumbotron phrase="From Beer to Code." subtitle="The story of my transition from Ballast Point Brewing Company to software development" />
    <h3>My Story</h3>
    <hr />
    <div className="row">
      <div className="col-md-6 aboutSections">
        <img className="profilePic profilePic1" src={ProfilePic} alt="profilepic" />
      </div>
      <div className="col-md-6 aboutSections">
        <h4 className="bio bio1">
          Full-Stack fanatic who converts coffee into code.
          My previous career as a Filter Technician at Ballast
          Point Brewing Company revealed my passion for mechanical processes,
          problem solving, and creating quality products through collaborative teamwork.
          I specialize in HTML, CSS, JavaScript, and React on the front-end as well as Node
          and MySQL/Mongo on the back-end to create beautiful and secure applications.
          My biggest priority is developing clear, high-quality code while cultivating
          a fun and encouraging workplace culture.
        </h4>
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
    <Footer />
  </div>
);

export default App;
