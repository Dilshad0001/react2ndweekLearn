import React, { use, useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'

function Detail() {
    const {id}=useParams();
    const [post,setPost]=useState([])

  useEffect(()=>{
    fetch(`https://jsonplaceholder.typicode.com/posts/${id}`)
    .then((res)=>res.json())
    .then((data)=>setPost(data))
  },[]);  
  return (
    <div>
      <h1 style={{color:"red"}}>{post.title}</h1>
      <p>{post.body}</p>
    </div>
  )
}

export default Detail
