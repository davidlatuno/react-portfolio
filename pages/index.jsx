import React from 'react';
import Navbar from '../components/navbar';
import Jumbotron from '../components/jumbotron';
import Picture from '../components/picture';
import Footer from '../components/footer';
import '../static/css/pages.css';

const Home = () => (
  <div>
    <Navbar />
    <Jumbotron phrase="From Front to Back." subtitle="A list of full stack, front end, and back end projects I worked on" />
    <h3>Full Stack Applications</h3>
    <hr />
    <div className="row">
      <div className="col-md-6">
        <Picture source="../static/pics/sdbeer.png" alt="sdbeer" deployed="https://www.sdbeer.com/" />
      </div>
      <div className="col-md-6">
        <Picture source="../static/pics/jobApp.png" alt="whistlr" deployed="https://jobothehunt.herokuapp.com/" />
      </div>
    </div>
    <h3 className="frontend">Front End Websites</h3>
    <hr />
    <div className="row">
      <div className="col-md-6">
        <Picture source="../static/pics/reactPortfolio.png" alt="portfolio" github="https://github.com/davidlatuno/react-portfolio" deployed="https://davidlatuno-portfolio.herokuapp.com/" />
      </div>
      <div className="col-md-6">
        <Picture source="../static/pics/FaceYourself.png" alt="faceyourself" github="https://github.com/davidlatuno/FaceYourselfDL" deployed="https://davidlatuno.github.io/FaceYourselfDL//" />
      </div>
    </div>
    <h3 className="backend">CLI Applications</h3>
    <hr />
    <div className="row">
      <div className="col-md-4">
        <Picture source="../static/pics/liri.png" alt="liri" github="https://github.com/davidlatuno/liri-node-app-MK2" />
      </div>
      <div className="col-md-4">
        <Picture source="../static/pics/backend-hangman.png" alt="hangman" github="https://github.com/davidlatuno/Constructor-Word-Guess" />
      </div>
      <div className="col-md-4">
        <Picture source="../static/pics/bamazon.png" alt="bamazon" github="https://github.com/davidlatuno/bamazon" />
      </div>
    </div>
    <Footer />
  </div>
);

export default Home;
