import React, { useState } from 'react';

const BuyComponent = (props) => {

  const { pList } = props;

  const [total, setTotal] = useState(0);

  function changeHD(checkbox) {
    if(checkbox.checked) {
      // setTotal(total + parseInt(checkbox.value))

      //setTotal((변경전 total값) => {하고싶은 내용})
      setTotal((prevState) => prevState + parseInt(checkbox.value))
    }else {
      // setTotal(total - parseInt(checkbox.value))
      setTotal((prevState) => prevState - parseInt(checkbox.value))
    }
  }

  return (
    <div>
      {pList.map((itme) => (
        <label key={itme.name}>
          <input 
            type='checkbox'
            value={itme.price}
            onChange={(e) => changeHD(e.target)} />
            {itme.name}
        </label>
      ))}
      <p>합계: {total}</p>
    </div>
  );
};

export default BuyComponent;