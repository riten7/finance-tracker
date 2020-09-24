import React from 'react';

import { Divider } from 'semantic-ui-react';

import AccountWorth from '../account/AccountWorth';
import AccountList from '../account/AccountList';
import TransactionList from '../transaction/TransactionList';

const Dashboard = () => {
  return (
    <>
    <div className="dashboard-container">
    <AccountList />
    <br />
    <AccountWorth />
    <br />
    <Divider />
    <TransactionList />
    </div>
    </>
  );
}

export default Dashboard;