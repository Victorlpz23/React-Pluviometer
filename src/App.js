import './App.css';
import CitySelector from './components/CitySelector';
import Pluviometer from './components/Pluviometer';

function App() {
  return (
    <div className="App">
    <Pluviometer />
    <CitySelector />
    </div>
  );
}

export default App;
