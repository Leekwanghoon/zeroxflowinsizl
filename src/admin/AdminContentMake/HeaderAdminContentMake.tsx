import React from 'react';
import styled from 'styled-components';

const Wrapper = styled.section`
    height: 10%;
    min-width:240pt;
`;

const HeadTitle = styled.div`
    padding-top: 72px;
    padding-left: 20px;
`;

const HeadFont = styled.p`
    font-size: 26px;
    font-weight: Bold;
    font-family: Helvetica Neue;
    text-align: left;
`;

const HeadCategory = styled.div`
    display: flex;
    box-sizing: border-box;
    outline: none;
    border-bottom: 1px solid black;
`;

const HeadCategorySpan = styled.span`
    width: 10%;
    display: inline-flex;
    font-size: 18px;
    font-weight:bold;
    min-width:60pt;
    margin-left:20pt;
    letter-spacing:0px;
    align-items: center;
    flex-direction: column;
    justify-content: center;
    cursor: pointer;
    &:hover {
        color: yellow;
    }
`;

type Props = {
    state?: Number;
    onVideoWizard:any;
    onMakeSentence:any;
    onSyncTiming:any;
    onMakeWord:any;
    onMakeExam:any;
}


const HeaderAdminContentMake:React.FC<Props> = ({state,onVideoWizard,onMakeSentence,onSyncTiming,onMakeWord,onMakeExam}) => {

    return(
        <Wrapper>
            <HeadTitle>
                <HeadFont>
                    콘텐츠 만들기 &gt; 영상 마법사
                </HeadFont>
            </HeadTitle>
            <HeadCategory>
                <HeadCategorySpan onClick={onVideoWizard}>
                    영상 마법사
                </HeadCategorySpan>
                <HeadCategorySpan onClick={onMakeSentence}>
                    문장 만들기
                </HeadCategorySpan>
                <HeadCategorySpan onClick={onSyncTiming}>
                    싱크 맞추기
                </HeadCategorySpan>
                <HeadCategorySpan onClick={onMakeWord}>
                    단어 만들기
                </HeadCategorySpan>
                <HeadCategorySpan onClick={onMakeExam}>
                    문제 만들기
                </HeadCategorySpan>
            </HeadCategory>
        </Wrapper>
    );
}

export default HeaderAdminContentMake;