import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './App.css';

import { Typography, Button, TextField } from '@material-ui/core';

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
      <header>
        <Typography style={{float: "left"}} variant="h2" component="h1">Anime Finder</Typography>
        <div>
          <form onSubmit={handleSubmit}>
            <TextField 
              variant="outlined" 
              onChange={handleChanges} 
              value={input} 
              label="Search"
              type="text" />
            <Button variant="contained" type="submit">Search</Button>
          </form>
        </div>
      </header>
      <div>
        <Results results={results}/>
      </div>
    </div>
  );
}

export default App;
