import React from 'react';
import { Switch, Route } from 'react-router-dom';
import { useSelector } from 'react-redux';

import PrivateRoute from './PrivateRoute';
import AccountSetup from "./containers/Account/AccountSetup";
import NavigationMenu from './components/NavigationMenu';
import Dashboard from './containers/menu/Dashboard';
import AccountDetail from './containers/Account/AccountDetail';
import TransactionTab from './containers/transaction/TransactionTab';

import './App.css';

function App() {
  const { accounts } = useSelector(state => state.accounts);
  return (
    <div className="App">
      <Switch>
        <Route exact path='/setup' component={AccountSetup} />
        <PrivateRoute  path='/' accounts={accounts} component={Dashboard} />
        <PrivateRoute  path='/account' accounts={accounts} component={AccountDetail} />
        <PrivateRoute  path='/transaction' accounts={accounts} component={TransactionTab} />
      </Switch>
    </div>
  );
}

export default App;
