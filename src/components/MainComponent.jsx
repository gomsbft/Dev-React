import React, { useContext } from 'react';
import { ThemeContext } from './context';

const MainComponent = () => {
  const {darkMode} = useContext(ThemeContext);

  const theme = {
    backgroundColor: darkMode ? "black" : "white",
    color: darkMode ? "white" : "black"
  }

  return (
    <div className='main' style={theme}>
      메인부분
    </div>
  );
};

export default MainComponent;