// import React, { useEffect } from 'react'
// from axios import 'axios'

// function Axios_post() {

//     useEffect(()=>{
//         axios.post("http://localhost:3001/posts", {
//             title: "New Post Title"
//           })
//           .then(response => {
//             console.log("Post added:", response.data);
//           })
//           .catch(error => console.error("Error adding:", error));

//     })
    
//   return (
//     <div>
//       <h1>axios post  iejcefev</h1>
//       <ul>
//         {data.map((item,index)=>(
//             <li key={index}>{item.title}</li>
//         ))}
//       </ul>
//     </div>
//   )
// }

// export default Axios_post


import React, { useEffect, useState } from 'react';
import axios from 'axios';

function Axios_post() {
  const [data, setData] = useState([]);

  useEffect(() => {
    axios.post("http://localhost:3001/posts", {
      title: "New Post Title"
    })
    .catch(error => console.error("Error adding:", error));
  }, []); 

  return (
    <div>
      <h1>Axios Post Example</h1>
      <button>add</button>

    </div>
  );
}

export default Axios_post;
