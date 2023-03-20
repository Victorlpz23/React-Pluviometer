import './App.css';
import CitySelector from './components/CitySelector';
import Pluviometer from './components/Pluviometer';
import cities from "./data/cities.json"

function App() {
  return (
    <div className="App">
      <Pluviometer />
      <CitySelector cities={cities} selectedCity="Madrid"/>
    </div>
  );
}

export default App;
