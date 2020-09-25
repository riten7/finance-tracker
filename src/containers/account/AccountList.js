import React from 'react';
import { useSelector } from 'react-redux';

import { Collapse, Typography } from 'antd';

import { groupAccounts } from '../../utility/constant';
import AccountListItem from './AccountListItem';
import './account.css';

const { Panel } = Collapse;
const { Text } = Typography;

const NoAccounts = () => (
  <div className="accounts-form__empty">You don't have any accounts created yet.</div>
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
            <Panel showArrow={true} header={groups[key].name} key={key} extra={<Text type={groups[key].total > 0 ? 'success' : 'danger'}>NPR. {groups[key].total}</Text>}>
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
