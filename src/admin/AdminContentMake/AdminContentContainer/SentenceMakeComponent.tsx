import React, { useState,useEffect } from 'react';
import styled from 'styled-components';
import Button1 from '../../../utils/Button1';
import {getRegisterSentence,getTranslate} from '../../../utils/Function/AsyncFunction';

const Wrapper = styled.div`
    
`;

const TopTitle = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-around;
    align-items: flex-start;
    width: 100%;
    margin-top: 76.5px;
`;

const LeftTitle = styled.div`
    display: flex;
    flex-direction: column;
    width: 500px;
`;
const BigSpan = styled.span`
    color: rgb(0, 0, 0);
    font-size: 19px;
    font-weight: bold;
    font-family: "Helvetica Neue", Bold;
`;

const SmallSpan = styled.span`
    color: rgb(112, 112, 112);
    font-family: "Helvetica Neue", Light;
    font-size: 13px;
    margin-top: 4px;
`;

const BodyDIv = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-around;
    align-items: flex-start;
    margin-top: 14pt;
`;



const TextArea = styled.textarea`
    background-color: rgb(255, 255, 255);
    font-family: "Helvetica Neue", Light;
    font-size: 18px;
    color: rgb(112, 112, 112);
    padding-right: 12px;
    word-break: break-all;
    border: 1px;
    width: 100%;
    border-top-right-radius: 12px;
    resize: none;
    padding-left:20px;
`;

const BUttonDIV = styled.div`

`;



const MainDiv = styled.div`
    width:100%;
`;

const SectionDIV = styled.div`
    display:flex;
    background: 0% 0% no-repeat padding-box padding-box rgb(242, 242, 242);
    box-shadow: rgba(0, 0, 0, 0.16) 0px 3px 6px;
    border: 0.75px solid rgb(112, 112, 112);
    height: 30px;
`;

const SPAN = styled.span`
    font-size: 15px;
    background-color: rgb(255, 255, 255);
    padding-left:10px;
`;



type Props = {
    CookieValue: Number;
    setState: any;
    contents:any;
    paragraphs:any;
    setSentenceContents:any
    setSentenceUrl:any
    setSentenceParagraphs:any
    setParagraphs:any
}





const SentenceMakeComponent = ({contents,paragraphs, setState,CookieValue,
    setSentenceContents,
    setSentenceUrl,
    setSentenceParagraphs,
    setParagraphs
}:Props) => {
    
   
    console.log(paragraphs,"paragraphs");

    const [Index,setIndex] = useState<number>(0);



    useEffect(() => {
        console.log(paragraphs,"useEffect안에 데이터")
        setParagraphs(paragraphs);
    },[paragraphs])

    
   



   const InputSentenceValueChange = (e:any,index:any) => {
        console.log(paragraphs,"dsdsd");
        paragraphs[index].eng = e.target.value;
        setParagraphs([...paragraphs]);


        setIndex(index);
    }

    let body = {
        contents: contents,
        sentences: paragraphs
    }

    const onMakeSentence = () => {
        getRegisterSentence(CookieValue,body)
        .then(function(data) {
            if(data.status === 200) {
                console.log(data.data,"데이터확인");
                setSentenceContents(data.data.contents);
                setSentenceUrl(data.data.url);
                setSentenceParagraphs(data.data.paragraphs);
            } else {
                console.log("문장을 만드는데 실패")
            } 
        }).catch(function(err) {
            alert("데이터를 불러오는데 실패했당");
            console.log(err);
        })
        setState(3);
    }

    
    //클릭
    const onTranslate = (e:any) => {
        let body = {
            paragraphs:paragraphs[Index].eng
        }
        getTranslate(CookieValue,body)
        .then(function(data) {
            console.log(data,"Translate Data");
            console.log(data.data.kor,"kore");
            paragraphs[Index].kor =  data.data.kor;
            const temp = paragraphs;
            setParagraphs([...temp]);
            console.log(paragraphs);
        }).catch(function(err) {
            alert("번역하는것에 실패");
            console.log(err);
        })
    }

    //특정 것을 누르고 번역을해줌
    return(
        <>
        {paragraphs && paragraphs ? <Wrapper>
            <TopTitle>
                <LeftTitle>
                    <div style={{height:'70px', display:'flex', flexDirection:'column'}}>
                        <BigSpan>영어 가사/캡션</BigSpan>
                        <SmallSpan>영어 원문 또는 한국어 번역을 직접 수정하려면 입력창을 클릭하세요.</SmallSpan>
                    </div>
                        {paragraphs.map((sentence:any,index:number) => {
                            return(
                                <MainDiv key={index}>
                                    <SectionDIV>
                                        <SPAN>#{index+1}</SPAN>
                                        <TextArea defaultValue={sentence.eng} onChange={(e) => InputSentenceValueChange(e,index)}></TextArea>
                                    </SectionDIV>
                                    <button onClick={onTranslate}>번역</button>
                                </MainDiv>
                            );
                        })}
                </LeftTitle>
                <LeftTitle>    
                    <div style={{height:'70px',display:'flex', flexDirection:'column'}}>
                        <BigSpan>한국어 뜻 (자동으로 입력됩니다)</BigSpan>
                    </div>
                    {paragraphs.map((sentence:any,index:number) => {
                        return(
                            <MainDiv key={index}>
                                <SectionDIV>
                                    <SPAN>#{index+1}</SPAN>
                                    <TextArea value={sentence.kor} defaultValue={sentence.kor}></TextArea>
                                </SectionDIV>
                            </MainDiv>
                        );
                    })}
                </LeftTitle>
            </TopTitle>
            <BodyDIv>
            </BodyDIv>
            <BUttonDIV>
                <Button1 size="70pt" heightSize="50pt" text="문장 만들기" onClick={onMakeSentence} />
            </BUttonDIV>
        </Wrapper> : <div>Loading...</div>}
        </>
    );
}

export default SentenceMakeComponent;