import React from 'react'
import { useNavigate } from 'react-router-dom'

function Login() {
    const nav=useNavigate()
    const handlilogin=()=>{nav("/home")}
  return (
    <div>
      <h1>login page</h1>
      <button onClick={handlilogin}>login</button>
    </div>
  )
}

export default Login
