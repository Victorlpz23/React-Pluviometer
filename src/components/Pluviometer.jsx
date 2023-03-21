import React, { useEffect, useState } from 'react'
import CitySelector from './CitySelector';
import cities from "./../data/cities.json"
import RainGuage from './RainGuage';
import DateSelector from './DateSelector';
import { fetchData } from '../services/fetch-data';

function Pluviometer() {
  const [city, setCity] = useState("Madrid");
  const [date, setDate] = useState("Today");
  const [litres, setLitres] = useState();

  useEffect(() => {
    setLitres(undefined)

    fetchData(city, date).then((litres) => setLitres(litres))
  }, [date, city]);

  const handleChangeCity = (city) => {
    setCity(city)
  };

  const handleChangeDate = (date) => {
    setDate(date)
  };


  return (
    <main>
      <CitySelector
        cities={cities}
        selectedCity={city}
        onChangeCity={handleChangeCity}
      />

      <RainGuage
        litres={litres}
      />

      <DateSelector
        selectedDate={date}
        onDateChange={handleChangeDate}

      />
    </main>
  );
}

export default Pluviometer