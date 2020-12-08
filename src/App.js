import './App.css';

import Leftside from './components/Leftside';
import Rightside from './components/Rightside';
function App() {
  return (
    <div className="container">
      <Leftside />
      <div className="container__center">Center</div>
      <Rightside />
    </div>
  );
}

export default App;
