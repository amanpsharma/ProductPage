import React from 'react';
import './App.css';
import Firstsection from './components/First-Section/First_section';
import FirstCard from './components/cardsection/CardsectionF';
import Thirdsection from './components/Thirdsection/ThirdSection';
import Featureside from './components/featuresside/Featureside';
import Backscreen from './components/screenshoot/Backscreen';
import Happyuser from './components/Haappyuser/Happyuser';
function App() {
  return (
    <div className="App">
      <Firstsection />
      <FirstCard />
      <Thirdsection />
      <Featureside />
      <Backscreen />
      <Happyuser />
    </div>
  );
}

export default App;
