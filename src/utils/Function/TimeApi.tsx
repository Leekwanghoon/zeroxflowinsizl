import React, { useState } from 'react';


//IsArrow는 화살표 = true
// IsArrow false는 추가 버튼

function TimeApi(InputTime:any,InputValue:any,IsArrow:boolean,IsMinus:boolean) {
    const getCurrentHour = InputTime.substring(0,2); //01:30:000
    const getCurrentMin = InputTime.substring(3,5);
    const getCurrentSeconds = InputTime.substring(6,8);

    let AddSeconds;

    // console.log(getCurrentMin);
    // console.log(getCurrentSeconds);
    // console.log(parseInt(getCurrentHour));
    // console.log(parseInt(getCurrentMin));
    // console.log(parseInt(getCurrentSeconds));

    const HourToSeconds = parseInt(getCurrentHour)*60*60;
    const MinToSeconds = parseInt(getCurrentMin)*60;
    const SecondsToSeconds = parseInt(getCurrentSeconds);

    const TotalSeconds = HourToSeconds + MinToSeconds + SecondsToSeconds;
    // console.log(TotalSeconds,"총시간초");
    

    //10:10:16.000
    // console.log(HourToSeconds,"시"); //10 * 60 * 60 = 36000
    // console.log(MinToSeconds,"분"); //28 * 60 = 1680
    // console.log(SecondsToSeconds,"초"); //28 * 60 = 1680
    // console.log(InputValue,"leftInputValue"); //28 * 60 = 1680

    //IsArrow
    if(IsArrow) {
        AddSeconds = Number(TotalSeconds) + Number(1); 
        if(IsMinus) {
            AddSeconds = Number(TotalSeconds) - Number(1); 
            if(AddSeconds < 0) {
                AddSeconds = 0;
            }
        }
    } else {
        AddSeconds = Number(TotalSeconds) + Number(InputValue);
    }



    let hour:any = Math.floor(AddSeconds / 3600); //10시간
    let min:any = Math.floor((AddSeconds - hour*3600)/60); //10분
    let seconds:any = (AddSeconds - hour*3600)%60;
    // console.log(hour,"시간"); //10시간
    // console.log(min,"분"); //10분
    // console.log(seconds,"초"); //16초
   
    if(hour < 10) {
         hour = "0" + hour;
    }
    if( min < 10 ) {
        min = "0" + min;
     }
    if( seconds < 10 ) {
        seconds = "0" + seconds;
     }


    const newLeftTime = String(hour) + ":" + String(min) + ":" + String(seconds) + ".000";

     return newLeftTime;
}


export default TimeApi;

