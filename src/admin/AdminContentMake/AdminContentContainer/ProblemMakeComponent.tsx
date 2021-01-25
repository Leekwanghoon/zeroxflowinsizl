import React, { useState } from 'react';
import styled from 'styled-components';
import InputModule from '../Utils/InputModule';
import {XMark} from '../../../utils/Icons';
import TextAreaModule from '../Utils/TextAreaModule';
import upload from '../../../Images/images/images/uploadImage.png';
import checkBlue from '../../../Images/images/images/checkBlue.png';
import youtubeBlack from '../../../Images/images/images/youtubeBlack.png';
import AnswerComponent from '../Utils/AnswerComponent';
import Button1 from '../../../utils/Button1';
import axios from 'axios';
import {getMakeProblem} from '../../../utils/Function/AsyncFunction';
import {useHistory} from 'react-router-dom';


const Container = styled.div``;

const P = styled.p`
    font-size:21pt;
    color:#707070;
`;

const TitleDiv = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-around;
    margin-top: 87pt;
`;

const TextAreaDiv = styled.div`
    margin-top:15pt;
    position: relative;
    display:flex;
    justify-content: space-around;
`;

const ImgDiv = styled.div`
    position: absolute;
    top: 20px;
    right: 120px;
`;

const DIV = styled.div`
    display: flex;
    justify-content: center;
`;

const AnswerDiv = styled.div`
    width: 83%;
    margin-top:15pt;
`;

const DescriptionDIV = styled.div`
    background-color:#ffe31959;
    width:731pt;
    height:160pt;
    box-shadow: rgba(0, 0, 0, 0.16) 0px 3px 6px;
    border-radius: 12px;
    border: 0px;
    font-size: 19px;
    padding:21pt;
    color: rgb(112, 112, 112);
    font-family: "Helvetica Neue", Light;
`;

const MarginSpan = styled.span`
    margin-left:10px;
`;

const TextDIV = styled.div`
    margin-bottom: 10pt;
`;

const BottomButton = styled.div`
    margin-top: 15pt;
    display:flex;
    align-items:center;
    justify-content:flex-end;
    margin-right:70pt;
`;

type Props = {
    CookieValue:any;
    makeProblemContnets:any;
    makeProblemParagraphs:any;
}



interface SizeUrl {
    size: string
}

const UploadImage = styled.div`
    width: 100%;
    height: 128px;
    margin-bottom: 21px;
    background-image: url(${(props:SizeUrl) => props.size});
    background-color: #F4F4F4;
    background-position: center;
    background-repeat: no-repeat;
    background-size: cover;
    box-shadow: 0pt 3pt 6pt #00000029;
