import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faDownload } from '@fortawesome/free-solid-svg-icons';
import Navbar from '../components/navbar';
import Jumbotron from '../components/jumbotron';
import Card from '../components/card';
import Footer from '../components/footer';
import '../static/css/pages.css';

const App = () => (
  <div>
    <Navbar />
    <Jumbotron phrase="From You to Me." subtitle="Avenues to get in contact with me" />
    <hr />
    <div className="row">
      <div className="col contactCol">
        <Card source="../static/pics/gmail.png" text="dslatuno@gmail.com" />
        <Card source="../static/pics/github.png" text={<a href="https://github.com/davidlatuno" target="_blank" rel="noopener noreferrer"><button type="button" className="btn btn-dark">GitHub</button></a>} />
        <Card source="../static/pics/linkedin.png" text={<a href="https://www.linkedin.com/in/david-latuno" target="_blank" rel="noopener noreferrer"><button type="button" className="btn btn-dark">LinkedIn</button></a>} />
        <Card
          source="../static/pics/resume.png"
          text={
            <React.Fragment>
              <a href="https://github.com/davidlatuno/react-portfolio/blob/master/static/pics/David%20Latuno%20Resume.pdf" target="_blank" rel="noopener noreferrer"><button type="button" className="btn btn-dark">Resume</button></a>
              <a href="https://github.com/davidlatuno/react-portfolio/raw/master/static/pics/David%20Latuno%20Resume.pdf" target="_blank" rel="noopener noreferrer"><button type="button" className="btn btn-dark"><FontAwesomeIcon icon={faDownload} /></button></a>
            </React.Fragment>
          }
        />
        <Card source="../static/pics/phone.png" text="619-493-6024" />
      </div>
    </div>
    <Footer />
  </div>
);

export default App;
