import React from 'react'

function Usememo_sample({value}) {
    console.log("usememo renderd");
    
  return (
    <div>
      <h1>usememooo: {value.num}</h1>
    </div>
  )
}

export default Usememo_sample
