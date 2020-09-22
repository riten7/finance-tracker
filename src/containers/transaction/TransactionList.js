import React from 'react';
import { useSelector } from 'react-redux';
import { Table, Button, Space, Tag } from 'antd';
import moment from 'moment';

import { EditTwoTone } from '@ant-design/icons';
import './transaction.css';

const NoTransaction = () => (
  <div className="transactions-form__empty">You don't have any transactions.</div>
);

const TransactionList = () => {
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
    },
    {
      title: 'Action',
      key: 'action',
      render: (text, record) => (
        <Space size="middle">
          <Button shape="circle" icon={<EditTwoTone />} onClick={() => console.log(record)}></Button>
        </Space>
      ),
    },
  ];

  const { transactions } = useSelector(state => state.transactions);
  const sortedTransactions = transactions.slice().sort((a, b) => moment(b.date).diff(a.date));
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
  }

  return (
    <>
      <h2>Transactions</h2>
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