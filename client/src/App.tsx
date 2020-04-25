import React from 'react';
import { Switch, Route } from 'react-router-dom';
import Home from './views/Home';
import ResultView from './views/ResultView';
import './App.css';

const App: React.FC<{}> = () => {

  return (
    <div className="App">
        <Switch>
          <Route path="/anime/:id" component={ResultView} />
          <Route path="/" component={Home} />
        </Switch>
    </div>
  );
}

export default App;
