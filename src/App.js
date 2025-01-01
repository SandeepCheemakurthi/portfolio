import './App.scss';
import {Routes, Route, useLocation, Navigate } from 'react-router-dom';
import Home from './containers/home';
import About from './containers/about';
import Resume from './containers/resume';
import Skills from './containers/skills';
import Contact from './containers/contact';
import Otherprojects from './containers/other-projects';
import NavBar from './components/navBar';
import Particles, { initParticlesEngine } from "@tsparticles/react";
import { loadFull } from "tsparticles";  // Required for Particles
import particles from "./utils/particles";
import { useState, useEffect } from 'react';

function App() {
  const [ init, setInit ] = useState(false);

  // this should be run only once per application lifetime
  useEffect(() => {
      initParticlesEngine(async (engine) => {
          // you can initiate the tsParticles instance (engine) here, adding custom shapes or presets
          // this loads the tsparticles package bundle, it's the easiest method for getting everything ready
          // starting from v2 you can add only the features you need reducing the bundle size
          //await loadAll(engine);
          await loadFull(engine);
          // await loadSlim(engine);
          //await loadBasic(engine);
      }).then(() => {
          setInit(true);
      });
  }, []);

  const particlesLoadedFunction = (container) => {
      console.log(container);
  };

  const location = useLocation();
  console.log('location',location);
  
  const renderParticleJsInHomePage = location?.pathname === "/portfolio/home" || location?.pathname === "/";

  return (
    <div className="App">
      {/* Particles js background in homepage*/}
      {renderParticleJsInHomePage && 
        <Particles id="particles" particlesLoaded={particlesLoadedFunction} options={particles} />
      }
      {/* navbar */}
      <NavBar/>
      {/* main page content */}
      <div className='App__main-page-content'>
        <Routes>
          <Route path="*" element={<Navigate to="/portfolio/home" replace />} />
          <Route path="/portfolio" element={<Navigate to="/portfolio/home" replace />} />
          <Route path="/portfolio/home" element={<Home/>} />
          <Route path="/portfolio/above" element={<About/>} />
          <Route path="/portfolio/resume" element={<Resume/>} />
          <Route path="/portfolio/skills" element={<Skills/>} />
          <Route path="/portfolio/contact" element={<Contact/>} />
          {/* <Route path="/otherprojects" element={<Otherprojects/>} /> */}
        </Routes>
      </div>
    </div>
  );
}

export default App;
