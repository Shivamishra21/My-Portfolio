import TypewritterPortfolio from './components/Typewritter';
import './App.css';
import Carousal from './components/Carousal';
import Navbar from './components/Navbar';
import About from './components/About';
import background from "../src/assets/background4.jpg"
import { Parallax } from 'react-parallax';
import {Fade} from 'react-reveal'
import { Container } from 'react-bootstrap';


const App= ()=> {
  return (
    <div className="App">
      <Navbar/>
      <Carousal/>
      <TypewritterPortfolio/>
      <div>
        <Parallax blur={{min:0,max:3}}
        bgImage={background}
        bgImageALit=""
        strength={-200}>
          <div>
            <Container className="container-box rounded">
              <Fade duration={500}>
                <About/>
              </Fade>
            </Container>
          </div>
        </Parallax>
      </div>
     
      
    </div>
  );
}

export default App;
