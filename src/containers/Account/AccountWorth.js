import React from 'react';
import { useSelector } from 'react-redux';
import { Typography } from 'antd';

const { Text } = Typography;

const AccountWorth = () => {
  const { accounts } = useSelector(state => state.accounts);
  const getTotalWorth = () => accounts.reduce((acc, account) => {
    return  acc + parseInt(account.balance);
  }, 0)
  return (
    <div>
    <h2 className="account-total">Total: <Text code><strong>NPR. {getTotalWorth()}</strong></Text></h2>
    <br />
    </div>
  );
}

export default AccountWorth;