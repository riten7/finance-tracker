import React from 'react';
import { Switch, Route } from 'react-router-dom';
import { useSelector } from 'react-redux';

import ParticlesBg from "particles-bg";

import PrivateRoute from './PrivateRoute';
import AccountSetup from "./containers/account/AccountSetup";
import Dashboard from './containers/menu/Dashboard';
import AccountDetail from './containers/account/AccountDetail';
import TransactionTab from './containers/transaction/TransactionTab';
import ExpenseReport from './containers/report/ExpenseReport';

import './App.css';

function App() {
  const { accounts } = useSelector(state => state.accounts);
  return (
    <div className="App">
      {/* <ParticlesBg type="random" bg={true}/> */}
      <Switch>
        <Route exact path='/setup' component={AccountSetup} />
        <PrivateRoute exact path='/' accounts={accounts} component={Dashboard} />
        <PrivateRoute exact path='/account' accounts={accounts} component={AccountDetail} />
        <PrivateRoute exact path='/transaction' accounts={accounts} component={TransactionTab} />
        <PrivateRoute exact path='/report' accounts={accounts} component={ExpenseReport} />
      </Switch>
    </div>
  );
}

export default App;
