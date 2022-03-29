import React from "react";
import ReactApexChart from "react-apexcharts";
import { lineChartUserData, lineChartUserOptions } from "variables/charts";

class UserLineChart extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      chartData: [],
      chartOptions: {},
    };
  }

  componentDidMount() {
    this.setState({
      chartData: lineChartUserData,
      chartOptions: lineChartUserOptions,
    });
  }

  render() {
    return (
      <ReactApexChart
        options={this.state.chartOptions}
        series={this.state.chartData}
        type="area"
        width="100%"
        height="100%"
      />
    );
  }
}

export default UserLineChart;
