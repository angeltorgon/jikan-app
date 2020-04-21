import React, { useEffect } from 'react';
import { Switch, Route } from 'react-router-dom';
import Home from './views/Home';
import ResultView from './views/ResultView';
import { useLocation } from "react-router-dom";
import './App.css';

import { Typography } from '@material-ui/core';

const App: React.FC<{}> = () => {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return (
    <div className="App">
        <div className="title">
          <img className="logo" src={require("./images/Watching_Anime-512.png")} alt="dude watching anime"/>
          <Typography variant="h2" component="h1">Find My Anime</Typography>
        </div>
        <Switch>
          <Route path="/anime/:id" component={ResultView} />
          <Route path="/" component={Home} />
        </Switch>
    </div>
  );
}

export default App;
