import './App.css';
import { createContext, useCallback, useContext, useState } from 'react';
import { AllColor } from './components/context';
import ColorProviderComponent from './components/ColorProviderComponent';
import Counter from './features/counter/Counter';

// const MyContext = createContext();


function App() {


return (
    <>
      <Counter />
    </>
  );
}

export default App;
