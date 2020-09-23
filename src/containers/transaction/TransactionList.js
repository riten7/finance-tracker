import React from 'react';
import { useSelector } from 'react-redux';
import { Table, Button, Space, Tag, Typography } from 'antd';
import { EditTwoTone } from '@ant-design/icons';
import moment from 'moment';

import TransactionFilter from './TransactionFilter';
import { getSortedTransactions, filterTransactionsbyDate } from '../../utility/constant';

import './transaction.css';

const { Text } = Typography;

const NoTransaction = () => (
  <div className="transactions-form__empty">You don't have any transactions yet.</div>
);

const TransactionList = ({from}) => {
  const columns = [
    {
      title: 'Account',
      dataIndex: 'accountName',
      key: 'accountName',
    },
    {
      title: 'Transaction',
      dataIndex: 'type',
      key: 'type',
    },
    {
      title: 'Tags',
      dataIndex: 'tags',
      key: 'tags',
      render: tags => (
        tags && tags.map(tag => {
          return (
            <Tag color="blue" key={tag}>
              {tag}
            </Tag>
          );
        })
    ),
    },
    {
      title: 'Date',
      dataIndex: 'date',
      key: 'date',
      defaultSortOrder: 'descend',
      render: date => moment(date).format('ll')
    },
    {
      title: 'Amount',
      dataIndex: 'amount',
      key: 'amount',
      render: (amount, record) => <Text type={record.type ==='income' ? 'success' : 'danger'}>{`NPR. ${amount}`}</Text>
    },
    {
      title: 'Action',
      key: 'action',
      render: (_, record) => (
        <Space size="middle">
          <Button shape="circle" icon={<EditTwoTone />} onClick={() => console.log(record)}></Button>
        </Space>
      ),
    },
  ];

  const { transactions } = useSelector(state => state.transactions);
  const [dayFilter, setDaysFilter] = React.useState('all');
  const sortedTransactions = getSortedTransactions(filterTransactionsbyDate(transactions, dayFilter));

  const [pagination, setPagination] = React.useState({
    current: 1,
    pageSize: 5,
  });

  const handleTableChange = (pagination) => {
    const pageIndex = pagination.current;
    setPagination({
      ...pagination,
      current: pageIndex,
    })
  };

  const onHandleChange = (_, { value }) => {
    setDaysFilter(value);
    setPagination({
      ...pagination,
      current: 1,
    })
  }

  return (
    <>
      <h2>{from ? 'Transactions' : 'Recent Transactions'}</h2>
      {from && <TransactionFilter onHandleChange={onHandleChange}/>}
      {sortedTransactions.length > 0 ?
        <Table
          rowKey="id"
          columns={columns}
          dataSource={sortedTransactions}
          pagination={pagination}
          onChange={handleTableChange}
        />
        : <NoTransaction />}
    </>
  );
}

export default TransactionList;