import './App.css';
import Intro from './components/intro/intro';
import SEM from './components/SEM/sem';
import DSCimg from './components/DSC/dsc';
import Opticalimg from './components/Optical/optical';
import TGAimg from './components/TGA/tga';

function App() {
  return (
    <div className="App">
         <Intro/>
         <div className='description'>Current webpage details with various characterization results of Beta Titanium alloy that are optimized by the author.
                                    These all put up to together informs us about the transition region and the morphology of the alloy.
          </div>
         <div><SEM/></div>
         <div><DSCimg/></div>
         <div><Opticalimg/></div>
         <div><TGAimg/></div>
    </div>
  );
}

export default App;
