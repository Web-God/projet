import './App.css';

import Leftside from './components/Leftside';
function App() {
  return (
    <div className="container">
      <Leftside />
      <div className="container__center">Center</div>
      <div className="container__rightside">Right</div>
    </div>
  );
}

export default App;
