import React, { useContext } from 'react'
import { userContext } from './Context'

function Component_1() {
    const val= useContext(userContext)
  return (
    <div>
      <h1>context component **: {val}</h1>
    </div>
  )
}

export default Component_1
