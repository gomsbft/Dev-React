import React, {useEffect, useState} from 'react';

const RenderCount = () => {

  const [count, setCount] = useState(0);
  const [rederCount, setRenderCount] = useState(0);

    useEffect(() => {
      setRenderCount(rederCount + 1);
      console.log("랜더링 완료");
    }, [count]);

  return (
    <div>
      <h1>Count : {count}</h1>
      <h1>랜더링 횟수 : {rederCount - 1}</h1>
      <button onClick={() => setCount(count + 1)}>클릭</button>
    </div>
  );
};

export default RenderCount;