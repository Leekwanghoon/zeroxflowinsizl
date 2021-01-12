import React from 'react';

const TimeControl = () => {

    const InputTime = 32;

    const timeArray = ["00:00:00.000"];

    console.log(timeArray.length);

    if(InputTime > 86400) {
        const day = Math.floor(InputTime/ 86400); //일
        const restdayTime = (InputTime/86400) - day; //1일
        console.log(day,"일");

        if( day > 10 ) {
            const dayArray = [String(day)];
        } else {
            const dayArray = [String("0"+ day)];
            console.log(dayArray);
        }
        const RealDayTime = restdayTime * 86400; //남은시간 초로 계산
        //남은 시간3600초
        if( RealDayTime > 3600 ) {
            const hour = Math.floor(RealDayTime/3600); //1시간
            const resthourTime = (RealDayTime/3600) - hour;
            console.log(hour,"시간");
            const RealHourTime = resthourTime * 3600;

            if( day > 10 ) {
                const hourArray = [String(hour)];
            } else {
                const hourArray = [String("0"+ hour)];
                console.log(hourArray);
            }


            if(RealHourTime > 60) {
                const min = Math.floor(RealHourTime/60); // 1분
                const restMinTime = (RealHourTime/60) - min;
                console.log(min,"분");

                if( min > 10 ) {
                    const minArray = [String(min)];
                } else {
                    const minArray = [String("0"+ min)];
                    console.log(minArray);
                }

                console.log(restMinTime,"restMinTime");

                const RealSecondes = Math.floor(restMinTime * 60); //1초
                console.log(RealSecondes,"초");

                if( RealSecondes > 10 ) {
                    const secArray = [String(RealSecondes)];
                    console.log(secArray);
                } else {
                    const secArray = [String("0"+ RealSecondes)];
                    console.log(secArray);
                }

            }
        }
    } else {
        //일 이 0인경우
        const day = 0; //일
        const restdayTime = 0; //1일
        console.log(day,"일");

        const dayArray = ["00"];
        console.log(dayArray);
        const RealDayTime = restdayTime * 86400; //남은시간 초로 계산
        //남은 시간3600초
        if( RealDayTime > 3600 ) {
            const hour = Math.floor(RealDayTime/3600); //1시간
            const resthourTime = (RealDayTime/3600) - hour;
            console.log(hour,"시간");
            const RealHourTime = resthourTime * 3600;

            if( day > 10 ) {
                const hourArray = [String(hour)];
            } else {
                const hourArray = [String("0"+ hour)];
                console.log(hourArray);
            }


            if(RealHourTime > 60) {
                const min = Math.floor(RealHourTime/60); // 1분
                const restMinTime = (RealHourTime/60) - min;
                console.log(min,"분");

                if( min > 10 ) {
                    const minArray = [String(min)];
                } else {
                    const minArray = [String("0"+ min)];
                    console.log(minArray);
                }

                console.log(restMinTime,"restMinTime");

                const RealSecondes = Math.floor(restMinTime * 60); //1초
                console.log(RealSecondes,"초");

                if( RealSecondes > 10 ) {
                    const secArray = [String(RealSecondes)];
                    console.log(secArray);
                } else {
                    const secArray = [String("0"+ RealSecondes)];
                    console.log(secArray);
                }

            }
        } else {
             //시간이 0인경우
             // RealDayTime = 0
             const RealHourTime = 0;
     
             const HourArray = ["00"];


            if(RealHourTime > 60) {
                const min = Math.floor(RealHourTime/60); // 1분
                const restMinTime = (RealHourTime/60) - min;
                console.log(min,"분");

                if( min > 10 ) {
                    const minArray = [String(min)];
                } else {
                    const minArray = [String("0"+ min)];
                    console.log(minArray);
                }

                console.log(restMinTime,"restMinTime");

                const RealSecondes = Math.floor(restMinTime * 60); //1초
                console.log(RealSecondes,"초");

                if( RealSecondes > 10 ) {
                    const secArray = [String(RealSecondes)];
                    console.log(secArray);
                } else {
                    const secArray = [String("0"+ RealSecondes)];
                    console.log(secArray);
                }
            } else {
                //분이 0인경우
                const min = 0 // 1분
                const restMinTime = 0
                console.log(min,"분");

                const minArray = ["00"];
                console.log(minArray);

                console.log(restMinTime,"restMinTime");

                const RealSecondes = Math.floor(restMinTime * 60); //1초
                console.log(RealSecondes,"초");

                if( RealSecondes > 10 ) {
                    const secArray = [String(RealSecondes)];
                    console.log(secArray);
                } else {
                    const secArray = [String("0"+ RealSecondes)];
                    console.log(secArray);
                }
            }
        }
    }

    return(
        <div>
            TimeControl
        </div>
    );
}

export default TimeControl;