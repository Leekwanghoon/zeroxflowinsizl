import React,{useEffect, useState} from 'react';
import styled from 'styled-components';
import MedialToolManageComponent from './AdminContentContainer/MediaToolManageComponent';
import ProblemMakeComponent from './AdminContentContainer/ProblemMakeComponent';
import SentenceMakeComponent from './AdminContentContainer/SentenceMakeComponent';
import SyncMakeComponent from './AdminContentContainer/SyncMakeComponent';
import WordMakeComponent from './AdminContentContainer/WordMakeComponent';


const Wrapper = styled.section`
    height: 1200px;
`;

type Props = {
    type: Number;
    CookieValue: Number;
    setState:any;
}

//AdminContentMakeManage type은 여기서 바꿔
const AdminContentMakeManageMain:React.FC<Props> = ({type, setState, CookieValue}) => {

    //type 1인지 2인지 에따라 컴포넌트가 편한다
    const [contents,setContents] = useState<number>(0);
    const [paragraphs,setParagraphs] = useState<[]>([]);

    const [SentenceContents,setSentenceContents] = useState<number>(0);
    const [SentenceUrl,setSentenceUrl] = useState<string>("");
    
    const [SentenceParagraphs,setSentenceParagraphs] = useState<[]>([]);

    
    //문장데이터
    const [makewordContnets,setMakeWordContents] = useState<number>(0);
    const [makeWordParagraphs,setMakeWordParagraphs] = useState<any>([]);

    //WordMakeComponen데이터
    const [makeProblemContnets,setMakeProblemContents] = useState<number>(0);
    const [makeProblemParagraphs,setMakeProblemParagraphs] = useState<any>([]);
    



    return(
        <Wrapper>
            {type === 1 ? <MedialToolManageComponent 
                            setContents={setContents} 
                            setParagraphs={setParagraphs} 
                            setState={setState} 
                            CookieValue={CookieValue} 
            /> : null}
            {type === 2 ? <SentenceMakeComponent 
                            setParagraphs={setParagraphs}  
                            setSentenceContents={setSentenceContents} 
                            setSentenceUrl={setSentenceUrl} 
                            setSentenceParagraphs={setSentenceParagraphs} 
                            contents={contents} 
                            paragraphs={paragraphs} 
                            setState={setState} 
                            CookieValue={CookieValue} 
            /> : null}
            {type === 3 ? <SyncMakeComponent
                            setMakeWordContents={setMakeWordContents}
                            setMakeWordParagraphs={setMakeWordParagraphs}
                            SentenceContents={SentenceContents}
                            SentenceUrl={SentenceUrl}
                            SentenceParagraphs={SentenceParagraphs}
                            setState={setState} 
                            CookieValue={CookieValue} 
            /> : null}
            {type === 4 ? <WordMakeComponent 
                            CookieValue={CookieValue}
                            setState={setState} 
                            makewordContnets={makewordContnets}
                            makeWordParagraphs={makeWordParagraphs}
                            setMakeProblemContents={setMakeProblemContents}
                            setMakeProblemParagraphs={setMakeProblemParagraphs}
            
            /> : null}
            {type === 5 ? <ProblemMakeComponent 
                            CookieValue={CookieValue} 
                            makeProblemContnets={makeProblemContnets}
                            makeProblemParagraphs={makeProblemParagraphs}
            /> : null}
        </Wrapper>
    );
}

export default AdminContentMakeManageMain;