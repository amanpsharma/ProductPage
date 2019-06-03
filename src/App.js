import React from 'react';
import './App.css';
import Firstsection from './components/First-Section/First_section';
import FirstCard from './components/cardsection/CardsectionF';
import Thirdsection from './components/Thirdsection/ThirdSection';
import Featureside from './components/featuresside/Featureside';
function App() {
  return (
    <div className="App">
      <Firstsection />
      <FirstCard />
      <Thirdsection />
      <Featureside />
    </div>
  );
}

export default App;
