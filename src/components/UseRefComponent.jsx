import React, {useRef, useState} from 'react';

const UseRefComponent = () => {

  const [states, setStates] = useState("");

  const ref = useRef(0);

  let count = 0;
  
  function letUp() {
    count = count + 1
    console.log(count);
  }

  function refUp() {
    ref.current = ref.current + 1;
    console.log(ref.current);
  }

 function render() {
  setStates("rendering")
 }

  return (
    <div>
      <h1>Ref 값: {ref.current}</h1>
      <h1>변수 값: {count}</h1>
      <button onClick={refUp}>Ref</button>
      <button onClick={letUp}>let</button>
      <button onClick={render}>Rendering</button>
    </div>
  );
};

export default UseRefComponent;