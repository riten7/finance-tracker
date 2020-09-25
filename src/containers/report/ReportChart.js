import React from 'react';
import { Tab } from 'semantic-ui-react';
import AccountReport from './AccountReport';
import CategoryReport from './CategoryReport';

const panes = [
  {
    menuItem: 'Bar Chart',
    render: () => <Tab.Pane attached={false}><AccountReport /></Tab.Pane>,
  },
  {
    menuItem: 'Pie Chart',
    render: () => <Tab.Pane attached={false}><CategoryReport /></Tab.Pane>,
  },
]

const ReportChart = () => (
  <Tab className="report-container" menu={{ secondary: true }} panes={panes} />
)

export default ReportChart;