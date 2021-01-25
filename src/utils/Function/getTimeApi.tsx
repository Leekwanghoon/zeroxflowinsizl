import React, { useState } from 'react';


//IsArrow는 화살표 = true
// IsArrow false는 추가 버튼

function getTimeApi(InputTime:any) {
    const getCurrentHour = InputTime.substring(0,2);
    const getCurrentMin = InputTime.substring(3,5);
    const getCurrentSeconds = InputTime.substring(6,8);

    const HourToSeconds = parseInt(getCurrentHour)*60*60;
    const MinToSeconds = parseInt(getCurrentMin)*60;
    const SecondsToSeconds = parseInt(getCurrentSeconds);

    const TotalSeconds = HourToSeconds + MinToSeconds + SecondsToSeconds;
    

     return TotalSeconds;
}


export default getTimeApi;

