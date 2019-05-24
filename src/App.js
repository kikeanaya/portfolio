import React from 'react';
import Menu from './Components/Menu'
import { Switch, Route } from 'react-router-dom'
import './App.scss';
import Home from './Components/Home';


function App() {
  return (
    <div className="App">
      <Menu/>
      <Switch>
        <Route exact path='/' render={() => <Home/>}/>
      </Switch>
    </div>
  );
}

export default App;
