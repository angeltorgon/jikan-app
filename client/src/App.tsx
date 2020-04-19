import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './App.css';

// COMPONENTS
import Results from './components/Results';

const App: React.FC<{}> = () => {
  const [ input, setInput ] = useState<string>("");
  const [ results, setResults ] = useState<[]>([]);

  const handleChanges = (e: React.ChangeEvent<HTMLInputElement>) => {
    setInput(e.target.value);
  }

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    axios.get(`https://api.jikan.moe/v3/search/anime?q=${input}&page=1`)
    .then((res) => {
      console.log(res.data.results)
      setResults(res.data.results);
    }).catch((err) => {
      console.error(err);
    })
  }

  return (
    <div className="App">
      <div>
        <form onSubmit={handleSubmit}>
          <input onChange={handleChanges} value={input} type="text" />
          <button>Search</button>
        </form>
      </div>
      <div>
        <Results results={results}/>
      </div>
    </div>
  );
}

export default App;
