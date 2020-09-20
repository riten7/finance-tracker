import React from 'react';
import { useSelector } from 'react-redux';
import { Table, Label } from 'semantic-ui-react';

import './transaction.css';

const TransactionList = () => {
  const { transactions } = useSelector(state => state.transactions);
    return (
      <Table columns={4}>
         <Table.Header>
      <Table.Row>
        <Table.HeaderCell>Transaction</Table.HeaderCell>
        <Table.HeaderCell>Tags</Table.HeaderCell>
        <Table.HeaderCell>Date</Table.HeaderCell>
        <Table.HeaderCell>Amount</Table.HeaderCell>
      </Table.Row>
    </Table.Header>
        <Table.Body>
          {transactions.map(item => (
            <Table.Row key={item.id} className={item.type === 'income' ? 'green' : 'red'}>
              <Table.Cell>
                {item.type}
              </Table.Cell>
              <Table.Cell>
               {item.tags &&
                item.tags.map(tag => <Label key={tag} content={tag} />)}
              </Table.Cell>
              <Table.Cell>
               {item.date}
              </Table.Cell>
              <Table.Cell>
               {`${item.amount} NPR`}
              </Table.Cell>
            </Table.Row>
          ))}
        </Table.Body>
        <Table.Footer>
      <Table.Row>
        <Table.HeaderCell />
        <Table.HeaderCell>{`Income ${23000000}`}</Table.HeaderCell>
        <Table.HeaderCell>{`Expense ${23000000}`}</Table.HeaderCell>
        <Table.HeaderCell>{`Total ${23000000}`}</Table.HeaderCell>
      </Table.Row>
    </Table.Footer>
      </Table>
    );
}

export default TransactionList;