import React, { createContext } from 'react'
import Component_1 from './Component_1'
import Component_2 from './Component_2'


 export const userContext=createContext()

function Context() {
   const val=15
  return (
    <div>
      <userContext.Provider value={val}>
      <Component_1/>
      <Component_2/>
      </userContext.Provider>
      <h1>contexxxt</h1>
      
    </div>
  )
}

export default Context
 