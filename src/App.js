import React from 'react';
import { Switch, Route } from 'react-router-dom';
import AccountSetup from "./containers/Account/AccountSetup";
import NavigationMenu from './containers/menu/NavigationMenu';
import Dashboard from './containers/menu/Dashboard';
import AccountDetail from './containers/menu/AccountDetail';
import STRT from './containers/menu/abc';

import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
      </header>
      <NavigationMenu />
      <Switch>
        <Route exact path='/setup' component={AccountSetup} />
        <Route exact path='/' component={Dashboard} />
        <Route exact path='/account' component={AccountDetail} />
        <Route exact path='/transaction' component={STRT} />
      </Switch>
    </div>
  );
}

export default App;
