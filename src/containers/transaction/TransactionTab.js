import React from 'react';
import { Tab, Divider } from 'semantic-ui-react';
import TransactionForm from './TransactionForm';
import TransactionList from './TransactionList';

const panes = [
  {
    menuItem: 'Expense',
    render: () => <Tab.Pane><TransactionForm type='expense' /></Tab.Pane>,
  },
  {
    menuItem: 'Income',
    render: () => <Tab.Pane><TransactionForm type='income' /></Tab.Pane>,
  },
]

const TransactionTab = () => (
  <div className="transaction-container">
    <h2>New Transaction</h2>
    <Tab panes={panes} />
    <Divider />
    <TransactionList from = "transaction" />
  </div>
)

export default TransactionTab;