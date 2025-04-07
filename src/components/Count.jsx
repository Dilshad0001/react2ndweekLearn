import React from 'react'

function Count({text,count}) {
    console.log(`rendering counter ${text}`);
    
  return (
    <div>
      <h1>{text}={count} {}</h1>
    </div>
  )
}

export default React.memo(Count)



// import React from 'react'

// function Count({ text, count, extra }) {
//     console.log(`rendering counter ${text}`);

//     return (
//         <div>
//             <h1>{text} = {count}</h1>
//             {extra && <p>{extra.msg}</p>}
//         </div>
//     )
// }

// export default React.memo(Count)


