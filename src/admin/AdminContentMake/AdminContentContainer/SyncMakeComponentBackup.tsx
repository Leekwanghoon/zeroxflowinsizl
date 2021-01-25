import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import Youtube from 'react-youtube';
import Button1 from '../../../utils/Button1';
import { PlayIcon, RightArrow, StopIcon } from '../../../utils/Icons';
import TimeApi from '../../../utils/Function/TimeApi';
import getTimeApi from '../../../utils/Function/getTimeApi';
import getStringTimeApi from '../../../utils/Function/getStringTimeApi';
const Container = styled.div`
    display:flex;
`;

const LeftHalf = styled.div`
    width:50%;
    display: flex;
    flex-direction:column;
    margin-top: 80px;
    margin-right: 30px;
`;

const YoutubeRegion = styled.div`

`;

const Description = styled.span`
    font-size: 13px;
    font-weight: 400;
    color: gray;
`;

const RightHalf = styled.div`
    width:50%;
    display: flex;
    flex-direction:column;
    margin-top: 80px;
`;

const RightWrapper = styled.div`

`;

const TextArea = styled.textarea`
    width:100%;
    background-color: rgb(228 215 215);
    font-family: "Helvetica Neue", Light;
    font-size: 18px;
    height: 100px;
    padding-right: 12px;
    word-break: break-all;
    border: 1px;
    border-radius: 12px;
    resize: none;
    padding-left:20px;
`;

const TimeRegion = styled.div`
    width:100%;
    display:flex;
    justify-content: space-between;
    margin:5px;
`;

const Input = styled.input`
    width: 60px;
    font-size: 10px;
    font-weight: 300;
    height: 20px;
`;

const RightBottomRegion = styled.div`
    display:flex;
    justify-content: space-between;
    align-items: center;
`;

const RightBottomLeft = styled.div`
    display: flex;
    height: 100%;
    justify-content: center;
    align-items: center;
    flex-direction:column;
`;

const RightBottomMiddle = styled.div`
    width: 100%;
    display: flex;
    height: 100%;
    justify-content: center;
    align-items: center;
    flex-direction:column;
`;

const RightDiv = styled.div`
    display:flex;
    align-items:center;
`;

const RightBottomRight =  styled.div`
    display: flex;
    height: 100%;
    justify-content: center;
    align-items: center;
    flex-direction:column;
`;


const SPAN = styled.span`
    font-size: 20px;
    font-weight: bold;
    margin: 10px;
`;

const NextButtonWrap = styled.div`
    display:flex;
    justify-content: flex-end;
`;

type Props = {
    SentenceContents:any;
    SentenceUrl:any;
    SentenceParagraphs:any;
    setState:any;
    CookieValue:any;
}

