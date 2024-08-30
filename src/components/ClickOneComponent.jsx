import React, { useState } from 'react';

const ClickOneComponent = (props) => {

  const {getNum} = props;

  const [num, setNum] = useState(0);

  function plusNum(e) {
    setNum(num + 1)
    getNum()
  }



  return (
    <div>
      <h3>{num}</h3>
      <button onClick={plusNum}>클릭</button>
    </div>
  );
};

export default ClickOneComponent;