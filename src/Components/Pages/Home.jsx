import React from 'react';
import Navbar from '../Navbar';
import Jumbotron from '../Jumbotron';
import Picture from '../Picture';
import Footer from '../Footer';
import './Pages.css';

const Home = () => (
  <div>
    <Navbar />
    <Jumbotron phrase="From Front to Back." subtitle="A list of full stack, front end, and back end projects I worked on" />
    <h3>Full Stack Applications</h3>
    <hr />
    <div className="row">
      <div className="col-md-6">
        <Picture source={require('./images/sdbeer.png')} alt="sdbeer" deployed="https://www.sdbeer.com/" />
      </div>
      <div className="col-md-6">
        <Picture source={require('./images/jobApp.png')} alt="whistlr" deployed="https://jobothehunt.herokuapp.com/" />
      </div>
    </div>
    <h3 className="frontend">Front End Websites</h3>
    <hr />
    <div className="row">
      <div className="col-md-6">
        <Picture source={require('./images/reactPortfolio.png')} alt="portfolio" github="https://github.com/davidlatuno/react-portfolio" deployed="https://davidlatuno-portfolio.herokuapp.com/" />
      </div>
      <div className="col-md-6">
        <Picture source={require('./images/faceYourself.png')} alt="faceyourself" github="https://github.com/davidlatuno/FaceYourself" deployed="https://davidlatuno.github.io/FaceYourself/" />
      </div>
    </div>
    <h3 className="backend">CLI Applications</h3>
    <hr />
    <div className="row">
      <div className="col-md-4">
        <Picture source={require('./images/liri.png')} alt="liri" github="https://github.com/davidlatuno/liri-node-app-MK2" />
      </div>
      <div className="col-md-4">
        <Picture source={require('./images/backend-hangman.png')} alt="hangman" github="https://github.com/davidlatuno/Constructor-Word-Guess" />
      </div>
      <div className="col-md-4">
        <Picture source={require('./images/bamazon.png')} alt="bamazon" github="https://github.com/davidlatuno/bamazon" />
      </div>
    </div>
    <Footer />
  </div>
);

export default Home;
