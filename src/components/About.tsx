import React from 'react';
// @ts-ignore
import Fade from 'react-reveal/Fade';

const About = () => {
  return (
    <section className="about">
      <h1>I Love 😃</h1>
      <Fade top cascade duration={3000}>
        <ul>
          <li>Javascript</li>
          <li>React</li>
          <li>Ruby</li>
          <li>Rails</li>
        </ul>
      </Fade>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
        tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
        veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
        commodo consequat. Duis aute irure dolor in reprehenderit in voluptate
        velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint
        occaecat cupidatat non proident, sunt in culpa qui officia deserunt
        mollit anim id est laborum. <br />
        <br />
        Maybe here i say my love for coding started through reversing habbo?
        slide in habbos ? continue story?
      </p>
    </section>
  );
};

export default About;
