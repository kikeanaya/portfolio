import React from 'react';
import Menu from './Components/Menu'
import { Switch, Route } from 'react-router-dom'
import './App.scss';
import Home from './Components/Home';
import Work from './Components/Work';
import Contact from './Components/Contact';

function App() {
  return (
    <div className="App">
      <Menu/>
      <Switch>
        <Route exact path='/' render={() => <Home/>}/>
        <Route exact path='/work/' render={() => <Work/>}/>
        <Route exact path='/contact/' render={() => <Contact/>}/>
      </Switch>
    </div>
  );
}

export default App;
