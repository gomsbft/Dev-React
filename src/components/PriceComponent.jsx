import React from 'react';

const PriceComponent = (props) => {
  const {price} = props
  return (
    <div>
      <p>가격: {price}</p>
    </div>
  );
};

export default PriceComponent;