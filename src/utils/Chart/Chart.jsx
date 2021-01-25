import React from 'react';


const data = [1,3,5,7];



const Chart = () => {
  return(
    <div>
      {data.map((item,index) => {
        return(
          <div key={index}>
            {item}
          </div>
        );
      })}
    </div>
  );
}

export default Chart;