import React from 'react';

const BoolComponent = ({study}) => {

  const message = study ? "공부" : "취침"

  return (
    <div>
      {message}
    </div>
  );
};

export default BoolComponent;