import React, { useEffect, useRef } from 'react';

const UseRefDomComponent = () => {

  const inputRef = useRef();

  useEffect(() => {
    console.log(inputRef);

    inputRef.current.focus();
  }, [])
  return (
    <div>
      Id: <input type='text' ref= {inputRef} />
    </div>
  );
};

export default UseRefDomComponent;