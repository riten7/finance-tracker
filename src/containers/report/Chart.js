import React from 'react';
import Chart from "react-google-charts";

import { getReportData } from '../../utility/constant';

const BarChart = ({ txtype, transactions }) => {
  const options = {
    title: txtype === 'income' ? 'Income Report' : 'Expense Report',
    hAxis: {
      title: txtype === 'income' ? 'Income' : 'Expense',
      minValue: 0,
    },
    vAxis: {
      title: 'Category',
    },
  }

  const data = getReportData(transactions, txtype)
  return (
    data.length > 0 &&
      <Chart loader={<div>Loading Chart</div>} height={'400px'} chartType="BarChart" options={options} data={data} type={'Bar'} />
  );
}

export default BarChart;