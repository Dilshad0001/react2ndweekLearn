import React from 'react'
import Title from './Title'
import { BrowserRouter,Routes,Route } from 'react-router-dom'
import Detail from './Detail'

function Dynamic_routing() {
  return (
    <div>
        <BrowserRouter>
           <Routes>
              <Route path='/titles' element={<Title/>}/>
              <Route path='/detail/:id' element={<Detail/>}/>
           </Routes>
        </BrowserRouter>

      

    </div>
  )
}

export default Dynamic_routing
