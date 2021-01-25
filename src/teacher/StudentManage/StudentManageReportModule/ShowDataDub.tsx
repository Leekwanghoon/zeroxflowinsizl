import React from 'react';
import styled from 'styled-components';
import Youtube from 'react-youtube';

const YoutubeDIV = styled.div`
    margin-top: 30px;
    height:380px;
`;

const SmallTitle = styled.p`
    color: #707070;
    font-family: Helvetica Neue, Light;
    font-weight:600;
    font-size: 20pt;
    margin-top: 6px;
`;


type NewType = {
    carried:number
    contents:number
    title:string
    total:number
    url:string
    youtubeTitle:string
}
type Props = {
    Dub: NewType[] | undefined
}

const ShowDataDub:React.FC<Props> = ({Dub}) => {
   
    
    console.log(Dub,"DUB")

    if(Dub === undefined) {
        Dub = [{
            carried:0,
            contents:0,
            total:0,
            url:"",
            title:"",
            youtubeTitle:"",
        }]
    }

    //youtube
    console.log(Dub,"DUB");
    const opts:any = {
        width: "480",
        height: "320",
        playerVars: {
            'origin': 'http://localhost:3000'
        },
   }
   
   return(
       <>
        {Dub.map((item,index) => {
            let youtubeId = item.url.slice(32,43);
            return(
                <YoutubeDIV key={index}>
                    <SmallTitle>{item.youtubeTitle.slice(0,40)}...</SmallTitle>
                        <SmallTitle>{item.title.slice(0,40)}...</SmallTitle>
                    <Youtube opts={opts} videoId={youtubeId} />
                </YoutubeDIV> 
                );
            })}
        </>
    );
}

export default ShowDataDub;