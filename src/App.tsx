import React from 'react';
import {useState}from "react";
import './App.css'; 

function App() {
  const [count, setCount] = useState(0);

  const handleClick = () => {
    setCount ((count) => count + 1 );
  };

  return (
    <div className="App">
      <h1>Instynic</h1>
      <p>React + TypeScript + Vite</p>
      <p> Count: {count}</p>
      <button className="button" onClick={handleClick}>Click me</button>
      <p>Click the button to increase the count.</p>
      <p>Click the button to increase the count.</p>
      <p>Click the button to increase the count.</p>  















      <p>Click the button to increase the count.</p>
      <p>Click the button to increase the count.</p>
    </div>
  );
}

export default App;