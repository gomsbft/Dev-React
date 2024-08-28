import React from 'react';
import PropTypes from 'prop-types'

const ProTypesComponent = ({item, price}) => {
  return (
    <div>
      아이템 : {item}
      <br />
      가격 : {price}
    </div>
  );
};

ProTypesComponent.propTypes = {
  item: PropTypes.string,
  price: PropTypes.number.isRequired
}

export default ProTypesComponent;