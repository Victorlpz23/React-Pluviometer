import React from 'react'

function CitySelector({ cities, selectedCity, onChangeCity }) {
  return (
    <select className='form-select'>
      {cities.map((city) =>
        <option selected>{city}</option>
      )}
    </select>
  )
}

export default CitySelector