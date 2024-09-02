import React from 'react';

const Calculater = (props) => {

  const numList = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"];

  const {getNum} = props

  function pushNum(e) {
    getNum(e.target.value)
  }

  return (
    <div>
      {numList.map((num) => (
        <input type='button' value={num} onClick={pushNum}/>
      ))}
    </div>
  );
};

export default Calculater;