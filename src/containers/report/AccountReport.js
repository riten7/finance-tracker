import React from 'react';
import { useSelector } from 'react-redux';
import { Divider } from 'semantic-ui-react';
import { DatePicker } from 'antd';
import { FilterFilled } from '@ant-design/icons';
import moment from 'moment';
import {
  Chart,
  ChartValueAxis,
  ChartValueAxisItem,
  ChartCategoryAxis,
  ChartCategoryAxisItem,
  ChartSeries,
  ChartSeriesItem,
  ChartTitle,
  ChartLegend,
  exportVisual
} from '@progress/kendo-react-charts';
import { exportPDF } from '@progress/kendo-drawing';
import { saveAs } from '@progress/kendo-file-saver';
import { Button } from 'semantic-ui-react';

import { getReportData } from '../../utility/constant';

import './report.css'

const { RangePicker } = DatePicker;

const NoData = () => (
  <div className="transactions-form__empty">You don't have any transactions within the selected date range</div>
);

const BarChart = ({ txtype, transactions }) => {
  let _chart = React.useRef();
  const { series, categories } = getReportData(transactions, txtype);

  const onHandlePdfExport = () => {
    const chartVisual = exportVisual(_chart);
    if (chartVisual) {
      exportPDF(chartVisual, {
        paperSize: "A4",
        landscape: true
      }).then(dataURI => saveAs(dataURI, 'report.pdf'));
    }
  }

  const getTransaction = () => series.reduce((acc, item) => item + acc);

  return (
    !!series ?
      <>
        <Button className="k-button" content="Export as PDF" onClick={onHandlePdfExport} />
        <Chart ref={(cmp) => _chart = cmp}>
          <ChartTitle font="12pt sans-serif" text={`${txtype}: ${getTransaction()}`} />
          <ChartLegend />
          <ChartValueAxis>
            <ChartValueAxisItem title={{ text: `${txtype}` }} />
          </ChartValueAxis>
          <ChartCategoryAxis>
            <ChartCategoryAxisItem title={{ text: "Accounts" }} categories={categories} />
          </ChartCategoryAxis>
          <ChartSeries>
            <ChartSeriesItem data={series} type="bar" name={txtype} color={txtype === 'Income' ? 'green' : 'red'} />
          </ChartSeries>
        </Chart>
        <Divider />
      </> : null
  );
}

const AccountReport = () => {
  const { transactions } = useSelector(state => state.transactions);

  const [filteredTransactions, setFilteredTransactions] = React.useState(transactions);

  const getFormattedDate = (date) => {
    return date.format('YYYY-MM-DD');
  }

  const onDateChange = (dates) => {
    if (!dates) return setFilteredTransactions(transactions);;
    const filteredTxs = transactions.filter(tx => getFormattedDate(moment(tx.date)) >= getFormattedDate(dates[0]) && getFormattedDate(moment(tx.date)) <= getFormattedDate(dates[1]))
    setFilteredTransactions(filteredTxs);
  }

  return (
    <>
      <div className="report-container__picker">
        <RangePicker
          className="report_input_test"
          onChange={onDateChange}
          format={'YYYY-MM-DD'}
          suffixIcon={<FilterFilled />} />
      </div>
      <Divider />
      {filteredTransactions.length > 0 ?
        <>
          <BarChart transactions={filteredTransactions} txtype="Income" />
          <br />
          <BarChart transactions={filteredTransactions} txtype="Expense" />
        </>
        : <NoData />}
    </>
  )
};

export default AccountReport;
