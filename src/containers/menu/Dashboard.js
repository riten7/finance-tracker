import React from 'react';

import AccountWorth from '../Account/AccountWorth';
import AccountList from '../Account/AccountList';
import TransactionList from '../transaction/TransactionList';

const Dashboard = () => {
  return (
    <>
    <div className="dashboard-container">
    <AccountList />
    <br />
    <AccountWorth />
    <br />
    <TransactionList />
    </div>
    </>
  );
}

export default Dashboard;