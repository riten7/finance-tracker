import React from 'react';
import { useSelector } from 'react-redux';

import { Collapse } from 'antd';

import { groupAccounts } from '../../utility/constant';
import AccountListItem from './AccountListItem';

const { Panel } = Collapse;

const NoAccounts = () => (
  <div className="transactions-form__empty">You don't have any accounts created yet.</div>
);

const AccountList = () => {
  const { accounts } = useSelector(state => state.accounts);
  const groups = groupAccounts(accounts);
  const groupKeys = Object.keys(groups);

  return (
    <>
      <h2>Accounts</h2>
      {groupKeys.length > 0 ?
        <Collapse>
          {groupKeys.map(key => (
            <Panel showArrow={false} header={groups[key].name} key={key} extra={`${groups[key].total} NPR`}>
              {groups[key].accounts.map(account => (
                <AccountListItem
                  key={account.id}
                  account={account}
                />
              ))}
            </Panel>
          ))}
        </Collapse> : <NoAccounts />
      }
    </>
  )
}

export default AccountList;
