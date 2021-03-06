import React, { useEffect, useState } from 'react';
import Helmet from 'react-helmet';
import styled from 'styled-components';
import Button1 from '../../../utils/Button1';
import CategoryModule from '../Utils/CategoryModule';
import InputModule from '../Utils/InputModule';
import TextAreaModule from '../Utils/TextAreaModule';
import Youtube from 'react-youtube';
import { getRegisterMediaTool } from '../../../utils/Function/AsyncFunction';
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
    setState: any;
    setContents:any;
    setParagraphs:any;
}



//AdminContentMakeManage type은 여기서 바꿔
//얘부모는 AdminContentMakeManageMain
const MedialToolManageComponent = ({setContents,
    setParagraphs, setState,CookieValue}:Props) => {
    

    
    const [youtubeURL,setYoutubeUrl] = useState<string>("");
    const [YoutubeTitle,setYoutubeTitle] = useState<any>("");
    const [CourseTitle,setCourseTitle] = useState<string>("");
    const [Captions,setCaptions] = useState<string>("");


    const [totalTime, setTotalTime] = useState<number | undefined>(0);

    const [youtubeId, setYoutubeID] = useState<string>("");


    const [EmptyArray, setEmptyArray] = useState<number[]>([]);
    console.log(EmptyArray,"EmptyArray");

    
    const onNextButtonClick = () => {
       let body = {
            youtube: youtubeURL,    //String url
            youtubeTitle: YoutubeTitle, //유튜브영상제목 String
            length:totalTime,  //Number 유튜브 영상길이 단위 seconds
            categories: EmptyArray, //카테고리 Pk list(Number[])
            title:CourseTitle,//영상제목(String)
            captions: Captions // 컨텐츠 가사 및 자막(String)
       }
    getRegisterMediaTool(CookieValue,body)
            .then(function(data) {
                if(data.status === 200) {
                    console.log(data.data,"데이터확인");
                    setContents(data.data.contents);
                    setParagraphs(data.data.paragraphs);
                } else {
                    console.log("영상마법사를 만드는데 실패")
                }
            }).catch(function(err) {
                alert("데이터를 불러오는데 실패했당");
                console.log(err);
            })
    setState(2);
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

    const onClickCheckButton = (pk:any,index:any) => {
        if(EmptyArray.includes(pk)) {
            //pk = 1,2,3,4,5 index = 0,1,2,3,4
            // console.log(EmptyArray.findIndex(pk));
            console.log(EmptyArray.indexOf(pk));
            EmptyArray.splice(EmptyArray.indexOf(pk),1);
            console.log(EmptyArray);
            setEmptyArray(EmptyArray);
        } else {
            const array1 = EmptyArray.concat(pk);
            array1.sort(function(a,b) {
                return a-b;
            })
            console.log(pk,"pkpk");
            console.log(index,"index");
            // const array1 = EmptyArray.splice(index,0,pk);
            setEmptyArray(array1);
        }
        //State2.로 변화해줘야하고
        // 유효성처리도 해줘야한다.
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
                <CategoryModule EmptyArray={EmptyArray} onClickCheckButton={onClickCheckButton} CookieValue={CookieValue} />
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