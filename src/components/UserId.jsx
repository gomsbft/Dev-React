import React from 'react';

const UserId = (props) => {

  function idGet(e) {
    props.idValue(e.target.value);
  }

  return (
    <div>
      <h1>ID: <input type='text' onChange={idGet} /></h1>
    </div>
  );
};

export default UserId;