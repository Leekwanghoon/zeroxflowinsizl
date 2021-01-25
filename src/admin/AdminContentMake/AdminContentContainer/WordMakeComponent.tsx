import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import { XMark } from '../../../utils/Icons';
import InputModule from '../Utils/InputModule';
import addRow from '../../../Images/images/images/addRow.png';
import { getTranslate } from '../../../utils/Function/AsyncFunction';
import Button1 from '../../../../src/utils/Button1';
import ExcelExport from '../../../YoutubeApi/ExcelExport';
import ToggleButtonExcel from '../../../utils/ToggleMenuBar/ToggleButtonExcel';
import TestExcelImport from '../../../utils/ExcelImport/TestExcelImport';
import {getMakeWord} from '../../../utils/Function/AsyncFunction';


const SPAN = styled.span`
    font-size:18pt;
    margin-right:10pt;
    color:#707070;
    margin-left:20pt;
`;

const SPAN2 = styled(SPAN)`
    opacity:0.7;
`;

const Container = styled.div`
    margin-top: 50pt;
`;

const ExcelContainer = styled.div`
    display:flex;
    justify-content:flex-end;
    align-items:center;
`;

const ExcelDIV = styled.div`
    cursor:pointer;
`;

const MainContainer = styled.div`
    margin-top: 30px;
`;

const InputDIV = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-top: 10px;
    margin-bottom: 20pt;
`;

const BottomContainer = styled.div`
    margin-top: 20px;
    display:flex;
    justify-content: center;
    position:relative;
`;

type Props = {
    CookieValue: Number;
    makewordContnets:any;
    makeWordParagraphs:any;
    setState:any;
    setMakeProblemContents:any;
    setMakeProblemParagraphs:any;
}

type Object = {
    eng: string;
    kor: string;
}
//Data넘기기 <<WordMake까지 받아왔고 api맞춰서  Problem으로 보내줘
const WordMakeComponent = ({
    CookieValue,
    makewordContnets,
    makeWordParagraphs,
    setState,
    setMakeProblemContents,
    setMakeProblemParagraphs
}:Props) => {

    console.log(makeWordParagraphs,"makeWordParagraphs");
    console.log(makewordContnets,"makewordContnets");
    
    // const dummyData = [
    //     {
    //         eng:"test",
    //         kor:"시험 삼아 해보다"
    //     },
    //     {
    //         eng:"test",
    //         kor:"시험 삼아 해보다"
    //     },
    //     {
    //         eng:"test",
    //         kor:"시험 삼아 해보다"
    //     },
    //     {
    //         eng:"",
    //         kor:""
    //     },
    //     {
    //         eng:"",
    //         kor:""
    //     }
    // ]

   

    const [datas,setData] = useState<Object[]>(makeWordParagraphs);
   
    const [isClickUpload,setIsClickUpload] = useState<boolean>(false);
    const [isClickImport,setIsClickImport] = useState<boolean>(false);
   
    const [InputEng, setInputEng] = useState<any[]>([]);
    const [InputKor, setInputKor] = useState<any[]>([]);

    console.log(datas,"datas초기화되는거");

    useEffect(() => {
        setData(makeWordParagraphs);
    },[datas])

    const onClickAddButton = () => {
        console.log("눌렀당");
        let addArray:Object = {eng:"",kor:""};
        // for(let i=0; i<10; i++) {
        //     datas.push(addArray);
        // }
        datas.push(addArray);
        setData([...datas]);
    }

    //영어어 입력
    const InputEngChange = (e:any,index:number) => {
        console.log(e.target.value);
        // InputEng[index] = e.target.value;
        // setInputEng([...InputEng]);
        datas[index].eng = e.target.value;
        console.log(datas[index].eng,"영어입력",index,":인덱스");
        console.log(datas,"datas");
        setData([...datas]);
    }
    //한국어입력
    const InputKorChange = (e:any,index:number) => {
        InputKor[index] = e.target.value;
        setInputKor([...InputKor]);
    }

    const onTranslateEngToKor = (index:number) => {
        //번역할거야 움직이면
        let body = {
            paragraphs:datas[index].eng
        }
        getTranslate(CookieValue,body)
        .then(function(data) {
            
            datas[index].kor = data.data.kor;
            const temp1 = datas;
            console.log(temp1,"temp1넣음");
            setData([...temp1]);
            
        }).catch(function(err) {
            // alert("번역하는것에 실패");
            console.log(err);
        })
    }
  
    const onDelete = (index:number) => {
        console.log("delete누름름");
        datas.splice(index,1);
        setData([...datas]);
    }

    const onGoMakeProblem = () => {
        console.log("다음으로 넘어가자");
        let body = {
            contents: makewordContnets,
            words: makeWordParagraphs
        }
        getMakeWord(CookieValue,body)
        .then(function(data:any) {
            console.log(data,"WordMakeComponent"); //contents 
            //words : [{eng:"",kor:""}]
            setMakeProblemContents(data.data.contents);
            setMakeProblemParagraphs(data.data.words);
        })
        setState(5);
    }

    //엑셀 업로드
    
    return(
        <Container>
            <ExcelContainer>
                <ExcelDIV>
                    {/* <SPAN>엑셀 파일로 한번에 올리기</SPAN> */}
                    <ToggleButtonExcel setIsClickImport={setIsClickImport} datas={datas} setIsClickUpload={setIsClickUpload}  />
                </ExcelDIV>
            </ExcelContainer>
            <MainContainer>
                {datas && datas.map((data:any,index:number) => {
                    console.log(data,"mapData");
                    return(
                        <InputDIV key={index}>
                            <SPAN2>#{index}</SPAN2>
                            <InputModule 
                                widthSize="387pt" 
                                onChange={(e:any) => InputEngChange(e,index)}
                                placeholder={data.eng==="" ? "단어를 입력해주세요" : data.eng}
                                value={data.eng}
                            />
                            <InputModule
                                widthSize="387pt"
                                onChange={(e:any) => InputKorChange(e,index)}  
                                placeholder={data.kor===""? "한국어 뜻을 입력해주세요": data.kor} 
                                onClick={() => onTranslateEngToKor(index)}
                                value={data.kor}
                            />
                            <XMark size="24px" onClick={() => onDelete(index)} />
                        </InputDIV>
                    );
                })}
            </MainContainer>
            <BottomContainer>
                <img src={addRow} alt="더하기 버튼" onClick={() => onClickAddButton()} />
                <div style={{
                    position:'absolute',
                    right:'0px'
                }}>
                    <Button1 text="저장하고 다음으로" heightSize="40px" size="100pt" onClick={onGoMakeProblem}  />
                </div>
                {isClickUpload ? <ExcelExport data={datas} /> : null}
                {isClickImport ? <TestExcelImport isClickImport={isClickImport} setIsClickImport={setIsClickImport} setData={setData} /> : null}
            </BottomContainer>
        </Container>
    );
}

export default WordMakeComponent;

