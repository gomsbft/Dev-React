import React, { useEffect, useState } from 'react';

const UseEffecComponent = () => {

  const [count, setCount] = useState(0);

  const [text, setText] = useState("");

  function plusNum() {
    setCount(count + 1);
  }

  function changeText(e) {
    setText(e.target.value)
  }

  useEffect(() => {
    console.log("count 값 변경");
  }, [count])

  useEffect(() => {
    console.log("text 값 변경")
  }, [text])

  return (
    <div>
      <h1>{count}</h1>
      <button onClick={plusNum}>+1</button>

      <hr />

      <input type='text' onChange={changeText} />
      <h1>{text}</h1>
    </div>
  );
};

export default UseEffecComponent;