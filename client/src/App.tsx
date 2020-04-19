import React, { useState, useEffect } from 'react';
import './App.css';

// COMPONENTS
import Results from './components/Results';

function App() {
  const [ input, setInput ] = useState("");

  const handleChanges = (e: React.ChangeEvent<HTMLInputElement>) => {
    setInput(e.target.value);
  }

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
  }

  return (
    <div className="App">
      <div>
        <form>
          <input onChange={handleChanges} value={input} type="text" />
          <button>Search</button>
        </form>
      </div>
      <div>
        <Results/>
      </div>
    </div>
  );
}

export default App;
