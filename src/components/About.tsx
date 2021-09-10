import React from 'react';
import code from '../assets/images/code.png';
import scroll from '../assets/images/scroll.png';
// @ts-ignore
import Fade from 'react-reveal/Fade';
// @ts-ignore
import Bounce from 'react-reveal/Bounce';

const About = () => {
  return (
    <section className="about">
      <Fade top duration={3000}>
        <h1>I ❤️</h1>
      </Fade>
      <div className="skills">
        <Fade left duration={3000}>
          <img src={code} className="code" alt="code icon" />
        </Fade>
        <Fade top cascade duration={3000}>
          <ul>
            <li>Javascript</li>
            <li>React</li>
            <li>Ruby</li>
            <li>Rails</li>
          </ul>
        </Fade>
      </div>
      <div className="navBar">
        <div className="nav">
          <ul>
            <li>Home</li>
            <li>About</li>
            <li>Projects</li>
          </ul>
        </div>
        <Bounce bottom>
          <div className="scroll">
            <img src={scroll} alt="scroll down icon" />
          </div>
        </Bounce>
      </div>
    </section>
  );
};

export default About;
