import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useHistory } from 'react-router-dom';
import { Button, Divider, Header } from 'semantic-ui-react';

import AccountForm from '../../containers/Account/AccountForm';
import AccountList from './AccountList';

import { addAccount } from '../../actions/actionCreators';
import { groupAccounts } from '../../utility/constant';

import './account.css';

const AccountSetup = () => {
  const dispatch = useDispatch();
  const history = useHistory();

  const { accounts } = useSelector(state => state.accounts);
  const groups = groupAccounts(accounts);

  const handleFormSubmit = (account) => {
    dispatch(addAccount(account));
  }

  const finalizeFormSubmit = () => {
    history.push("/");
  }

  return (
    <div className="account-setup-container">
      <Header as="h2" icon="settings" content="Ux-Cam Money Tracker" />
      <Divider />
      <Header as="h2">Accounts</Header>
      <p>
        <strong>
          Create accounts that you would like to keep track of.
          You can create maximum of 4 accounts that could be cash in your wallet, bank accounts, credit cards or even a
          loan to your friend. 
          </strong>
      </p>
      <AccountForm accountLength={Object.keys(groups).length} handleFormSubmit={handleFormSubmit} />
      {accounts.length > 0 && (
        <div style={{ margin: '1em' }}>
          <AccountList />
          <div className="form-submit">
            <Button
              primary
              content="Finish"
              onClick={finalizeFormSubmit}
            />
          </div>
        </div>
      )}
    </div>
  )
}

export default AccountSetup;