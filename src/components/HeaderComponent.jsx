import React, { useContext } from 'react';
import { ThemeContext } from './context';

const HeaderComponent = () => {
  const {darkMode, setDarkMode} = useContext(ThemeContext);

  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
  }

  const theme = {
    backgroundColor: darkMode ? "black" : "white",
    color: darkMode ? "white" : "black"
  }


  return (
    <div className='header' style={theme}>
      header 부분
      {
        darkMode ? (
          <button className='toggleBtn' onClick={toggleDarkMode}>
            ...
          </button>)
          : (<button className='toggleBtn' onClick={toggleDarkMode}>
            !!!
          </button>)
      }
    </div>
  );
};

export default HeaderComponent;