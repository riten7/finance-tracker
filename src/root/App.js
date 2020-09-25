import React from 'react';
import { Switch, Route } from 'react-router-dom';
import { useSelector } from 'react-redux';

import PrivateRoute from '../route/PrivateRoute';
import AccountSetup from "../containers/account/AccountSetup";
import Dashboard from '../containers/main/Dashboard';
import AccountDetail from '../containers/account/AccountDetail';
import TransactionTab from '../containers/transaction/TransactionTab';
import ReportChart from '../containers/report/ReportChart';

import './App.css';

function App() {
  const { accounts } = useSelector(state => state.accounts);
  return (
    <div className="App">
      <Switch>
        <Route exact path='/setup' component={AccountSetup} />
        <PrivateRoute exact path='/' accounts={accounts} component={Dashboard} />
        <PrivateRoute exact path='/account' accounts={accounts} component={AccountDetail} />
        <PrivateRoute exact path='/transaction' accounts={accounts} component={TransactionTab} />
        <PrivateRoute exact path='/report' accounts={accounts} component={ReportChart} />
      </Switch>
    </div>
  );
}

export default App;
