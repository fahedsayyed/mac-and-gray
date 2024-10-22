import React from "react";
import ReactApexChart from "react-apexcharts";


const DonutChart = ({ data, chartId, color="#9747FF" }) => {
  const series = [data];
  const options = {
    colors: [color],
    chart: {
        type: 'radialBar',
        width: 140,
        height: 140,
        offsetX:10,
        offsetY:10,
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
            size: '20%',
            imageWidth: 10,
            imageHeight: 10,
            imageOffsetX: 0,
            imageOffsetY: 0,
        },
        track:{
            background: 'rgba(255, 255, 255, 0.02)',
        },
        dataLabels: {
            show: false
        }
    },
    },
  };


  
  return (
    <div id={chartId}>
      <ReactApexChart type='radialBar' options={options} series={series} height={80} width={100} />
    </div>
  );
};
export default DonutChart;


