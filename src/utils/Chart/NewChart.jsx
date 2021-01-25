import React, { useState,useEffect } from 'react';
import Chart from 'react-apexcharts';
import NewChartModule from './NewChartModule.module.css';


//data를 받을것이고, text= 전체정답률, 단어 정답률, 문장정답률 , 더빙수행
const NewChart = ({
  data1,
  data2,
  text1,
  ChartSize="220"}) => {

    if(data1 === undefined) {
      data1 = 1;
    }
    if(data2 === undefined) {
      data2 = 0;
    }



    let series1 = [data1,1-data1];



  const [options,setOptions] = useState(
    {
      dataLabels: {
        enabled: false
      },
      legend: {
        show:false
      },
      fill: {
        colors: [ '#8484cd','#cb5f5f']
      },
  }
);
  

  return(
    <div className={NewChartModule.donut}>
        <Chart options={options} series={series1} type="donut" width={ChartSize} />
        <div>
          <div className={NewChartModule.Rate}>
            <p>{text1}</p>
            <p>{Math.floor(data1*100)}%</p>
            <p>오답률 {100 - (Math.floor(data1*100))} %</p>
          </div>
        </div>
    </div>
  );
}

export default NewChart;