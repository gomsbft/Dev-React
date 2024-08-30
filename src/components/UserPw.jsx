import React from 'react';

const UserPw = (props) => {

  function pwGet(e) {
    props.pwValue(e.target.value);
  }
  return (
    <div>
      <h1>PW: <input type='text' onChange={pwGet} /></h1>
    </div>
  );
};

export default UserPw;