import React from 'react'
import { BrowserRouter,Routes,Route } from 'react-router-dom'
import Home from './Home'
import Registration from './Registration'
import Login from './Login'


function Parent_router() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
            <Route path='/home' element={<Home/>}/>
            <Route path='/' element={<Registration/>}/>
            <Route path='/login' element={<Login/>}/>

        </Routes>
      </BrowserRouter>
    </div>
  )
}

export default Parent_router
