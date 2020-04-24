import React, { useEffect } from 'react';
import { Switch, Route } from 'react-router-dom';
import Header from './components/Header';
import Home from './views/Home';
import ResultView from './views/ResultView';
import { useLocation } from "react-router-dom";
import './App.css';

const App: React.FC<{}> = () => {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return (
    <div className="App">
        <Header /> 
        <Switch>
          <Route path="/anime/:id" component={ResultView} />
          <Route path="/" component={Home} />
        </Switch>
    </div>
  );
}

export default App;
