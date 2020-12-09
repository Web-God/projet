import './App.css';
import Center from './components/Center';
import Leftside from './components/Leftside';
import Rightside from './components/Rightside';
function App() {
  return (
    <div className="container">
      <Leftside />
      <Center />
      <Rightside />
    </div>
  );
}

export default App;
