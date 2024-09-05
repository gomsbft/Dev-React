import './App.css';
import { createContext, useCallback, useContext, useState } from 'react';
import { AllColor } from './components/context';
import HomeComponent from './components/HomeComponent';
import ColorProviderComponent from './components/ColorProviderComponent';

// const MyContext = createContext();


function App() {


return (
    <>
      <AllColor.Provider>
        <ColorProviderComponent />
      </AllColor.Provider>
    </>
  );
}

export default App;
