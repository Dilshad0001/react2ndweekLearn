// import React from 'react'

// function Click() {
//     const handleclick=()=>{
//         console.log("clicked");
        
//     }
//   return (
//     <div>
//       <h1>handleclick</h1>
//     </div>
//   )
// }

// export default Click


import React from 'react'

function Click({ handleClick }) {
  console.log("👶 Click component rendering");
  return (
    <div>
      <h1>Click Me:</h1>
      <button onClick={handleClick}>Click</button>
    </div>
  );
}

export default React.memo(Click);
