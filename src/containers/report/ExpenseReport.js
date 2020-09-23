import React from 'react';
import { useSelector } from 'react-redux';
import { DatePicker } from 'antd';
import moment from 'moment';
import Chart from './Chart';

import './report.css'

const { RangePicker } = DatePicker;

const NoData = () => (
  <div className="transactions-form__empty">You don't have any transactions with the selected date range</div>
);

const ExpenseReport = () => {
  const { transactions } = useSelector(state => state.transactions);

  const [filteredTransactions, setFilteredTransactions] = React.useState(transactions);

  const getFormattedDate = (date) => {
    return date.format('YYYY-MM-DD');
  }

  const onDateChange = (dates) => {
    if(!dates) return setFilteredTransactions(transactions);;
    const filteredTxs = transactions.filter(tx => getFormattedDate(moment(tx.date)) >= getFormattedDate(dates[0]) && getFormattedDate(moment(tx.date)) <= getFormattedDate(dates[1]))
    setFilteredTransactions(filteredTxs);
  }

  return (
    <div className="report-container">
      <div className="report-container__picker">
      <h3>Select dates for desired time period report</h3>
      <RangePicker
        onChange={onDateChange}
        format={'YYYY-MM-DD'}
      />
      </div>
      {filteredTransactions.length > 0 ?
      <>
      <Chart transactions={filteredTransactions} txtype="income" />
      <br />
      <Chart transactions={filteredTransactions} txtype="expense" />
      <h4 className="report-container__info">Income and Expense Transactions Report</h4>
      </>
      : <NoData />}
    </div>
  )
};

export default ExpenseReport;
