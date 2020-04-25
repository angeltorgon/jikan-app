import React, { useState } from 'react'
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';

// COMPONENTS
import { createStyles, makeStyles, Theme } from '@material-ui/core/styles';

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    formControl: {
      margin: theme.spacing(1),
      display: "flex",
      minWidth: "350px",
      flexDirection: "row",
      justifyContent: "space-around",
      [theme.breakpoints.down('sm')]: {
        flexDirection: "column"
      }
    },
    select: {
      width: "70%",
      [theme.breakpoints.down('sm')]: {
        width: "100%"
      },
    },
    search: {
      width: "100%",
      backgroundColor: "white",
      fontSize: "1.3rem",
      borderRadius: "5px",
      [theme.breakpoints.down('sm')]: {
        marginTop: "10px"
      },
    },
    button: {
      width: "70%",
      backgroundColor: "black",
      fontSize: "1.3rem",
      [theme.breakpoints.down('sm')]: {
        width: "100%",
        marginTop: "10px",
        height: "50px",
      },
    }
  }),
);

const Search: React.FC<any> = ({ 
  handleSubmit, 
  input, 
  setInput}) => {
    const classes = useStyles();

    const handleChanges = (e: React.ChangeEvent<HTMLInputElement>) => {
      setInput(e.target.value);
    }

    return (
        <div>
          <form onSubmit={handleSubmit}>
            <FormControl variant="filled" className={classes.formControl}>
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
        </div>
    )
}

export default Search
