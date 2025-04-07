import React, { useReducer } from 'react';

const init = 0;

function reducer(state, action) {
  switch (action.type) {
    case 'incre':
      return state + 1;
    case 'decre':
      return state - 1;
    case 'reset':
      return 0;
    default:
      return state;
  }
}

const Usereducer =React.memo(function Usereducer() {
  const [count, setCount] = useReducer(reducer, init);

  const hello = () =>{
    console.log(count)
  }

  return (
    <div>
      <h2 onClick={hello}>use reducer Counter: {count}</h2>
      <button onClick={() => setCount({ type: 'incre' })}>+</button>
      <button onClick={() => setCount({ type: 'decre' })}>-</button>
      <button onClick={() => setCount({ type: 'reset' })}>Reset</button>
    </div>
  );
})  

export default Usereducer;
