import axios from 'axios'



import React, { useEffect, useState } from 'react'

function Axios_fetch() {

    const [data,setData]=useState([])

    useEffect(()=>{
      axios.get("http://localhost:3001/posts")
        .then(response => setData(response.data))
        .catch(error => console.error("error mesage",error));
    },[])

    console.log(data);
    

  return (
    <div>
      <h1>axios fetchiejcefev</h1>
      <ul>
        {data.map((item,index)=>(
            <li key={index}>{item.title}</li>
        ))}
      </ul>
    </div>
  )
}

export default Axios_fetch
