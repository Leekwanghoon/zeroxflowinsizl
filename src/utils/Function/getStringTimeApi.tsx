import React, { useState } from 'react';


//IsArrow는 화살표 = true
// IsArrow false는 추가 버튼

function getStringTimeApi(AddSeconds:any) {
    

   


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


export default getStringTimeApi;

