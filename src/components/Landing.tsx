import React, { useRef, forwardRef } from 'react';
import code from '../assets/images/code.png';
import scroll from '../assets/images/scroll.png';
import Pixi from './Pixi.js';
// @ts-ignore
import Fade from 'react-reveal/Fade';
// @ts-ignore
import Bounce from 'react-reveal/Bounce';
interface IProps {
  children: React.ReactNode;
}
//why are these backwards? htmldiv type then prop type but arguments are props then refs. this had me stuck for a minute
const Landing = forwardRef<HTMLDivElement, IProps>((props, ref) => {
  return (
    <>
      <div className="header" ref={ref}>
        <h3>Hello, I'm Cristian Deleon</h3>

        <Pixi />
      </div>
      <div className="custom-shape-divider-bottom-1631174196">
        <svg
          data-name="Layer 1"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 1200 120"
          preserveAspectRatio="none"
        >
          <path
            d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V0H0V27.35A600.21,600.21,0,0,0,321.39,56.44Z"
            className="shape-fill"
          ></path>
        </svg>
      </div>
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
          {props.children}
          <Bounce bottom>
            <div className="scroll">
              <img src={scroll} alt="scroll down icon" />
            </div>
          </Bounce>
        </div>
      </section>
    </>
  );
});

export default Landing;
