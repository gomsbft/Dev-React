import React, { memo } from 'react';

const ChlidConsoleComponent = (props) => {

  const {update} = props;

  console.log("child 랜더링");

  return (
    <div>
     
    </div>
  );
};

export default memo(ChlidConsoleComponent);