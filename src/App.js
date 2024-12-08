import './App.css';
import {Routes, Route, useLocation } from 'react-router-dom';
import Home from './containers/home';
import About from './containers/about';
import Resume from './containers/resume';
import Portfolio from './containers/portfolio';
import Contact from './containers/contact';
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
  
  const renderParticleJsInHomePage = location?.pathname === "/";

  return (
    <div className="App">
      {/* Particles js background in homepage*/}
      {renderParticleJsInHomePage && 
        <Particles id="particles" particlesLoaded={particlesLoadedFunction} options={particles} />
      }
      {/* navbar */}
      <NavBar/>
      {/* main page content */}
      <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="/about" element={<About/>} />
        <Route path="/resume" element={<Resume/>} />
        <Route path="/portfolio" element={<Portfolio/>} />
        <Route path="/contact" element={<Contact/>} />
      </Routes>
    </div>
  );
}

export default App;
