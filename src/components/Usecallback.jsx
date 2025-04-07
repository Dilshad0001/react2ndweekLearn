// import React, { useCallback } from 'react'

// function Usecallback() {
//     const test=useCallback(()=>{
//         console.log("hello im ")
//     },[])
//   return (
//     <div>
//       <button onClick={test}> sett</button>

//     </div>
//   )
// }

// export default Usecallback

// -------------------------

// import React from 'react';

// function Usecallback() {
//   const greet = () => {
//     console.log("Hello from Parent");
//   };

//   return <Child greet={greet} />;
// }

// const Child = React.memo(({ greet }) => {
//   console.log("Child rendered");
//   return <button onClick={greet}>Click Me</button>;
// });

// export default Usecallback;



// -------------------------------



// import React, { useCallback } from 'react';

// function Usecallback() {
//   const greet = useCallback(() => {
//     console.log("Hello from Parent");
//   }, []); // memoized function

//   return <Child greet={greet} />;
// }

// const Child = React.memo(({ greet }) => {
//   console.log("Child rendered");
//   return <button onClick={greet}>Click Me  onn</button>;
// });

// export default Usecallback;


// -------------------

function Usecallback() {
    const [count, setCount] = useState(0);
  
    const showMessage = () => {
      console.log('Hello from parent');
    };
  
    return (
      <div>
        <Child onClick={showMessage} />
        <button onClick={() => setCount(count + 1)}>+</button>
      </div>
    );
  }
  
  const Child = React.memo(({ onClick }) => {
    console.log("Child rendered");
    return <button onClick={onClick}>Click me</button>;
  });
  