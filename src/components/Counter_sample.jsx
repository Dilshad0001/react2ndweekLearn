import React from 'react'
import useCounter from '../hooks/useCounter'

function Counter_sample() {
    const {count,incri,decri,reset}=useCounter(0)
  return (
    <div>
      <h1>custom hook count: {count}</h1>
      <button onClick={incri}>add</button>
      <button onClick={decri}>sub</button>
      <button onClick={reset}>reset</button>
    </div>
  )
}

export default Counter_sample
