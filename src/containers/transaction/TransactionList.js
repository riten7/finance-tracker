import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Table, Button, Space, Tag, Typography } from 'antd';
import { EditTwoTone } from '@ant-design/icons';
import moment from 'moment';

import TransactionFilter from './TransactionFilter';
import ShowModal from '../../components/ShowModal';
import TransactionForm from './TransactionForm';

import { updateTxModalState, updateTransaction } from '../../actions/actionCreators';
import { getSortedTransactions, filterTransactionsbyDate } from '../../utility/constant';

import './transaction.css';

const { Text } = Typography;

const NoTransaction = () => (
  <div className="transactions-form__empty">You don't have any transactions yet.</div>
);

const TransactionList = ({ from }) => {
  const dispatch = useDispatch();
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
        tags && tags.map(tag => <Tag color="blue" key={tag}>{tag}</Tag>)
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
      render: (amount, record) => <Text type={record.type === 'income' ? 'success' : 'danger'}>{`NPR. ${amount}`}</Text>
    },
    {
      title: 'Action',
      key: 'action',
      render: (_, record) => (
        <Space size="middle">
          <Button shape="circle" icon={<EditTwoTone />} onClick={() => onHandleEdit(record)}></Button>
        </Space>
      ),
    },
  ];

  const { transactions } = useSelector(state => state.transactions);
  const [txModalOpen, setTxModelOpen] = React.useState(false);
  const [dayFilter, setDaysFilter] = React.useState('all');
  const [txRecord, setTxRecord] = React.useState({});
  const [pagination, setPagination] = React.useState({
    current: 1,
    pageSize: 5,
  });

  const sortedTransactions = getSortedTransactions(filterTransactionsbyDate(transactions, dayFilter));

  const onHandleEdit = (record) => {
    setTxModelOpen(true);
    setTxRecord(record);
  }

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

  const handleFormSubmit = (data) => {
    setTxModelOpen(false);
    dispatch(updateTransaction(data));
  }

  return (
    <React.Fragment>
      {sortedTransactions.length > 0 ?
        <>
          <h2>{from ? 'Transactions' : 'Recent Transactions'}</h2>
          {from && <TransactionFilter onHandleChange={onHandleChange} />}
          <Table
            rowKey="id"
            columns={columns}
            dataSource={sortedTransactions}
            pagination={pagination}
            onChange={handleTableChange}
          />
        </>
        : <NoTransaction />}

      {txModalOpen && <ShowModal
        open={txModalOpen}
        title='Add Transaction'
        closeModal={() => setTxModelOpen(false)}>
        <TransactionForm transaction={txRecord} handleFormSubmit={handleFormSubmit} />
      </ShowModal>}
    </React.Fragment>
  );
}

export default TransactionList;