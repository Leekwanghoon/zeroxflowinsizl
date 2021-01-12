import React, { useState } from 'react';
import YouTube from 'react-youtube';

const YoutubeApi = () => {

    const [youtube, setYoutube] = useState<any>();
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

    return(
        <>
        <button onClick={()=>{
            youtube.playVideo();
        }}>버튼</button>
        <YouTube onReady={ReadyHandler} videoId="2g811Eo7K8U" opts={opts}  />
        </>
    );
}

export default YoutubeApi;


 
