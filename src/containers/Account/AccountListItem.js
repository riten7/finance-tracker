import React from 'react';
import './account.css';

const AccountListItem = (props) => {
  const { name, balance } = props.account;
  return (
    <div className="account-item">
      <span>{name}</span>
      <span className={`account-item__balance ${balance > 0 ? 'green': 'red'}`}>{`NPR. ${balance}`}</span>
    </div>
  );
}

export default AccountListItem;