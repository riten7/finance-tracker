import React from 'react';

const AccountListItem = (props) => {
  const { name, balance } = props.account;
  return (
    <div className="account-item">
      <span>{name}</span>
      <span className="account-item__balance">{`NPR. ${balance}`}</span>
    </div>
  );
}

export default AccountListItem;