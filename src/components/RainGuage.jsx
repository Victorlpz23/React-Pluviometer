import React from 'react'

function RainGuage({ litres }) {
  if (litres === undefined) {
    return <div className='p-3'>Loading...</div>
  }

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
        <div className='progress-bar' style={{ width: `${litres}%` }}></div>
      </div>
    </div>
  );
}

export default RainGuage