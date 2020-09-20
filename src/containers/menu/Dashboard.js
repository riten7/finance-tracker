import React from 'react';
import { useDispatch } from 'react-redux';

import NavigationMenu from '../../components/NavigationMenu';
import AccountList from '../Account/AccountList';

import { loadAccounts } from '../../actions/actionCreators';

const Dashboard = () => {
  const dispatch = useDispatch();

  return (
    <>
    <NavigationMenu />
    <div className="dashboard-container">
    <AccountList />
    </div>
    </>
  );
}

export default Dashboard;