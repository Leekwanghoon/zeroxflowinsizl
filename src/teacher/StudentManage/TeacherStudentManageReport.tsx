import React, { useEffect, useRef, useState } from 'react';
import queryString from 'query-string';
import { getReport } from '../../utils/Function/AsyncFunction';
import Navigation from '../../components/Navigation';
import report from './TeacherStudentManageReport.module.css';
import arrowLeft from '../../Images/images/images/arrowLeft.png';
import Button1 from '../../utils/Button1';
import marker from '../../Images/images/images/marker.png';
import NewChart from '../../utils/Chart/NewChart';
import ShowDataModule from './StudentManageReportModule/ShowDataModule';
import RadarChart from '../../utils/Chart/RadarChart';
import LineChart from '../../utils/Chart/LineChart';
import ShowDataWord from './StudentManageReportModule/ShowDataWord';
import ShowDataSentence from './StudentManageReportModule/ShowDataSentence';
import ShowDataDub from './StudentManageReportModule/ShowDataDub';
import ShowDataDubIng from './StudentManageReportModule/ShowDataDubIng';




type SummaryObject = {
    dubPct: number
    learnedSentences: number
    learnedWords: number
    sentencePct: number
    studied: number
    totalPct: number
    wordPct: number
    wrongPct: number
}

type RadarArray = {
    data: number[]
    name: string
}

type FrequentlyType  = {
    eng: string
    kor: string
}

type WordObject = {
    correct: number
    frequently:Array<FrequentlyType>
    learnedWords: number
    wordPct: number
    wrong: number
    // frequently:FrequentlyType[]
}

type SentenceObject = {
    correct: number
    frequently:Array<FrequentlyType>
    learnedSentences: number
    sentencePct: number
    wrong: number
}

type HistogramArray = {
    data: number[]
    name: string
}

type DubArray = {
    carried:number
    contents:number
    total:number
    url:string
    title:string
    youtubeTitle:string
}

