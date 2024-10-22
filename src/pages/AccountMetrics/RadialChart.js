import React from "react";
import ReactApexChart from "react-apexcharts";


const RadialChart = ({ data = 0, chartId }) => {
  const series = [data];
  const options = {
    colors: ["#F26122"],
    chart: {
        type: 'radialBar',
        // width: 140,
        // height: 140,
        offsetX:25,
        // offsetY:10,
      },
    legend:{
        show:false
    },
    plotOptions: {
    radialBar: {
        offsetX: -30,
        offsetY: -15,
        hollow: {
            background: 'transparent',
            size: '45%',
            imageWidth: 10,
            imageHeight: 10,
            imageOffsetX: 0,
            imageOffsetY: 0,
        },
        track:{
            background: '#616184',
        },
        dataLabels: {
            show: false
        }
    },
    },
  };


  
  return (
    <div id={chartId}>
      <ReactApexChart type='radialBar' options={options} series={series} />
    </div>
  );
};
export default RadialChart;