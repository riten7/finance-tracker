import React from 'react';
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

import { Divider } from 'semantic-ui-react';

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
    !!data ?
    <>
     <Button className="k-button" content="Export as PDF" onClick={onHandlePdfExport} />
     <Chart ref={(cmp) => _chart = cmp}>
       <ChartTitle height={'20px'} text={`${txtype} Transaction Report`} />
       <ChartLegend position="top" orientation="horizontal" />
        <ChartValueAxis>
            <ChartValueAxisItem title={{ text: `${txtype}`}} />
        </ChartValueAxis>
        <ChartCategoryAxis>
            <ChartCategoryAxisItem title={{ text: "Categories" }} categories={category} />
        </ChartCategoryAxis>
        <ChartSeries>
            <ChartSeriesItem data={data} type="bar" color={txtype === 'Income' ? 'green' : 'red'} />
        </ChartSeries>
    </Chart>
    <Divider />
    </> : null
  );
}

export default BarChart;