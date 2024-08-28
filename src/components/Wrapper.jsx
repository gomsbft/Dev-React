import React from 'react';

const Wrapper = ({children}) => {

  const style = {
    border: '3px solid, red',
    padding: '20px'
  }

  return (
    <div>
      <div style={style}>
        {children}
      </div>
    </div>
  );
}; 


export default Wrapper;