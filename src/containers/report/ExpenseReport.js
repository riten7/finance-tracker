import React from 'react';
import { useSelector } from 'react-redux';
import { Divider } from 'semantic-ui-react';
import { DatePicker } from 'antd';
import { FilterFilled } from '@ant-design/icons';
import moment from 'moment';
import Chart from './Chart';

import './report.css'

const { RangePicker } = DatePicker;

const NoData = () => (
  <div className="transactions-form__empty">You don't have any transactions within the selected date range</div>
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
      <RangePicker
        className="report_input_test"
        onChange={onDateChange}
        format={'YYYY-MM-DD'}
        suffixIcon={<FilterFilled />}/>
      </div>
      <Divider />
      {filteredTransactions.length > 0 ?
      <>
      <Chart transactions={filteredTransactions} txtype="Income" />
      <br />
      <Chart transactions={filteredTransactions} txtype="Expense" />
      </>
      : <NoData />}
    </div>
  )
};

export default ExpenseReport;
