import React, { Component } from "react";
import Chart from "react-apexcharts";

class AdminChart extends Component {
  constructor(props) {
    super(props);
    this.state = {
      options: {
        chart: {
          id: "basic-bar"
        },
        xaxis: {
          categories: props.categories
        }
      },
      series: props.series
    };
  }

  render() {
    return (
      <div className="app">
        <div className="row">
          <div className="mixed-chart">
            <Chart
              options={this.state.options}
              series={this.state.series}
              type="bar"
              width={"500"}
              height={'auto'}
            
            />
          </div>
        </div>
      </div>
    );
  }
}

export default AdminChart;