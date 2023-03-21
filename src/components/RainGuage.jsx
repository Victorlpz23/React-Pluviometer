import React from 'react'

function RainGuage({ litres }) {
  return (
    <div className='m-3'>
      <h4 className='text-center'>{litres} Litres</h4>
      <div
        className='progress'
        role="progressbar"
        aria-label="Basic example"
        aria-valuemin="0"
        aria-valuemax="100"
      >
        <div className='progress-bar w-75'></div>
      </div>
    </div>
  );
}

export default RainGuage