import logo from './logo.svg';
import './App.css';

import React, { useState, useEffect } from "react";
import Child from "./components/Child";
import BigList from "./components/BigList";

const slowFunction = (num) => {
  console.log("Calling slow function...");
  for (let i = 0; i < 1e9; i++) {} // fake CPU work
  return num * 2;
};

const App = () => {
  const [count, setCount] = useState(0);
  const [input, setInput] = useState("");

  const result = slowFunction(count);

  const handleClick = () => {
    setCount(count + 1);
  };

  useEffect(() => {
    console.log("Effect is running");
  });

  const bigArray = Array.from({ length: 10000 }, (_, i) => `Item ${i + 1}`);

  return (
    <div>
      <h1>React Performance Issues Demo</h1>
      <p>Count: {count}</p>
      <p>Expensive Result: {result}</p>
      <input
        type="text"
        value={input}
        onChange={(e) => setInput(e.target.value)}
        placeholder="Type something..."
      />
      <Child text="Increment" onClick={handleClick} />
      <BigList items={bigArray} />
    </div>
  );
};

export default App;

