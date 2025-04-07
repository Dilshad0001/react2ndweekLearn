import React from 'react'


function Component_1() {

  const name="dilshad" 

  return (
    <div>
      <h1>1 st component: {name}</h1>
      <Component_2 name={name}/>
    </div>
  )
}

function Component_2({name}){
    return(
        <div>
            <h1>2 nd component</h1>
            <Component_3 name={name}/>
        </div>
    )
}

function Component_3({name}){
    return(
        <div>
            <h1>3rd component :{name}</h1>
        </div>
    )
}

export default Component_1
