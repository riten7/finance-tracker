import React from 'react';
const AccountListItem = (props) => {
  const { name, balance } = props.account;
  return (
    <div>
      <span>{name}</span>
      <span className="account__balance">{`${balance} NPR`}</span>
    </div>
  );
}

export default AccountListItem;