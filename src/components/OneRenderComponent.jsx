import React, { useRef, useState } from 'react';

const OneRenderComponent = () => {

  const [submit, setSubmit] = useState("")
  const inputRef = useRef();

  function submitValue() {
    setSubmit(inputRef.current.value)
    console.log("랜더링 완료")
  } 

  return (
    <div>
      <input type='text' ref={inputRef}/>
      <button onClick={submitValue}>전송</button>
      <h1>전송된 단어: {submit} </h1>
    </div>
  );
};

export default OneRenderComponent;