const SyncMakeComponent = ({SentenceContents,
SentenceUrl,
SentenceParagraphs,
setState,
CookieValue}:Props) => {


    const dummySentence = [
        {
            pk:1,
            start:"00:00:00.000",
            end:"00:00:00.000"
        },
        {
            pk:2,
            start:"00:00:00.000",
            end:"00:00:00.000"
        },
        {
            pk:3,
            start:"00:00:00.000",
            end:"00:00:00.000"
        },
        {
            pk:4,
            start:"00:00:00.000",
            end:"00:00:00.000"
        },
        {
            pk:5,
            start:"00:00:00.000",
            end:"00:00:00.000"
        },
        {
            pk:6,
            start:"00:00:00.000",
            end:"00:00:00.000"
        },
        {
            pk:7,
            start:"00:00:00.000",
            end:"00:00:00.000"
        },
    ]

    const [youtube,setYoutubeData]  = useState<any>();
    const [totalTime, setTotalTime] = useState<number | undefined>(0);
    const [currentTime, setCurrentTime] = useState<number | undefined>(0);
    
    
    const [leftInputTime,setleftInputTime] = useState<string>("00:00:00.000");
    const [rightInputTime,setrightInputTime] = useState<string>("00:00:00.000");

    const [leftInputValue,setleftInputValue] = useState(0);
    const [RightInputValue,setRightInputValue] = useState(0);
    
    console.log(totalTime);

    let body = {
        contents:SentenceContents,
        sentences:SentenceParagraphs
    }


    console.log(SentenceContents,SentenceUrl,SentenceParagraphs);

    const opts:any = {
        width: "100%",
        height: "400px",
        playerVars: {
            'origin': 'http://localhost:3000'
        },
    }
    const Id = SentenceUrl;
    const youtubeId = Id.slice(32,43);
    const ongetYoutubeApi = (e:any) => {
        const duration:any = e.target.playerInfo.duration;
        const currentTime:any = e.target.playerInfo.currentTime;
        console.log(currentTime,"현시간");
        setTotalTime(duration);
        setYoutubeData(e.target);
        setCurrentTime(currentTime); //영상 현재시간
        // setYoutubeTitle(YoutubeTitle);
    }

    

    //왼쪽추가버튼 누르기
    const onClickLeftAddButton = () => {     
        const newLeftTime = TimeApi(leftInputTime,leftInputValue,false,false);
        setleftInputTime(newLeftTime);
    }
    //오른쪽 추가버튼 누리기
    const onClickRightAddButton = () => {
        const newLeftTime = TimeApi(rightInputTime,RightInputValue,false,false);
        setrightInputTime(newLeftTime);
    }

    //왼쪽시간변화시키기
    const leftInputValueChange = (e:any) => {
        setleftInputValue(e.target.value);
    }
    //오른쪽 시간변화시키기
    const RightInputValueChange = (e:any) => {
        setRightInputValue(e.target.value);
    }
    //왼쪽화살표 1초올린거
    const onChangeLeftUpOneSecondsTime = () => {   
        const newLeftTime = TimeApi(leftInputTime,leftInputValue,true,false);
        setleftInputTime(newLeftTime); 
    }
     //왼쪽화살표 1초내리기
    const onChangeLeftDownOneSecondsTime = () => {
        const newLeftTime = TimeApi(leftInputTime,leftInputValue,true,true);
        setleftInputTime(newLeftTime);
       
    }
    //오른쪽화살표 1초내리기
    const onChangeRightDownOneSecondsTime = () => {
        const newLeftTime = TimeApi(rightInputTime,leftInputValue,true,true);
        setrightInputTime(newLeftTime);   
    }
    //오른쪽화살표 1초올리기
    const onChangeRightUpOneSecondsTime = () => {
        const newLeftTime = TimeApi(rightInputTime,leftInputValue,true,false);
        setrightInputTime(newLeftTime);
    }
    //시작버튼
    const onStartPlayVideo = () => {
        const currentSeconds = getTimeApi(leftInputTime);
        console.log(currentSeconds);
        youtube.seekTo(currentSeconds);
        youtube.playVideo();
    }
    //잇고끊기
    const onClickButton = () => {
        console.log("잇고끊기 버튼을 누름");
        youtube.pauseVideo();
        const Time = getStringTimeApi(currentTime);
        console.log(Time,"현시간");
        setrightInputTime(Time);
    }
    const onStopPlayVideo = () => {
        console.log("StopButton누름");
        youtube.pauseVideo();
    }

    const onStateChange = (e:any) => {
        const currentTime:any = e.target.playerInfo.currentTime;
        console.log(currentTime,"현시간");
        setYoutubeData(e.target);
        setCurrentTime(currentTime); //영상 현재시간
    }

    const GoMakeSentence =(e:any) => {
        setState(4);
    }

        
    return(
        <Container>
            <LeftHalf>
                <YoutubeRegion>
                    <Youtube onStateChange={onStateChange} onReady={ongetYoutubeApi} opts={opts} videoId={youtubeId} />
                </YoutubeRegion>
                <div>
                    <Description>
                        문장이 시작되고 끝나는 시점을 1초, 0.3초 단위로 조절할 수 있습니다.
                    </Description>
                </div>
                <div>
                    <Description>
                        첫번째 문장이 끝나는 지점에서 바로 다음 문장을 시작하려면 잇고 끊기 버튼을 눌러주세요.
                    </Description>
                </div>
                <div>
                    <Description>
                        영어 문장 싱크를 맞추면 한국어 뜻 싱크도 자동으로 맞춰지므로 별도의 작업이 필요하지 않습니다.
                    </Description>
                </div>
            </LeftHalf>
            <RightHalf>
                {dummySentence.map((sentence:any,index:any) => {
                    console.log(sentence);
                    return(
                        <div key={index}>
                        <RightWrapper>
                            <TextArea readOnly value={sentence.eng} defaultValue={sentence.eng} />
                            <TimeRegion>
                                <Input readOnly value={leftInputTime} />
                                <Input readOnly value={rightInputTime} />
                            </TimeRegion>
                            <TimeRegion>
                                <Input type="number" value={leftInputValue} onChange={leftInputValueChange} />
                                <Input type="number" value={RightInputValue} onChange={RightInputValueChange} />
                            </TimeRegion>
                            <TimeRegion>
                                <Button1 heightSize="40px" text="추가" onClick={onClickLeftAddButton} size="60px" />
                                <Button1 heightSize="40px" text="추가" onClick={onClickRightAddButton} size="60px" />
                            </TimeRegion>
                        </RightWrapper>
                        <RightBottomRegion>
                        <RightBottomLeft>
                            <div style={{display:'flex', justifyContent: 'center', alignItems:'center', flexDirection:'row'}}>
                                <div onClick={onChangeLeftDownOneSecondsTime} style={{transform: "rotate(180deg)"}}><RightArrow /></div>
                                <SPAN>1.0</SPAN>
                                <div onClick={onChangeLeftUpOneSecondsTime}><RightArrow /></div>
                            </div>
                            <div style={{display:'flex', justifyContent: 'center', alignItems:'center', flexDirection:'row'}}>
                                <div style={{transform: "rotate(180deg)"}}><RightArrow /></div>
                                <SPAN>0.3</SPAN>
                                <div><RightArrow /></div>
                            </div>
                        </RightBottomLeft>
                        <RightBottomMiddle>
                            <RightDiv>
                                <PlayIcon onClick={onStartPlayVideo} size="30px" />
                                <Button1 margin="40px" text="잇고 끊기" size="100px" heightSize="40px" onClick={onClickButton} />
                                <StopIcon onClick={onStopPlayVideo} size="30px" />
                            </RightDiv>
                        </RightBottomMiddle>
                        <RightBottomRight>
                            <div style={{display:'flex', justifyContent: 'center', alignItems:'center', flexDirection:'row'}}>
                                <div onClick={onChangeRightDownOneSecondsTime} style={{transform: "rotate(180deg)"}}><RightArrow /></div>
                                <SPAN>1.0</SPAN>
                                <div onClick={onChangeRightUpOneSecondsTime}><RightArrow /></div>
                            </div>
                            <div style={{display:'flex', justifyContent: 'center', alignItems:'center', flexDirection:'row'}}>
                                <div style={{transform: "rotate(180deg)"}}><RightArrow /></div>
                                <SPAN>0.3</SPAN>
                                <div><RightArrow /></div>
                            </div>
                        </RightBottomRight>
                    </RightBottomRegion>
                    </div>
                    );
                })}
                
                <NextButtonWrap>
                    <Button1 text="저장하고 다음으로" size="120px" heightSize="40px" onClick={GoMakeSentence}/>
                </NextButtonWrap>
            </RightHalf>
        </Container>
    );
}

export default SyncMakeComponent;