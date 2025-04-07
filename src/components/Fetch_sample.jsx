import React, { useEffect, useState } from 'react'

function Fetch_sample() {

  const [data,setData]=useState([])
    useEffect(()=>{
        fetch("http://localhost:3001/posts")
        .then(res=>res.json())
        .then(data=>setData(data))

        .catch(error=>console.error("error message"))
    },[])
  return (
    <div>
      <h1>fetching </h1>
      <ul>
        {data.map((name,index)=>(
          <li key={index}>{name.title}</li>
        ))}
      </ul>
    </div>
  )
}

export default Fetch_sample


