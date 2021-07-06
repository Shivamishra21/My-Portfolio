import TypewritterPortfolio from "./components/Typewritter";
import "./App.css";
import Carousal from "./components/Carousal";
import Navbar from "./components/Navbar";
import About from "./components/About";
import background from "../src/assets/background4.jpg";
import { Parallax } from "react-parallax";
import { Fade, Slide } from "react-reveal";
import { Container } from "react-bootstrap";
import Skills from "./components/Skills";
import Contact from "./components/Contact";
import Footer from './components/Footer';
import { Project } from "./components/Project";
import Particles from 'react-particles-js';
import { particlesOptions } from "./components/Particle";

const App = () => {
  return (
    <div className="App" style={{position:"relative"}} >
      <Navbar />
      <Carousal />
      <TypewritterPortfolio />
       <Particles
        className="particles particles-box"
        params={particlesOptions}
      />
      <div>
        <Parallax
          blur={{ min: 0, max: 3 }}
          bgImage={background}
          bgImageALit=""
          strength={-200}
        >
          <div>
            <Container className="container-box rounded">
              <Fade duration={500}>
                <About />
              </Fade>
            </Container>
          </div>
        </Parallax>
      </div>
      <Container className="container-box rounded">
        <Slide bottom duration={500}>
          <hr />
          <Skills />
        </Slide>
      </Container>

     
      <Container className="container-box rounded">
        <Slide bottom duration={500}>
          <hr />
          <Project/>
        </Slide>
      </Container>
      <Container className="container-box rounded">
        <Slide bottom duration={500}>
          <hr />
          <Contact/>
        </Slide>
      </Container>
    <hr/>
    <Footer/>
    </div>
  );
};

export default App;
