import React, { useState } from 'react';
import YouTube from 'react-youtube';

const YoutubeApi = () => {

    const [youtube, setYoutube] = useState<any>();
    const [currentTime, setCurrentTime] = useState<any>();


    console.log(currentTime,"현시간");

    const opts:any = {
        height: '390',
        width: '640',
    };

    const ReadyHandler = (e:any) => {
        console.log(e.target.playerInfo.duration);
        console.log(e.target,"target");
        setYoutube(e.target);
        console.log(e.target.playVideo,"target");
    }
    
    const ShowData = () => {
        console.log("눌렀다")
        const newData =  {...youtube};
        console.log(newData,"newData");
    }

    return(
        <>
        <button onClick={()=>{
            youtube.playVideo();
        }}>시작버튼</button>
        <YouTube onReady={ReadyHandler} videoId="2g811Eo7K8U" opts={opts}  />
        <button onClick={(e:any) => {
            youtube.pauseVideo();
            console.log(youtube.playerInfo.currentTime,"stopVideo");
            setCurrentTime(youtube.playerInfo.currentTime);
        }}>
            스탑버튼
        </button>
        <div onClick={ShowData}>
            데이터보기
        </div>

        <button>Controlexcel</button>
        </>
    );
}

export default YoutubeApi;


 
