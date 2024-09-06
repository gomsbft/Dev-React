import './App.css';
import { createContext, useCallback, useContext, useState } from 'react';
import { AllColor } from './components/context';
import ColorProviderComponent from './components/ColorProviderComponent';
import Counter from './features/counter/Counter';
import SeverComponent from './components/SeverComponent';
import TodoFetchingComponent from './components/TodoFetchingComponent';
import TodoTitieComponent from './components/TodoTitieComponent';
import TodoUserComponent from './components/TodoUserComponent';

// const MyContext = createContext();


function App() {


return (
    <>
      <TodoUserComponent />
    </>
  );
}

export default App;
