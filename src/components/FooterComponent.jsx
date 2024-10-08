import React, { useContext } from 'react';
import { ThemeContext } from './context';

const FooterComponent = () => {

  const {darkMode} = useContext(ThemeContext);

  const theme = {
    backgroundColor: darkMode ? "black" : "white",
    color: darkMode ? "white" : "black"
  }

  return (
    <div className='footer' style={theme}>
      footer부분
    </div>
  );
};

export default FooterComponent;