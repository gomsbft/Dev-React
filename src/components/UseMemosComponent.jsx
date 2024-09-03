import React, { useMemo, useState } from 'react';

const UseMemosComponent = () => {

  const [hardNum, setHardNum] = useState(1);
  const [easyNum, setEasyNum] = useState(1);

  const hardSum = useMemo(() => hardCalcul(hardNum), [hardNum]);
  const easySum = easyCalcul(easyNum);

  function hardCalcul(number) {
    for(let i = 0; i < 10; i++) {
      console.log(i);
    }

    return number + 10000;
  }

  function easyCalcul(number) {
    console.log("쉬운 계산");
    return number + 1;
  }

  return (
    <div>
      <h1>어려운계산기</h1>
      <input type='number' value={hardNum} onChange={(e) => setHardNum(parseInt(e.target.value))} />
      <span> + 10000 = {hardSum} </span>
      <h1>쉬운 계산기</h1>
      <input type='number' value={easyNum} onChange={(e) => setEasyNum(parseInt(e.target.value))} />
      <span> + 1 = {easySum}</span>
      
    </div>
  );
};

export default UseMemosComponent;