`;

const ProblemMakeComponent = ({CookieValue,
    makeProblemContnets,
    makeProblemParagraphs,
}:Props) => {

    const history = useHistory();


    const [title,setTitle] = useState<string>("");
    const [questionText,setquestionText] = useState<string>("");
        
    //commentaryImg
    const [commentaryImg,setCommentaryImg] = useState<number>(0);//pk
    const [commentaryUrl,setCommentaryUrl] = useState<string>("");//url
    

    //questionImg
    const [questionImg,setQuestionImg] = useState<number>(0); //pk
    const [questionUrl,setQuestionUrl] = useState<string>(""); //url
    

    const [commentaryText,setcommentaryText] = useState<string>("");
    
    //upload pk, url
    
    const [state1,setState1] = useState<boolean>(false); //correct
    const [state2,setState2] = useState<boolean>(false);
    const [state3,setState3] = useState<boolean>(false);
    const [state4,setState4] = useState<boolean>(false);
    const [state5,setState5] = useState<boolean>(false);
    
    const [answer1,setAnswer1] = useState<string>(""); // answer
    const [answer2,setAnswer2] = useState<string>("");
    const [answer3,setAnswer3] = useState<string>("");
    const [answer4,setAnswer4] = useState<string>("");
    const [answer5,setAnswer5] = useState<string>("");
    
    //제목
    const titleChangeHandler = (e:any) => {
        setTitle(e.target.value);
    }

    //지문을 입력
    const questionTextChangeHandler = (e:any) => {
        setquestionText(e.target.value);
    }
    //해설을입력 생략가능
    const commentaryTextChangeHandler = (e:any) => {
        setcommentaryText(e.target.value);
    }

    const ResetTitle = (e:any) => {
        setTitle("");
    }

    //CheckBox
    const onClickStateChange1 = (e:any) => {
        setState1(!state1);
    }
    const onClickStateChange2 = (e:any) => {
        setState2(!state2);
    }
    const onClickStateChange3 = (e:any) => {
        setState3(!state3);
    }
    const onClickStateChange4 = (e:any) => {
        setState4(!state4);
    }
    const onClickStateChange5 = (e:any) => {
        setState5(!state5);
    }
    
    //Input
    const answer1ChangeHandler = (e:any) => {
        setAnswer1(e.target.value);
    }
    const answer2ChangeHandler = (e:any) => {
        setAnswer2(e.target.value);
    }
    const answer3ChangeHandler = (e:any) => {
        setAnswer3(e.target.value);
    }
    const answer4ChangeHandler = (e:any) => {
        setAnswer4(e.target.value);
    }
    const answer5ChangeHandler = (e:any) => {
        setAnswer5(e.target.value);
    }

    //onResetAnswer answer초기화
    const onResetAnswer1 = (e:any) => {
        setAnswer1("");
    }
    const onResetAnswer2 = (e:any) => {
        setAnswer2("");
    }
    const onResetAnswer3 = (e:any) => {
        setAnswer3("");
    }
    const onResetAnswer4 = (e:any) => {
        setAnswer4("");
    }
    const onResetAnswer5 = (e:any) => {
        setAnswer5("");
    }

    //
    //commentaryImage
    const commentaryImageChangeHandler = (e:any) => {
        const formData = new FormData();
        formData.append("file",e.target.files[0]);

        axios.post(`https://1hour.school/api/v1/file/upload`,formData,{
            headers: {
                Authorization: CookieValue
            }
        }).then(response => {
            if(response.data.status === 200) {
                setCommentaryImg(response.data.data.pk);
                setCommentaryUrl(response.data.data.url);
            } else {
                console.log("Data를 업로드하는데 실패했습니다");
            }
        })
    }

    //questionImg
    const questionImgChangeHandler = (e:any) => {
        const formData = new FormData();
        formData.append("file",e.target.files[0]);

        axios.post(`https://1hour.school/api/v1/file/upload`,formData,{
            headers: {
                Authorization: CookieValue
            }
        }).then(response => {
            if(response.data.status === 200) {
                setQuestionImg(response.data.data.pk);
                setQuestionUrl(response.data.data.url);
            } else {
                console.log("Data를 업로드하는데 실패했습니다");
            }
        })
    }

    //저장하고 끝내기
    const onClickSave = (e:any) => {
        console.log("ㅂ눌럿당");
        
        let body = {
            contents: makeProblemContnets,
            questions:[
                {
                    title,
                    questionImg,
                    commentaryImg,
                    commentaryText,
                    answers: [
                        {
                            answer:answer1,
                            correct:state1,
                        },
                        {
                            answer:answer2,
                            correct:state2,
                        },
                        {
                            answer:answer3,
                            correct:state3,
                        },
                        {
                            answer:answer4,
                            correct:state4,
                        },
                        {
                            answer:answer5,
                            correct:state5,
                        }
                    ]
                }
            ]
        }
        getMakeProblem(CookieValue,body)
        .then(function(data:any) {
            console.log(data,"성공"); //contents 
        })
        history.push("/admin/AdminMode/Edit/content_manage");
    }

    return(
        <Container>
            <TitleDiv>
                <P>#1</P>
                <InputModule 
                    value={title} 
                    placeholder="문제를 입력해주세요" 
                    onChange={titleChangeHandler} 
                    widthSize="731pt"
                    minHeightSize="62pt" 
                />
            <XMark opacity="0.3" size="24pt" onClick={ResetTitle}  />
            </TitleDiv>
            <TextAreaDiv>
                {questionUrl ? <UploadImage size={questionUrl}></UploadImage> : 
                <TextAreaModule 
                    widthSize="731pt"
                    minHeightSize="160pt"
                    placeholder="지문을 입력하거나 이미지를 올려주세요"
                    value={questionText}
                    onChange={questionTextChangeHandler}
                /> }
                
                <ImgDiv>
                    <label htmlFor="questionfile">
                        <img src={upload} alt="upload" width="20px" height="20px" />
                    </label>
                    <input style={{display:'none'}} type="file" id="questionfile" onChange={questionImgChangeHandler} />
                </ImgDiv>
            </TextAreaDiv>
            <DIV>
                <AnswerDiv>
                    <AnswerComponent number={1} onResetAnswer={onResetAnswer1} value={answer1} onChange={answer1ChangeHandler} state={state1} onClick={onClickStateChange1} />
                    <AnswerComponent number={2} onResetAnswer={onResetAnswer2} value={answer2} onChange={answer2ChangeHandler} state={state2} onClick={onClickStateChange2} />
                    <AnswerComponent number={3} onResetAnswer={onResetAnswer3} value={answer3} onChange={answer3ChangeHandler} state={state3} onClick={onClickStateChange3} />
                    <AnswerComponent number={4} onResetAnswer={onResetAnswer4} value={answer4} onChange={answer4ChangeHandler} state={state4} onClick={onClickStateChange4} />
                    <AnswerComponent number={5} onResetAnswer={onResetAnswer5} value={answer5} onChange={answer5ChangeHandler} state={state5} onClick={onClickStateChange5} />
                </AnswerDiv>
            </DIV>
            <TextAreaDiv>
                {commentaryUrl ? <UploadImage size={commentaryUrl}></UploadImage> : 
                <TextAreaModule 
                widthSize="731pt" 
                minHeightSize="160pt"
                placeholder="해설을 입력해주세요 (생략가능)"
                value={commentaryText}
                onChange={commentaryTextChangeHandler}
                />}
                <ImgDiv>
                    <label htmlFor="file">
                        <img src={upload} alt="upload" width="20px" height="20px" />
                    </label>
                     <input style={{display:'none'}} type="file" id="file" onChange={commentaryImageChangeHandler} />
                </ImgDiv>
            </TextAreaDiv>
            <TextAreaDiv>
                <DescriptionDIV>
                    <div style={{marginBottom:"14pt"}}>
                        <span style={{color:"#000000", fontSize:'16pt'}}>작성 시 참고해주새요!</span>
                    </div>
                    <TextDIV>
                        <img src={upload} alt="logo" width="20pt" height="20pt"/>
                        <MarginSpan>텍스트를 입력하지 않은 경우, 내컴퓨터에서 이미지를 불러오는 것으로 입력을 대신할 수 있습니다.</MarginSpan>
                    </TextDIV>
                    <TextDIV>
                        <img src={checkBlue} alt="logo" width="20pt" height="20pt" />
                        <MarginSpan>답변을 작성한 뒤 체크하면 정답을 지정할 수 있습니다. 복수의 답변을 정답으로 지정할 수 있습니다.</MarginSpan>
                    </TextDIV>
                    <TextDIV>
                        <img src={youtubeBlack} alt="logo" width="20pt" height="20pt" />
                        <MarginSpan>해설 텍스트의 경우 유튜브 영상 링크를 붙여넣기 할 수도 있습니다.</MarginSpan>
                    </TextDIV>
                </DescriptionDIV>
            </TextAreaDiv>
            <BottomButton>
                <div style={{
                    width:'80%',
                    display:'flex',
                    justifyContent:'flex-end'
                }}>
                    <Button1 text="저장하고 끝내기" size="114pt" heightSize="32pt" onClick={onClickSave} />
                </div>
            </BottomButton>
        </Container>
    );
}

export default ProblemMakeComponent;