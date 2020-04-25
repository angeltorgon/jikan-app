import React from 'react';
import FormControl from '@material-ui/core/FormControl';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import './styles/search.css';

// COMPONENTS
import { createStyles, makeStyles, Theme } from '@material-ui/core/styles';

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    formControl: {
      display: "flex",
      minWidth: "350px",
      flexDirection: "row",
      margin: "20px",
      justifyContent: "space-around",
      [theme.breakpoints.down('sm')]: {
        flexDirection: "column"
      }
    },
    search: {
      width: "400px",
      backgroundColor: "white",
      fontSize: "1.3rem",
      marginRight: "20px",
      borderRadius: "5px",
      [theme.breakpoints.down('sm')]: {
        marginTop: "10px",
        marginRight: "0px",
      },
    },
    button: {
      width: "200px",
      backgroundColor: "black",
      fontSize: "1.3rem",
      "&:hover": {
        backgroundColor: "maroon",
      },
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
