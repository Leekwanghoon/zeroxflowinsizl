import React,{useEffect, useState} from 'react';
import styled from 'styled-components';
import MedialToolManageComponent from './AdminContentContainer/MediaToolManageComponent';
import SentenceMakeComponent from './AdminContentContainer/SentenceMakeComponent';
import SyncMakeComponent from './AdminContentContainer/SyncMakeComponent';


const Wrapper = styled.section`
    height: 1200px;
`;

type Props = {
    type: Number;
    CookieValue: Number;
    setState:any;
}


const AdminContentMakeManageMain:React.FC<Props> = ({type, setState, CookieValue}) => {

    
   
    //type 1인지 2인지 에따라 컴포넌트가 편한다
    const [contents,setContents] = useState<number>(0);
    const [paragraphs,setParagraphs] = useState<[]>([]);

    const [SentenceContents,setSentenceContents] = useState<number>(0);
    const [SentenceUrl,setSentenceUrl] = useState<string>("");
    
    const [SentenceParagraphs,setSentenceParagraphs] = useState<[]>([]);

    
    return(
        <Wrapper>
            {type === 1 ? <MedialToolManageComponent  setContents={setContents} setParagraphs={setParagraphs} setState={setState} CookieValue={CookieValue} /> : null}
            {type === 2 ? <SentenceMakeComponent setParagraphs={setParagraphs}  setSentenceContents={setSentenceContents} setSentenceUrl={setSentenceUrl} setSentenceParagraphs={setSentenceParagraphs} contents={contents} paragraphs={paragraphs} setState={setState} CookieValue={CookieValue} /> : null}
            {type === 3 ? <SyncMakeComponent
            SentenceContents={SentenceContents}
            SentenceUrl={SentenceUrl}
            SentenceParagraphs={SentenceParagraphs}
            setState={setState} CookieValue={CookieValue} /> : null}
        </Wrapper>
    );
}

export default AdminContentMakeManageMain;