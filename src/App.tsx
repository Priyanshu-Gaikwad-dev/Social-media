import React from 'react';
import {useState}from "react";
import './App.css'; 

function App() {
  const [count, setCount] = useState(0);

  const handleClick = () => {
    setCount ((count) => count + 10 );
  };

  return (
    <div className="App">
      <h1>Instynic</h1>
      <p>React + TypeScript + Vite</p>
      <p> Count: {count}</p>
      <button className="button" onClick={handleClick}>Click me</button>
      <button className="button" onClick={() => setCount(0)}>Reset</button>
      <button className="button" onClick={() => setCount(count - 5)}>Decrement</button>
    </div>
  );
}

export default App;