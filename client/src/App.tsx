import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './App.css';

import { Typography, Button, TextField } from '@material-ui/core';

import { createStyles, makeStyles, Theme } from '@material-ui/core/styles';
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import FormHelperText from '@material-ui/core/FormHelperText';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';

// COMPONENTS
import Results from './components/Results';

const searchCategories = [
'anime', 
'manga', 
'person', 
'character',
'genre'
]

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    formControl: {
      margin: theme.spacing(1),
      minWidth: 120,
    },
    selectEmpty: {
      marginTop: theme.spacing(2),
    },
  }),
);

const App: React.FC<{}> = () => {
  const [ input, setInput ] = useState<string>("");
  const [ category, setCategory ] = useState<string>("");
  const [ results, setResults ] = useState<[]>([]);
  const classes = useStyles();

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

  const handleSelect = (e: React.ChangeEvent<{value: unknown}>) => {

  }

  return (
    <div className="App">
      <header>
        <Typography style={{float: "left"}} variant="h2" component="h1">Anime Finder</Typography>
        <div>
          <form onSubmit={handleSubmit}>
          <FormControl variant="filled" className={classes.formControl}>
              <InputLabel id="demo-simple-select-filled-label">Category</InputLabel>
              <Select
                labelId="demo-simple-select-filled-label"
                id="demo-simple-select-filled"
                value={category}
                onChange={handleSelect}
                variant="outlined"
              >
                <MenuItem value="">
                  <em>None</em>
                </MenuItem>
                <MenuItem value={10}>Ten</MenuItem>
                <MenuItem value={20}>Twenty</MenuItem>
                <MenuItem value={30}>Thirty</MenuItem>
              </Select>
            </FormControl>
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
