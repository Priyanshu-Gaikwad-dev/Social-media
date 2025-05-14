import React from 'react';
import {useState}from "react";
import './App.css'; 

function App() {
  const [count, setCount] = useState(0);
  const [name, setName] = useState(" Gaikwad ");

  const handleIncrement = () => {
    setCount ((count) => count + 10 );
  };

  const handleReset = () => {
    setCount(0);
  };
  const handleDecrement = () => {
    setCount((count) => count - 5);
  };

  const handleName = (e: React.ChangeEvent<HTMLInputElement>) => {
    setName(e.target.value);
  };

  return (
    <div className="App">
      <h1>Instynic</h1>
      <p>{name}{count}</p>
      <div>
        <input type="text" placeholder="Enter your name" onChange={handleName}/>
      </div>
      <button className="button" onClick={handleIncrement}>Increment</button>
      <button className="button" onClick={handleReset}>Reset</button>
      <button className="button" onClick={handleDecrement}>Decrement</button>


      <div className="footer">
        <p>Made with ❤️ by Instynic</p>
        <p>Follow us on <a href="https://twitter.com/instynic" target="_blank" rel="noopener noreferrer">Twitter</a></p>
        <p>Check out our <a href="https://instynic.com" target="_blank" rel="noopener noreferrer">Website</a></p>
      </div>
    </div>
  );
}

export default App;