import React from 'react';
import code from '../assets/images/code.png';
// @ts-ignore
import Fade from 'react-reveal/Fade';

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
    </section>
  );
};

export default About;
