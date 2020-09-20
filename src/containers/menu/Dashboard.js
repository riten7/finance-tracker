import React from 'react';
import { useDispatch } from 'react-redux';
import AccountList from '../Account/AccountList';
import storageService from '../../storage/localDb';

import { loadAccounts } from '../../actions/actionCreators';

const Dashboard = () => {
  const dispatch = useDispatch();
  const storage = new storageService('accounts');

  React.useEffect(() => {
    async function getData() {
      const data = await storage.load();
      console.log('asdasda', data)
      dispatch(loadAccounts(data));
    }
    getData();
  }, [dispatch, storage]);

  return (
    <div className="dashboard-container">
    <AccountList />
    </div>
  );
}

export default Dashboard;