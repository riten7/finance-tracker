import React from 'react';
import { Dropdown } from 'semantic-ui-react';

import { filterTypes } from '../../utility/constant';

const TransactionFilter = ({ onHandleChange }) => {
  return (
    <>
    <Dropdown
      className="transaction-dropdown"
      selection
      options={filterTypes}
      defaultValue={filterTypes[0].value}
      onChange={onHandleChange} />
    </>  
  )
}

export default TransactionFilter;