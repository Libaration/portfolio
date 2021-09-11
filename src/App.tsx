import React from 'react';
import './App.css';
import Landing from './components/Landing';
import Details from './components/Details';
import NavBar from './components/NavBar';
import Projects from './components/Projects';
// @ts-ignore
import Fade from 'react-reveal/Fade';

function App() {
  const details = React.createRef<HTMLDivElement>();
  const landing = React.createRef<HTMLDivElement>();
  const projects = React.createRef<HTMLDivElement>();
  console.log(landing);
  console.log(projects);
  return (
    <div className="App">
      <Landing ref={landing}>
        <NavBar landing={landing} details={details} projects={projects} />
      </Landing>
      <Fade left>
        <Details ref={details} />
      </Fade>
      <Projects ref={projects} />
    </div>
  );
}

export default App;
