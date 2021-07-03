import TypewritterPortfolio from './components/Typewritter';
import './App.css';
import Carousal from './components/Carousal';
import Navbar from './components/Navbar';
const App= ()=> {
  return (
    <div className="App">
      <Navbar/>
      <Carousal/>
      <TypewritterPortfolio/>
    </div>
  );
}

export default App;
