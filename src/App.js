import { useState } from 'react';
import './App.css';
import jim from './components/President';
import Center from './components/Center';
import Leftside from './components/Leftside';
import Rightside from './components/Rightside';
import medals from './components/Medals';
import shuffle from './components/Random'

function App() {
  const [pict, setPict] = useState()
  // random number to display picts of Presidents
  let pictPres = Math.floor(Math.random() * jim.length);
  function startGame() {
    // https://scotch.io/tutorials/how-to-build-a-memory-matching-game-in-javascript#toc-1-shuffing-cards
    shuffle(medals);
  }
  return (
    <div className="container">
      <Leftside name={jim[pictPres].name} indice={jim[pictPres].indice}/>
      <Center pict={jim[pictPres].src} name={jim[pictPres].name} mandat={jim[pictPres].mandat} />
      <Rightside indice={jim[pictPres].indice.tip2} />
    </div>
  );
}

export default App;
