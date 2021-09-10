import React from 'react';
import './App.css';
import About from './components/About';
import Pixi from './components/Pixi';
// @ts-ignore
import Fade from 'react-reveal/Fade';

function App() {
  return (
    <div className="App">
      <div className="header">
        <h3>Hello, I'm Cristian Deleon</h3>

        {/* <Pixi /> */}
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

      <About />
      <Fade left>
        <div className="projects">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Laoreet id
          donec ultrices tincidunt arcu non. Pharetra massa massa ultricies mi
          quis hendrerit. Platea dictumst vestibulum rhoncus est pellentesque
          elit. Arcu non odio euismod lacinia. Arcu vitae elementum curabitur
          vitae nunc sed velit dignissim. Tortor pretium viverra suspendisse
          potenti nullam ac. Ut consequat semper viverra nam libero justo
          laoreet sit. Tristique senectus et netus et malesuada fames ac turpis
          egestas. A pellentesque sit amet porttitor eget dolor morbi non arcu.
          Lectus urna duis convallis convallis tellus. Tortor pretium viverra
          suspendisse potenti nullam ac. Ultrices eros in cursus turpis massa
          tincidunt dui. Dictum varius duis at consectetur lorem donec massa
          sapien faucibus. Dui sapien eget mi proin sed libero enim. At erat
          pellentesque adipiscing commodo elit at imperdiet dui. Gravida in
        </div>
      </Fade>
    </div>
  );
}

export default App;
