import React from 'react';
import ApexChart from 'react-apexcharts';

const LineChart = ({Data,
    Data1}) => {


    if(Data === undefined) {
        Data = [0,0,0];
    }
    if(Data1 === undefined) {
        Data1 = [0,0,0];
    }
        
    

    const series = [
        {
            name:"내점수 평균점수",
            data:[Data[0] ,Data1[0],Data[1],Data1[1],Data[1],Data1[2]]
        }
]

    const options = {
        chart: {
            height:350,
            type:"bar",
            toolbar: {
                show: false
            }
        },
        plotOptions: {
            bar: {
              columnWidth: '30%',
              distributed: true
            }
        },
        xaxis: {
            categories: [
                ["단어 공부량", "지난 주 공부량"],
                ["단어 공부량", "이번 주 공부량"],
                ["문장 공부량", "지난 주 공부량"],
                ["문장 공부량", "이번 주 공부량"],
                ["더빙 공부량", "지난 주 공부량"],
                ["더빙 공부량", "이번 주 공부량"],
            ]
        },
        fill: {
            colors: ["black", 'gray']
        },
        labels: {
            style: {
              colors: "yellow",
              fontSize: '5px'
            }
        }
    }

    
    return(
        <>
            <ApexChart options={options} width="1000" series={series} type="bar" height={700}  />
        </>
    );
}

export default LineChart;