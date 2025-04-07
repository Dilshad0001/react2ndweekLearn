import React, {useMemo, useState } from 'react'
import Title from './Title'
import Count from './Count'
import Click from './Click'
import { useCallback } from 'react'
import Usememo_sample from './Usememo_sample'

function Parent() {
    const [count1,setCount1]=useState(0)
    const [count2,setCount2]=useState(10)

    const incri_counter_1=()=>{
        setCount1(count1+1)
    }
    const incri_counter_2=()=>{
        setCount2(count2+1)
    }
    const m=useMemo(()=>({num:1001}),[])
    // const m={num:1001}
    

  // const handleClick=()=>{
  //   console.log("clicked");
  // }

  const handleClick=useCallback(()=>{
    console.log("clicked")} ,[])
    
  
  return (
    <div>
      <Title/>
      <Count text="counter 1" count={count1}/>
      <button onClick={incri_counter_1}>incri -counter-1</button>
      <Click handleClick={handleClick}/>
      <Usememo_sample value={m}/>
    </div>
  )
}

export default Parent


