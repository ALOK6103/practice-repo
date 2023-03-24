import React, { useState } from 'react';
//import logo from './logo.svg';
import './App.css';
import Button from './Components/Button';
import Heading from './Components/Heading';



function App() {
  const [count,setCount]=useState<number>(0)
  return (
    <div className="App">
      <Heading >
        <h1>Counter</h1>
      </Heading>
      <h1>{count}</h1>
      <Button text="Reduce" handleClick={()=>{setCount(prev=>prev-1)}} />
      <Button text="Add" handleClick={()=>{setCount(prev=>prev+1)}} />
    </div>
  );
}

export default App;