const TeacherStudentManageReport = (props:any) => {

    console.log(props.history);

    const PrintRegion:any = useRef();


    const [Summary, setSummary] = useState<SummaryObject>();
    const [RadarSeries, setRadar] = useState<RadarArray[]>([]);
    const [Word, setWord] = useState<WordObject>();
    const [Histogram, setHistograms] = useState<HistogramArray[]>([]);
    const [Sentence, setSentence] = useState<SentenceObject>();

    const [Dub, setDub] = useState<DubArray[]>([]);


    const cookie = props.cookieValue[1];
    let query:any = queryString.parse(props.location.search);//any인데 parseInt(안에 string넣어야함 어떻게하지?)
    // never절대 올 수 없는 형식
    let pk = parseInt(query.reportPK);
    
    useEffect(() => {
        getReport(cookie, pk).then(function(data) {
            console.log(data)
            setSummary(data.data.summary);
            setRadar(data.data.radar.series);
            setWord(data.data.word);
            setHistograms(data.data.histograms.series);
            setSentence(data.data.sentence);
            setDub(data.data.dub);
        })
    },[])


    const onGoBack = () => {
        props.history.goBack();
    }
    const onClickPrint = (e:any) => {
        let printOn = e.view.print;
        console.log(e.view,"e.view")
        printOn();
    }
    
    const test = (e:any) => {
        console.log(PrintRegion);
        console.log(PrintRegion.current.innerHTML);
        console.log(e.view.document.body.innerHTML);
        let original = e.view.document.body.innerHTML;
        let newRegion = PrintRegion.current.innerHTML;
        e.view.document.body.innerHTML = newRegion;
        let printOn = e.view.print;
        printOn();
        e.view.document.body.innerHTML = original;
        //PrintRegion.current.innerHTML
    }
  
    return (
        <>
            <Navigation />
            <button onClick={test}>버튼</button>
            <div ref={PrintRegion} className={report.Wrapper}>
                <div className={report.BackButton}>
                    <img width="18pt" height="18pt" src={arrowLeft} alt="back" />
                    <span onClick={onGoBack}>뒤로가기</span>
                </div>
                <div className={report.MainWrapper}>    
                    <div className={report.Main}>
                        <div className={report.PrintRegion}>
                            <Button1 borderRadius="7px" onClick={onClickPrint} heightSize="40pt" size="84pt" text="인쇄" />
                        </div>
                    </div>
                    <div className={report.Title}>
                        <span>이광훈 학생 주간 리포트 | 2020년 12월 07일</span>
                        <div className={report.Summary}>
                            <div className={report.IMGADD}>
                                <img alt="logo" src={marker} className={report.Yellow} />
                                <span>리포트 요약</span>
                            </div>
                        </div>
                        <div className={report.Graph}>
                            <div className={report.GraphSon}>
                                <NewChart text1="전체 정답률" data1={Summary?.totalPct} data2={Summary?.wrongPct} />
                            </div>                       
                            <div className={report.GraphSon1}>
                                <ShowDataModule 
                                    text1="공부한 영상" 
                                    text2="학습한 단어" 
                                    text3="학습한 문장"
                                    data1={Summary?.studied}
                                    data2={Summary?.learnedWords}
                                    data3={Summary?.learnedSentences}
                                />
                            </div>                       
                        </div>
                        <div className={report.SeveralGraph}>
                            <div className={report.OneOfThirdGraph}>
                                <NewChart text1="단어 정답률" ChartSize="170" data1={Summary?.totalPct} data2={Summary?.wrongPct} />
                            </div>
                            <div className={report.OneOfThirdGraph}>
                                <NewChart text1="문장 정답률" ChartSize="170" data1={Summary?.wordPct} data2={Summary?.wrongPct} />
                            </div>
                            <div className={report.OneOfThirdGraph}>
                                <NewChart text1="더빙 수행" ChartSize="170" data1={Summary?.dubPct} data2={Summary?.wrongPct} />
                            </div>
                        </div>
                        <div className={report.Summary}>
                            <div className={report.IMGADD}>
                                <img alt="logo" src={marker} className={report.Yellow} />
                                <span>학급 평균 비교</span>
                            </div>
                            <div className={report.Graph}>
                                <div className={report.GraphSon}>
                                    <RadarChart Data={RadarSeries[0]?.data} />
                                </div>                       
                                <div className={report.GraphSon2}>
                                    <p>
                                        학급 평균치와 비교하여 더빙 성취도가 매우 높습니다. 
                                        문장 정답률도 평균 이상으로 준수하고. 
                                        단어나 문제 정답률의 경우 평균보다 낮은 편이라
                                        더욱 집중하여 학습할 필요가 있습니다.
                                    </p>
                                </div>                       
                            </div>
                        </div>
                        <div className={report.Summary}>
                            <div className={report.IMGADD}>
                                <img alt="logo" src={marker} className={report.Yellow} />
                                <span>공부량 변화</span>
                                <span className={report.FontSpan}>지난주와 공부량을 비교해보세요</span>
                            </div>
                            <div className={report.Graph}>
                                <LineChart Data={Histogram[0]?.data} Data1={Histogram[1]?.data} />
                            </div>
                        </div>
                        <div className={report.Summary}>
                            <div className={report.IMGADD}>
                                <img alt="logo" src={marker} className={report.Yellow} />
                                <span>단어 학습</span>
                            </div>
                        </div>
                        <div className={report.Graph}>
                            <div className={report.GraphSon}>
                                <NewChart text1="단어 정답률" data1={Word?.wordPct} data2={Word?.wrong} />
                            </div>                       
                            <div className={report.GraphSon1}>
                                <ShowDataModule 
                                    text1="학습한 단어" 
                                    text2="정답" 
                                    text3="오답"
                                    data1={Word?.learnedWords}
                                    data2={Word?.correct}
                                    data3={Word?.wrong}
                                />
                            </div>                       
                        </div>
                        <div className={report.Summary}>
                            <div className={report.IMGADD}>
                                <span className={report.RedSpan}>많이 틀린 단어</span>
                            </div>
                        </div>
                        <div className={report.Graph}>
                                <ShowDataWord 
                                    frequently={Word?.frequently}
                                />
                        </div>
                        <div className={report.Summary}>
                            <div className={report.IMGADD}>
                                <img alt="logo" src={marker} className={report.Yellow} />
                                <span>문장 학습</span>
                            </div>
                        </div>
                        <div className={report.Graph}>
                            <div className={report.GraphSon}>
                                <NewChart text1="문장 정답률" data1={Sentence?.sentencePct} data2={Sentence?.wrong} />
                            </div>                       
                            <div className={report.GraphSon1}>
                                <ShowDataModule 
                                    text1="학습한 문장" 
                                    text2="정답" 
                                    text3="오답"
                                    data1={Sentence?.learnedSentences}
                                    data2={Sentence?.correct}
                                    data3={Sentence?.wrong}
                                />
                            </div>                       
                        </div>
                        <div className={report.Summary}>
                            <div className={report.IMGADD}>
                                <span className={report.RedSpan}>많이 틀린 문장</span>
                            </div>
                        </div>
                        <div className={report.Graph}>
                                <ShowDataSentence 
                                    frequently={Sentence?.frequently}
                                />
                        </div>
                        <div className={report.Summary}>
                            <div className={report.IMGADD}>
                                <img alt="logo" src={marker} className={report.Yellow} />
                                <span>더빙 학습</span>
                                <span className={report.FontSpan}>직접 더빙한 문장을 다시 들어보세요</span>
                            </div>
                            <div className={report.Graph}>
                                <div className={report.GraphSon}>
                                    <ShowDataDub Dub={Dub}  />
                                </div>
                                <div className={report.GraphSon2}>
                                    <ShowDataDubIng Dub={Dub} />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}
export default TeacherStudentManageReport;