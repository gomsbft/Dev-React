import React, { useState, useRef } from 'react';

const AgeTextComponent = () => {

  const nameRef = useRef();
  const ageRef = useRef();

  function changeName(e) {
    nameRef.current = e.target.value 
  }

  function changeAge(e) {
    ageRef.current = e.target.value
  }


  return (
    <div>
      <h1>input 태그 value 값 지정</h1>
      이름 : <input type='text' value= {nameRef.current} onChange={changeName}/>
      나이 : <input type='number' value= {ageRef.current} onChange={changeAge}/>
    </div>
  );
};

export default AgeTextComponent;