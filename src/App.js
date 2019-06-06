import React from 'react';

import './App.css';
import Firstsection from './components/First-Section/First_section';
import FirstCard from './components/cardsection/CardsectionF';
import Thirdsection from './components/Thirdsection/ThirdSection';
import Featureside from './components/featuresside/Featureside';
import Backscreen from './components/screenshoot/Backscreen';
import Happyuser from './components/Haappyuser/Happyuser';
import Price from './components/Prices/Price';
import UseAll from './components/useAll/UseAll';
import Popular from './components/popular/Popular';
import Enjoy from './components/enjoy/Enjoy';
import Feedback from './components/feedback/Feedback';
import Recentblog from './components/recentblog/Recentblog';
import Map from './components/Map/Map';
import Form from './components/form/Forms';
function App() {
  return (
    <div className="App">
      <Firstsection />
      <FirstCard />
      <Thirdsection />
      <Featureside />
      <Backscreen />
      <Happyuser />
      <Price />
      <UseAll /> 
      <Popular/>
      <Enjoy/>
      <Feedback />
      <Recentblog />
      <Map />
      <Form />
    </div>
  );
}

export default App;
