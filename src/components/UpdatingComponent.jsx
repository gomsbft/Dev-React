import React, { useEffect, useState } from 'react';

const UpdatingComponent = () => {

  const [count, setCount] = useState(0);

  function increment() {
    console.log("Befor", count);
    setCount(count + 1);
  }

  useEffect(() => {
    console.log("After", count)
  }, [count])

  return (
    <div>
      <p>Count: {count}</p>
      <button onClick={increment}>Increment</button>
    </div>
  );
};

export default UpdatingComponent;