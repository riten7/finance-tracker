import React from 'react';
import { useSelector } from 'react-redux';
import { DatePicker } from 'antd';
import moment from 'moment';
import { jsPDF } from "jspdf";

import Chart from './Chart';
import Doc from './pdf/DocService';
import PdfContainer from './pdf/PdfContainer';

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

  // const onHandleClick = async () => {
  //      const string = await ReactDOMServer.renderToString(<Chart transactions={filteredTransactions} txtype="income"/>);
  //      const pdf = new jsPDF();
  //      console.log(pdf);
  //      pdf.html(string);
  //      pdf.save('pdf')
  // }
  
  const createPdf = (html) => Doc.createPdf(html);

  return (
    <div className="report-container">
      <div className="report-container__picker">
      <h3>Select date range period</h3>
      <RangePicker
        onChange={onDateChange}
        format={'YYYY-MM-DD'}
      />
      </div>
      {filteredTransactions.length > 0 ?
      <PdfContainer createPdf={createPdf}>
      <>
      <Chart transactions={filteredTransactions} txtype="income" />
      <br />
      <Chart transactions={filteredTransactions} txtype="expense" />
      <h4 className="report-container__info">Income and Expense Transactions Report</h4>
      </>
      </PdfContainer>
      : <NoData />}
    </div>
  )
};

export default ExpenseReport;
