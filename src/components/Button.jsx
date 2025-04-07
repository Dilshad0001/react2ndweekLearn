import React from 'react'

function Button({handliClick,k}) {
    console.log("rendering bitton-",k);
    
  return (
    <div>
        <button onClick={handliClick}>{k}ufebh</button>
    </div>
  )
}

export default Button
