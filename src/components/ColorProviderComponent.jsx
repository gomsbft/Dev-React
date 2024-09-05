import React from 'react';
import { useContext } from 'react';
import ColorBoxComponent from './ColorBoxComponent';
import { AllColorContext } from './context';

const ColorProviderComponent = () => {

  const color = prompt("원하는 색상 입력");
  console.log(color)



  return (
    <div>
      <AllColorContext.Provider value={color}>
       <ColorBoxComponent />
      </AllColorContext.Provider>
    </div>
  );
};

export default ColorProviderComponent;