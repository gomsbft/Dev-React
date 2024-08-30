import React from 'react';

const TodoComponent = (props) => {
  const {taskName} = props
  return (
    <div>
      {taskName}
    </div>
  );
};

export default TodoComponent;