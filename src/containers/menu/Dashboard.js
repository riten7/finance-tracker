import React from 'react';

import AccountList from '../Account/AccountList';
import TransactionList from '../transaction/TransactionList';

const Dashboard = () => {
  return (
    <>
    <div className="dashboard-container">
    <AccountList />
    <br />
    <TransactionList />
    </div>
    </>
  );
}

export default Dashboard;