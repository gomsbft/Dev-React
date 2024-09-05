import React, { useContext } from 'react';
import { AllColorContext } from './context';

const ColorBoxComponent = () => {

  const value = useContext(AllColorContext);

  const boxStyle = {
    background: value,
    height: "100vh"
  }

  return <div style={boxStyle}></div>
};

export default ColorBoxComponent;