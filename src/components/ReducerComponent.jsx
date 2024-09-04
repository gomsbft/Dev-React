import React, { useReducer } from 'react';
import coffeeReducer from './reducerStarbucks';

const ReducerComponent = () => {

  const [total, dispatch] = useReducer(coffeeReducer, 0);

  return (
    <div>
      <header>
        <h1>스타벅스</h1>
      </header>
      <main>
        <h2>지불할 금액 : {total}</h2>
        <p>주문서 : {}</p>
        <div className='buttonForm'>
          <button onClick={() => dispatch({type: "아메리카노", price: 4500})} className='Americano'></button>
          <button onClick={() => dispatch({type: "라떼", price: 5000})} className='Latte'></button>
          <button onClick={() => dispatch({type: "모카", price: 5500})} className='Mocha'></button>
        </div>
      </main>
      
    </div>
  );
};

export default ReducerComponent;