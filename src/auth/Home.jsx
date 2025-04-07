import React from 'react'
import { useNavigate } from 'react-router-dom'

function Home() {
    const nav=useNavigate()
    const toregister=()=>{nav("/")}
  return (
    <div>
      <h1>home page</h1>
      <button onClick={toregister}>To registration page</button>
    </div>
  )
}

export default Home
