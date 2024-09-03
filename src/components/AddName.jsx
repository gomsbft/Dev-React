import React, { useState, useEffect } from 'react';

const AddName = () => {
  const [names, setNames] = useState([]);
  const [input, setInput] = useState('');


  function InputChange(e) {
    setInput(e.target.value);
  }

  function uploadInput() {
    setNames((prevState) => [input, ...prevState])
  }

  useEffect(() => {
    console.log("랜더링 완료");
    console.log({names});
  }, [names])


  return (
    <div>
      <input type='text' onChange={InputChange} />
      <button onClick={uploadInput}>추가</button>

      <div>
        <ul>
        { names.map((name, idx) => (<li><p key={idx}>{name}</p></li>))}
        </ul>
      </div>
    </div>
  );
};

export default AddName;