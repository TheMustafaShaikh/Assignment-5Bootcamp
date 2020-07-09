import React, { useState } from 'react';
import './App.css';
import Parent from "./Parent"
import Countcontext from "./Countcontext";

function App() {
  const Counter = useState(0)
  return (
    <Countcontext.Provider value={Counter}>
    <div className="App">
      <Parent />
    </div>
    </Countcontext.Provider>
  );
}

export default App;
