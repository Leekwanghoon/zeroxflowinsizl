import React, { useState } from 'react';
import styled from 'styled-components';
import Youtube from 'react-youtube';
import Button1 from '../../../utils/Button1';
import { PlayIcon, RightArrow, StopIcon } from '../../../utils/Icons';
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


    const [totalTime, setTotalTime] = useState<number | undefined>(0);
    
    
    const [leftInputTime,setleftInputTime] = useState<string>("00:00:00.000");
    const [rightInputTime,setrightInputTime] = useState<string>("00:00:00.000");

    const [leftInputValue,setleftInputValue] = useState(0);
    const [RightInputValue,setRightInputValue] = useState(0);
    
    console.log(totalTime);
    let body = {
        contents:SentenceContents,
        sentences:SentenceParagraphs
    }

    // const youtubeUrlChangeHandler = (e:any) => {
    //     setYoutubeUrl(e.target.value);
    //     const suburl = e.target.value.slice(32,43);
    //     setYoutubeID(suburl);
    // }


    console.log(SentenceContents,
        SentenceUrl,
        SentenceParagraphs);

    const opts:any = {
        width: "600",
        height: "400",
        playerVars: {
            'origin': 'http://localhost:3000'
        },
    }

    const Id = "https://www.youtube.com/watch?v=_T9FSwv1FrI";
    const youtubeId = Id.slice(32,43);
    console.log(youtubeId,"잘음");

    const ongetYoutubeApi = (e:any) => {

        const duration:any = e.target.playerInfo.duration;
        const YoutubeTitle:any = e.target.playerInfo.videoData.title;
        setTotalTime(duration);
        // setYoutubeTitle(YoutubeTitle);
    }


    const onClickLeftAddButton = () => {
        console.log("왼쪽 눌렀다");
        //시 분 초
        //"28:20:16.000"
        const getCurrentHour = leftInputTime.substring(0,2);
        const getCurrentMin = leftInputTime.substring(3,5);
        const getCurrentSeconds = leftInputTime.substring(6,8);


        console.log(getCurrentMin);
        console.log(getCurrentSeconds);
        console.log(parseInt(getCurrentHour));
        console.log(parseInt(getCurrentMin));
        console.log(parseInt(getCurrentSeconds));

        const HourToSeconds = parseInt(getCurrentHour)*60*60;
        const MinToSeconds = parseInt(getCurrentMin)*60;
        const SecondsToSeconds = parseInt(getCurrentSeconds);

        const TotalSeconds = HourToSeconds + MinToSeconds + SecondsToSeconds;
        console.log(TotalSeconds,"총시간초");
        

        //10:10:16.000
        console.log(HourToSeconds,"시"); //10 * 60 * 60 = 36000
        console.log(MinToSeconds,"분"); //28 * 60 = 1680
        console.log(SecondsToSeconds,"초"); //28 * 60 = 1680
        console.log(leftInputValue,"leftInputValue"); //28 * 60 = 1680



        const AddSeconds = Number(TotalSeconds) + Number(leftInputValue); // 2902

        let hour:any = Math.floor(AddSeconds / 3600); //10시간
        let min:any = Math.floor((AddSeconds - hour*3600)/60); //10분
        let seconds:any = (AddSeconds - hour*3600)%60;
        console.log(hour,"시간"); //10시간
        console.log(min,"분"); //10분
        console.log(seconds,"초"); //16초
       
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
        setleftInputTime(newLeftTime);

    }

    const onClickRightAddButton = () => {
        console.log("오른쪽 눌렀다");
        //시 분 초
        //"28:20:16.000"
        const getCurrentHour = rightInputTime.substring(0,2);
        const getCurrentMin = rightInputTime.substring(3,5);
        const getCurrentSeconds = rightInputTime.substring(6,8);


        console.log(getCurrentMin);
        console.log(getCurrentSeconds);
        console.log(parseInt(getCurrentHour));
        console.log(parseInt(getCurrentMin));
        console.log(parseInt(getCurrentSeconds));

        const HourToSeconds = parseInt(getCurrentHour)*60*60;
        const MinToSeconds = parseInt(getCurrentMin)*60;
        const SecondsToSeconds = parseInt(getCurrentSeconds);

        const TotalSeconds = HourToSeconds + MinToSeconds + SecondsToSeconds;
        console.log(TotalSeconds,"총시간초");
        

        //10:10:16.000
        console.log(HourToSeconds,"시"); //10 * 60 * 60 = 36000
        console.log(MinToSeconds,"분"); //28 * 60 = 1680
        console.log(SecondsToSeconds,"초"); //28 * 60 = 1680
        console.log(leftInputValue,"leftInputValue"); //28 * 60 = 1680



        const AddSeconds = Number(TotalSeconds) + Number(RightInputValue); // 2902

        let hour:any = Math.floor(AddSeconds / 3600); //10시간
        let min:any = Math.floor((AddSeconds - hour*3600)/60); //10분
        let seconds:any = (AddSeconds - hour*3600)%60;
        console.log(hour,"시간"); //10시간
        console.log(min,"분"); //10분
        console.log(seconds,"초"); //16초
       
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
        setrightInputTime(newLeftTime);
    }

    const leftInputValueChange = (e:any) => {
        setleftInputValue(e.target.value);
    }
    const RightInputValueChange = (e:any) => {
        setRightInputValue(e.target.value);
    }

    const onClickButton = () => {
        console.log("잇고끊기 버튼을 누름");
    }

    const onChangeLeftUpOneSecondsTime = () => {
        console.log("오른쪽 눌렀다");
        //시 분 초
        //"28:20:16.000"
        const getCurrentHour = leftInputTime.substring(0,2);
        const getCurrentMin = leftInputTime.substring(3,5);
        const getCurrentSeconds = leftInputTime.substring(6,8);


        console.log(getCurrentMin);
        console.log(getCurrentSeconds);
        console.log(parseInt(getCurrentHour));
        console.log(parseInt(getCurrentMin));
        console.log(parseInt(getCurrentSeconds));

        const HourToSeconds = parseInt(getCurrentHour)*60*60;
        const MinToSeconds = parseInt(getCurrentMin)*60;
        const SecondsToSeconds = parseInt(getCurrentSeconds);

        const TotalSeconds = HourToSeconds + MinToSeconds + SecondsToSeconds;
        console.log(TotalSeconds,"총시간초");
        

        //10:10:16.000
        console.log(HourToSeconds,"시"); //10 * 60 * 60 = 36000
        console.log(MinToSeconds,"분"); //28 * 60 = 1680
        console.log(SecondsToSeconds,"초"); //28 * 60 = 1680
        console.log(leftInputValue,"leftInputValue"); //28 * 60 = 1680



        const AddSeconds = Number(TotalSeconds) + Number(1); // 2902

        let hour:any = Math.floor(AddSeconds / 3600); //10시간
        let min:any = Math.floor((AddSeconds - hour*3600)/60); //10분
        let seconds:any = (AddSeconds - hour*3600)%60;
        console.log(hour,"시간"); //10시간
        console.log(min,"분"); //10분
        console.log(seconds,"초"); //16초
       
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
        setleftInputTime(newLeftTime);
    }
    const onChangeLeftDownOneSecondsTime = () => {
        console.log("오른쪽 눌렀다");
        //시 분 초
        //"28:20:16.000"
        const getCurrentHour = leftInputTime.substring(0,2);
        const getCurrentMin = leftInputTime.substring(3,5);
        const getCurrentSeconds = leftInputTime.substring(6,8);


        console.log(getCurrentMin);
        console.log(getCurrentSeconds);
        console.log(parseInt(getCurrentHour));
        console.log(parseInt(getCurrentMin));
        console.log(parseInt(getCurrentSeconds));

        const HourToSeconds = parseInt(getCurrentHour)*60*60;
        const MinToSeconds = parseInt(getCurrentMin)*60;
        const SecondsToSeconds = parseInt(getCurrentSeconds);

        const TotalSeconds = HourToSeconds + MinToSeconds + SecondsToSeconds;
        console.log(TotalSeconds,"총시간초");
        

        //10:10:16.000
        console.log(HourToSeconds,"시"); //10 * 60 * 60 = 36000
        console.log(MinToSeconds,"분"); //28 * 60 = 1680
        console.log(SecondsToSeconds,"초"); //28 * 60 = 1680
        console.log(leftInputValue,"leftInputValue"); //28 * 60 = 1680



        let AddSeconds = Number(TotalSeconds) - Number(1); // 2902

        if(AddSeconds < 0) {
            AddSeconds = 0;
        }

        let hour:any = Math.floor(AddSeconds / 3600); //10시간
        let min:any = Math.floor((AddSeconds - hour*3600)/60); //10분
        let seconds:any = (AddSeconds - hour*3600)%60;
        console.log(hour,"시간"); //10시간
        console.log(min,"분"); //10분
        console.log(seconds,"초"); //16초
       
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
        setleftInputTime(newLeftTime);
    }

    const onChangeRightDownOneSecondsTime = () => {
        console.log("오른쪽 눌렀다");
        //시 분 초
        //"28:20:16.000"
        const getCurrentHour = rightInputTime.substring(0,2);
        const getCurrentMin = rightInputTime.substring(3,5);
        const getCurrentSeconds = rightInputTime.substring(6,8);


        console.log(getCurrentMin);
        console.log(getCurrentSeconds);
        console.log(parseInt(getCurrentHour));
        console.log(parseInt(getCurrentMin));
        console.log(parseInt(getCurrentSeconds));

        const HourToSeconds = parseInt(getCurrentHour)*60*60;
        const MinToSeconds = parseInt(getCurrentMin)*60;
        const SecondsToSeconds = parseInt(getCurrentSeconds);

        const TotalSeconds = HourToSeconds + MinToSeconds + SecondsToSeconds;
        console.log(TotalSeconds,"총시간초");
        

        //10:10:16.000
        console.log(HourToSeconds,"시"); //10 * 60 * 60 = 36000
        console.log(MinToSeconds,"분"); //28 * 60 = 1680
        console.log(SecondsToSeconds,"초"); //28 * 60 = 1680
        console.log(leftInputValue,"leftInputValue"); //28 * 60 = 1680



        let AddSeconds = Number(TotalSeconds) - Number(1); // 2902

        if(AddSeconds < 0) {
            AddSeconds = 0;
        }

        let hour:any = Math.floor(AddSeconds / 3600); //10시간
        let min:any = Math.floor((AddSeconds - hour*3600)/60); //10분
        let seconds:any = (AddSeconds - hour*3600)%60;
        console.log(hour,"시간"); //10시간
        console.log(min,"분"); //10분
        console.log(seconds,"초"); //16초
       
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
        setrightInputTime(newLeftTime);
    }

    const onChangeRightUpOneSecondsTime = () => {
        console.log("오른쪽 눌렀다");
        //시 분 초
        //"28:20:16.000"
        const getCurrentHour = rightInputTime.substring(0,2);
        const getCurrentMin = rightInputTime.substring(3,5);
        const getCurrentSeconds = rightInputTime.substring(6,8);


        console.log(getCurrentMin);
        console.log(getCurrentSeconds);
        console.log(parseInt(getCurrentHour));
        console.log(parseInt(getCurrentMin));
        console.log(parseInt(getCurrentSeconds));

        const HourToSeconds = parseInt(getCurrentHour)*60*60;
        const MinToSeconds = parseInt(getCurrentMin)*60;
        const SecondsToSeconds = parseInt(getCurrentSeconds);

        const TotalSeconds = HourToSeconds + MinToSeconds + SecondsToSeconds;
        console.log(TotalSeconds,"총시간초");
        

        //10:10:16.000
        console.log(HourToSeconds,"시"); //10 * 60 * 60 = 36000
        console.log(MinToSeconds,"분"); //28 * 60 = 1680
        console.log(SecondsToSeconds,"초"); //28 * 60 = 1680
        console.log(leftInputValue,"leftInputValue"); //28 * 60 = 1680



        let AddSeconds = Number(TotalSeconds) + Number(1); // 2902

    
        let hour:any = Math.floor(AddSeconds / 3600); //10시간
        let min:any = Math.floor((AddSeconds - hour*3600)/60); //10분
        let seconds:any = (AddSeconds - hour*3600)%60;
        console.log(hour,"시간"); //10시간
        console.log(min,"분"); //10분
        console.log(seconds,"초"); //16초
       
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
        setrightInputTime(newLeftTime);
    }
        
    return(
        <Container>
            <LeftHalf>
                <YoutubeRegion>
                    <Youtube onReady={ongetYoutubeApi} opts={opts} videoId={youtubeId} />
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
                <RightWrapper>
                    <TextArea readOnly defaultValue="데이터 받아오는 곳 수정이 안됨" />
                    <TimeRegion>
                        <Input value={leftInputTime} />
                        <Input value={rightInputTime} />
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
                            <PlayIcon size="30px" />
                            <Button1 margin="40px" text="잇고 끊기" size="100px" heightSize="40px" onClick={onClickButton} />
                            <StopIcon size="30px" />
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
            </RightHalf>
        </Container>
    );
}

export default SyncMakeComponent;