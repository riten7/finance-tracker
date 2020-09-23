import React from 'react';
import {
    Chart,
    ChartValueAxis,
    ChartValueAxisItem,
    ChartCategoryAxis,
    ChartCategoryAxisItem,
    ChartSeries,
    ChartSeriesItem,
    exportVisual
} from '@progress/kendo-react-charts';
import { exportPDF } from '@progress/kendo-drawing';
import { saveAs } from '@progress/kendo-file-saver';
import { Button } from 'semantic-ui-react';

import { getReportData } from '../../utility/constant';

const BarChart = ({ txtype, transactions }) => {
  let _chart = React.useRef()
  const {category, data} = getReportData(transactions, txtype)

  const onHandlePdfExport = () => {
     const chartVisual = exportVisual(_chart);
      if (chartVisual) {
          exportPDF(chartVisual, {
             paperSize: "A4",
             landscape: true
          }).then(dataURI => saveAs(dataURI, 'chart.pdf'));
      }
    }

  return (
    !!data &&
    <>
    {/* <h3>{txtype === 'income' ? 'Income Report' : 'Expense Report'}</h3> */}
    <Button className="report-container__exportBtn" content="Export Report" onClick={onHandlePdfExport} />
     <Chart ref={(cmp) => _chart = cmp}>
        <ChartValueAxis>
            <ChartValueAxisItem title={{ text: "Categories" }} />
        </ChartValueAxis>
        <ChartCategoryAxis>
            <ChartCategoryAxisItem title={{ text: (txtype === 'income' ? 'Income' : 'Expense')}} categories={category} />
        </ChartCategoryAxis>
        <ChartSeries>
            <ChartSeriesItem data={data} type="bar" color={txtype === 'income' ? 'green' : 'red'} />
        </ChartSeries>
    </Chart>
    </>
  );
}

export default BarChart;