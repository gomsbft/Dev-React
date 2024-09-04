import React, { useState } from 'react';
import { useReducer } from 'react';
import atm from './atm.js';
import './AtmComponent.scss';

const AtmComponent = () => {

  const [money , dispatch] = useReducer(atm, 0)

  const [num, setNum] = useState(0)

  function choiceNum(e) {
    setNum(parseInt(e.target.value))
  }

  return (
    <div className='wrap'>
      <h1 className='mainText'>금액을 입력하세요</h1>
      <input type='number' onChange={choiceNum} step="1000"/>
      <h2>입금 또는 출금 버튼을 클릭하세요</h2>
      <div className='btnWrap'>
        <button className='plus' onClick={() => dispatch({type: "입금", price: parseInt(num)})}>입금</button>
        <button className='mi' onClick={() => dispatch({type: "출금", price: parseInt(num)})}>출금</button>
      </div>
      <h2>현재 잔액 : {money}</h2>
    </div>
  );
};

export default AtmComponent;