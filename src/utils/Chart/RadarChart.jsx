import React from 'react';
import ReactApexChart from 'react-apexcharts';



const RadarChart = ({Data}) => {
  

  console.log(Data);
  if(Data === undefined) {
    Data = [0,0,0,0];
  }

  const series =  [{
    name: 'Series 1',
    data: [Data[0], Data[1], Data[2], Data[3]],
  }]
  const options=  {
    chart: {
      type: 'radar',
      toolbar: {
        show: false
      }
    },
    title: {
      text: '수행능력평가'
    },
    xaxis: {
      categories: ['단어', '문장', '더빙', '문제']
    },
    yaxis: {
      show: true,
      tickAmount: 10,
      min: 0,
      max: 100,
    }

  }

  return(
    <>
      <ReactApexChart 
        options={options} 
        series={series} 
        type="radar" 
        height={450}
        width={450}
      />
    </>
  );
}

export default RadarChart;