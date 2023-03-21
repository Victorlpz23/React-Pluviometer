import './App.css';
import CitySelector from './components/CitySelector';
import DateSelector from './components/DateSelector';
import Pluviometer from './components/Pluviometer';
import RainGuage from './components/RainGuage';
import cities from "./data/cities.json"

function App() {
  return (
    <div className="App">
      <CitySelector cities={cities} selectedCity="Madrid"/>
      <Pluviometer />
      <RainGuage />
      <DateSelector selectedDate='Month' />
    </div>
  );
}

export default App;
