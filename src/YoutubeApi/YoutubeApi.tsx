import React from 'react';
import YouTube from 'react-youtube';

const YoutubeApi = () => {

    const opts:any = {
        height: '390',
        width: '640',
    };

    const ReadyHandler = (e:any) => {
        console.log(e.target.playerInfo.duration);
        console.log(e.target);
        console.log(e.target.videoData.title);
    }
    return(
        <YouTube onReady={ReadyHandler} videoId="2g811Eo7K8U" opts={opts}  />
    );
}

export default YoutubeApi;


 
