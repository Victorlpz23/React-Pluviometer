import './App.css';
import CitySelector from './components/CitySelector';
import DateSelector from './components/DateSelector';
import Pluviometer from './components/Pluviometer';
import cities from "./data/cities.json"

function App() {
  return (
    <div className="App">
      <DateSelector selectedDate='Month' />
      <Pluviometer />
      <CitySelector cities={cities} selectedCity="Madrid"/>
    </div>
  );
}

export default App;
