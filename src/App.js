import logo from './logo.svg';
import './App.css';
import { useState } from 'react';
import ImgsComponent from './components/ImgsComponent';
import ClickOneComponent from './components/ClickOneComponent';
import Calculater from './components/Calculater';


function App() {

  const [total, setTotal] = useState("0")

  function changeNum(num) {
    setTotal()
  }

  function reset() {
    setTotal("0")
  }



  return (
    <>
      <h1>{total}</h1>
      <Calculater getNum={changeNum}/>
      <button onClick={reset}>리셋</button>
    </>
  );
}

export default App;
