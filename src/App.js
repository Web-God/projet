import { useState } from 'react';
import './App.css';
import jim from './components/President';
import Center from './components/Center';
import Leftside from './components/Leftside';
import Rightside from './components/Rightside';
import medals from './components/Medals';
// import shuffle from './components/Random'

// https://www.code-boost.com/react-memory-game/#memory-game-logic
function App() {
  // const [allCardsArrayofObjects, setAllCardsArrayofObjects] = useState(shuffledCards);
  const [pict, setPict] = useState()
  // random number to display picts of Presidents
  let pictPres = Math.floor(Math.random() * jim.length);
  return (
    <div className="container">
      <Leftside name={jim[pictPres].name} indice={jim[pictPres].indice}/>
      <Center pict={jim[pictPres].src} name={jim[pictPres].name} mandat={jim[pictPres].mandat} />
      <Rightside indice={jim[pictPres].indice.tip2} />
    </div>
  );
}

export default App;
