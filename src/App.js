import logo from './logo.svg';
import './App.css';
import { useState } from 'react';
import ImgsComponent from './components/ImgsComponent';
import ClickOneComponent from './components/ClickOneComponent';


function App() {

  const [total, setTotal] = useState(0)

  function clickNum() {
    setTotal((prev) => prev + 1)
  }

  return (
    <>
      <h1>Total Count : {total}</h1>
      <ClickOneComponent getNum={clickNum}/>
      <ClickOneComponent getNum={clickNum}/>
    </>
  );
}

export default App;
