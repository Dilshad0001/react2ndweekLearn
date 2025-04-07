import React from 'react'
import { useNavigate } from 'react-router-dom'

function Registration() {
    const nav=useNavigate()
    const handlesubmit=()=>{nav("/login")}
  return (
    <div>
      <h1>registration page</h1>
      <button onClick={handlesubmit}>Register</button>
    </div>
  )
}

export default Registration
