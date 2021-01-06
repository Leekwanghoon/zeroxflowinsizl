import React, { useEffect, useState } from 'react';
import Helmet from 'react-helmet';
import styled from 'styled-components';
import Button1 from '../../../utils/Button1';
import CategoryModule from '../Utils/CategoryModule';
import InputModule from '../Utils/InputModule';
import TextAreaModule from '../Utils/TextAreaModule';
import Youtube from 'react-youtube';
import axios from 'axios';
const Container = styled.div`
    margin-top: 50pt;
`;
const Title = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    text-align: left;
    width: 628pt;
`;
const Span = styled.span`
    font-size: 17px;
    color: rgb(0, 0, 0);
    font-family: "Helvetica Neue", Light;
`;

const TopInputDiv = styled.div`
    display: flex;
    flex-direction: row;
    align-items: flex-start;
    margin-top: 8px;
`;

const YoutubeDIV = styled.div`
    margin-top: 30px;
    height:380px;
`;

const MiddleInputDiv = styled.div`
`;

const MiddleTitle = styled.p`
    color: #000;
    font-family: Helvetica Neue, Bold;
    font-weight: bold;
    font-size: 17px;
`;
const SmallTitle = styled.p`
    color: #707070;
    font-family: Helvetica Neue, Light;
    font-size: 13px;
    margin-top: 6px;
`;


const ButtonDIV = styled.div`
    display:flex;
    margin-top: 20px;
    width:819pt;
    justify-content:flex-end;
`;


type Props = {
    CookieValue: Number;
}




const MedialToolManageComponent = ({CookieValue}:Props) => {


    const [youtubeURL,setYoutubeUrl] = useState<string>("");
    const [YoutubeTitle,setYoutubeTitle] = useState<any>("");
    const [CourseTitle,setCourseTitle] = useState<string>("");
    const [Captions,setCaptions] = useState<string>("");


    const [pkList, setPkList] = useState<Number[]>([]);

    const [totalTime, setTotalTime] = useState<number | undefined>(0);

    const [youtubeId, setYoutubeID] = useState<string>("");


    const [EmptyArray, setEmptyArray] = useState<number[]>([]);
    console.log(EmptyArray);

   const onNextButtonClick = () => {
       let body = {
            youtube: youtubeURL,    //String url
            youtubeTitle: YoutubeTitle, //유튜브영상제목 String
            length:totalTime,  //Number 유튜브 영상길이 단위 seconds
            categories: EmptyArray, //카테고리 Pk list(Number[])
            title:CourseTitle,//영상제목(String)
            captions: Captions // 컨텐츠 가사 및 자막(String)
       }
       axios.post(`https://1hour.school/api/v1/contents/create/frame`, body, {
        headers: {
            Authorization: CookieValue
        }
       }).then(response => {console.log(response.data)});
   }

   const youtubeUrlChangeHandler = (e:any) => {
       setYoutubeUrl(e.target.value);
       const suburl = e.target.value.slice(32,43);
       setYoutubeID(suburl);
   }
   
   const titleChangeHandler = (e:any) => {
        setCourseTitle(e.target.value);
   }

   const CaptionsChangeHandler = (e:any) => {
        setCaptions(e.target.value);
   }


   const ongetYoutubeApi = (e:any) => {

        const duration:any = e.target.playerInfo.duration;
        const YoutubeTitle:any = e.target.playerInfo.videoData.title;

        setTotalTime(duration);
        setYoutubeTitle(YoutubeTitle);
    }

    //삭제하는거 해결해야함
    const onClickCheckButton = (pk:number,index:any) => {
        if(EmptyArray.includes(pk)) {
            
            // console.log(pk,"는 포함되 있다 제거해라",index,"index값");
            // const result = EmptyArray.filter((emptyArray:any) => {
            //     if(emptyArray.includes(pk)) {
            //         console.log(pk,"pk");
            //     }
            // });
            // console.log(result,"result");
        } else {
            const array1 = EmptyArray.concat(pk);
            array1.sort(function(a,b) {
                return a-b;
            })
            setEmptyArray(array1);
        }
    }
   
    

   const opts:any = {
        width: "480",
        height: "320",
        playerVars: {
            'origin': 'http://localhost:3000'
        },
   }

    return(
        <>
        <Helmet>
                <title>
                    콘텐츠 만들기 &gt; 영상 마법사
                </title>
        </Helmet>
        <Container>
            <Title>
                <Span>영상 주소*</Span>
                <Span>카테고리*</Span>
            </Title>
            <TopInputDiv>
                <InputModule value={youtubeURL} onChange={youtubeUrlChangeHandler} widthSize="624pt" />
                <CategoryModule onClickCheckButton={onClickCheckButton} CookieValue={CookieValue} />
            </TopInputDiv>
            <div style={{position:'absolute', top:'530px'}}>
            {youtubeId !== "" ? <YoutubeDIV>
                                    <SmallTitle>{YoutubeTitle.slice(0,40)}...</SmallTitle>
                                    <Youtube onReady={ongetYoutubeApi} opts={opts} videoId={youtubeId} />
                                </YoutubeDIV> 
            : <YoutubeDIV></YoutubeDIV>}
            <MiddleInputDiv>
                <MiddleTitle>수업 제목*</MiddleTitle>
                <InputModule value={CourseTitle} onChange={titleChangeHandler} widthSize="819pt" />
            </MiddleInputDiv>
            <MiddleInputDiv>
                <MiddleTitle>영어 가사/캡션*</MiddleTitle>
                <SmallTitle>마침표/ 개행을 기준으로해서 자동으로 문장마다 끊어집니다.</SmallTitle>
                <TextAreaModule value={Captions} onChange={CaptionsChangeHandler} widthSize="819pt" minHeightSize="681px" />
            </MiddleInputDiv>
            <ButtonDIV>
                <Button1 heightSize="40px" size="100pt" text="저장하고 다음으로" onClick={onNextButtonClick} />
            </ButtonDIV>
            </div>
        </Container>
        </>
    );
}

export default MedialToolManageComponent;