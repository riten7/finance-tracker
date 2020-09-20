import React from 'react';
import { useSelector } from 'react-redux';

import { Collapse } from 'antd';

import { groupAccounts } from '../../utility/constant';
import AccountListItem from './AccountListItem';

const { Panel } = Collapse;

const AccountList = () => {
  const { accounts } = useSelector(state => state.accounts);
  const groups = groupAccounts(accounts);
  const groupKeys = Object.keys(groups);

  return (
    <>
      {groupKeys.length > 0 &&
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
        </Collapse>
      }
    </>
  )
}

export default AccountList;
