import React from 'react';

const ListComponent = (props) => {
  const {nameList} = props
  return (
    <div>
      <ul><li>{nameList}</li></ul>
    </div>
  );
};

export default ListComponent;