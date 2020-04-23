import React, { useEffect, useState } from 'react'
import axios from 'axios';
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';

// COMPONENTS
import Results from '../components/Results';
import { createStyles, makeStyles, Theme } from '@material-ui/core/styles';

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    formControl: {
      margin: theme.spacing(1),
      minWidth: 120,
      width: "600px",
      display: "flex",
      flexDirection: "row",
      justifyContent: "space-around",
      [theme.breakpoints.down('sm')]: {
        flexDirection: "column"
      }
    },
    selectEmpty: {
      marginTop: theme.spacing(2),
    },
    select: {
      width: "70%",
      [theme.breakpoints.down('sm')]: {
        width: "100%"
      },
    },
    search: {
      width: "100%",
      marginTop: "10px"
    },
    button: {
      width: "70%",
      [theme.breakpoints.down('sm')]: {
        width: "100%",
        marginTop: "10px"
      },
    }
  }),
);

export default function Home() {
    const [ input, setInput ] = useState<string>("");
    const [ category, setCategory ] = useState("anime");
    const [ results, setResults ] = useState<[]>([]);
    const classes = useStyles();
  
    useEffect(() => {
      const requestURL = `https://api.jikan.moe/v3/top/anime`
  
      axios.get(requestURL)
      .then((res) => {
        setResults(res.data.top);
        console.log(res.data.top)
      }).catch((err) => {
        console.error(err);
      })
    },[])
  
    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
      e.preventDefault();
      if(input.length > 0) {
        const requestURL = `https://api.jikan.moe/v3/search/${category}?q=${input}&page=1`
  
        axios.get(requestURL)
        .then((res) => {
          setResults(res.data.results);
        }).catch((err) => {
          console.error(err);
        })
      }
    }
  
    const handleChanges = (e: React.ChangeEvent<HTMLInputElement>) => {
      setInput(e.target.value);
    }
  
    const handleSelect = (e: any) => {
      setCategory(e.target.value);
    }

    return (
        <div>
        <header>
      <form onSubmit={handleSubmit}>
      <FormControl variant="filled" className={classes.formControl}>
          <InputLabel id="demo-simple-select-filled-label">Category</InputLabel>
          <Select
            labelId="demo-simple-select-filled-label"
            id="demo-simple-select-filled"
            value={category}
            onChange={handleSelect}
            variant="outlined"
            className={classes.select}
          >
            <MenuItem value={"anime"}>Anime</MenuItem>
            <MenuItem value={"manga"}>Manga</MenuItem>
          </Select>
          <TextField 
            variant="outlined" 
            onChange={handleChanges} 
            value={input} 
            label="Search"
            className={classes.search}
            type="text" />
          <Button className={classes.button} variant="contained" type="submit" color="primary">Search</Button>
        </FormControl>
      </form>
    </header>
    <div>
      <Results results={results}/>
    </div>
    </div>
    )
}
