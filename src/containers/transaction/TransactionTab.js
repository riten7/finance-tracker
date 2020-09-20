import React from 'react';
import { Tab } from 'semantic-ui-react';
import Transaction from './Transaction';

const panes = [
  {
    menuItem: 'Expense',
    render: () => <Tab.Pane><Transaction type='expense' /></Tab.Pane>,
  },
  {
    menuItem: 'Income',
    render: () => <Tab.Pane><Transaction type='income' /></Tab.Pane>,
  },
]

const TransactionTab = () => (
  <div className="transaction-container">
     <Tab panes={panes} />
  </div>
)

export default TransactionTab;