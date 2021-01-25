import React from 'react';
import styled from 'styled-components';

const P = styled.p`
    color:blue;
    font-size:14pt;
    font-weight:300;
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

const ShowDataDubIng:React.FC<Props> = ({Dub}) => {
   
    
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
            return(
                <div key={index}>
                    <p>더빙진행도</p>        
                    <P>{item.carried}/{item.total}</P>        
                </div>
            );
        })}
        </>
    );
}

export default ShowDataDubIng;