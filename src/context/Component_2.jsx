import React, { useContext } from 'react'
import { userContext } from './Context'

function Component_2() {
    const val=useContext(userContext)
  return (
    <div>
      <h1>component 2: {val}</h1>
    </div>
  )
}

export default Component_2
