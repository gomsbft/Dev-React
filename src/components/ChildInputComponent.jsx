import React from 'react';

const ChildInputComponent = (props) => {


  function updata(e) {
    props.data(e.target.value)
  }

  return (
    <div>
      입력: <input type="text" onChange={updata}></input>
    </div>
  );
};

export default ChildInputComponent;