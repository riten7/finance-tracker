import React from 'react';
import { useSelector } from 'react-redux';
import { Divider } from 'semantic-ui-react';
import { DatePicker } from 'antd';
import { FilterFilled } from '@ant-design/icons';
import moment from 'moment';
import {
  Chart,
  ChartSeries,
  ChartSeriesItem,
  ChartLegend,
  ChartTitle,
  exportVisual
} from '@progress/kendo-react-charts';
import { exportPDF } from '@progress/kendo-drawing';
import { saveAs } from '@progress/kendo-file-saver';
import { Button } from 'semantic-ui-react';

import { getCategoryReportData } from '../../utility/constant';

import './report.css'

const { RangePicker } = DatePicker;

const NoData = () => (
  <div className="transactions-form__empty">You don't have any transactions within the selected date range</div>
);

const PieChart = ({ txtype, transactions }) => {
  let _chart = React.useRef();
  const series = getCategoryReportData(transactions, txtype);
  console.log(series)

  const onHandlePdfExport = () => {
    const chartVisual = exportVisual(_chart);
    if (chartVisual) {
      exportPDF(chartVisual, {
        paperSize: "A4",
        landscape: true
      }).then(dataURI => saveAs(dataURI, 'report.pdf'));
    }
  }

  const labelContent = (props) => {
    return `${props.dataItem.category}-${props.dataItem.value}`;
  }

  return (
    Object.keys(series).length > 0 ?
      <>
        <Button className="k-button" content="Export as PDF" onClick={onHandlePdfExport} />
        <Chart ref={(cmp) => _chart = cmp}>
          <ChartTitle font="12pt sans-serif" text={`${txtype} Detail`} />
          <ChartLegend />
          <ChartSeries>
            <ChartSeriesItem type="pie" data={series} field="value" categoryField="category" labels={{ visible: true, content: labelContent }} />
          </ChartSeries>
        </Chart>
        <Divider />
      </> : null
  );
}

const CategoryReport = () => {
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
          <PieChart transactions={filteredTransactions} txtype="Income" />
          <br />
          <PieChart transactions={filteredTransactions} txtype="Expense" />
        </>
        : <NoData />}
    </>
  )
};

export default CategoryReport;
