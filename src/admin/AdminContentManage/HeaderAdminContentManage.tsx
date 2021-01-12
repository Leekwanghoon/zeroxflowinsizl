import React, { Suspense } from 'react';
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

const HeadCategorySpan = styled.p`
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
    onTotalStatus: any;
    onMovieInOST: any;
    onListenPopsong: any;
    onTedCourse: any;
    onStreet: any;
    onSingAlong: any;
}


const HeaderAdminContentManage:React.FC<Props> = ({state,onTotalStatus,onMovieInOST,onListenPopsong,onTedCourse,onStreet,onSingAlong}) => {

    return(
        <Wrapper>
            <HeadTitle>
                <HeadFont>
                    {state === -1 ? "콘텐츠 관리 > 전체영상" : null}
                    {state === 1 ? "콘텐츠 관리 > 영화 속 OST" : null}
                    {state === 2 ? "콘텐츠 관리 > 공부할 때 듣기 좋은 팝송" : null}
                    {state === 3 ? "콘텐츠 관리 > TED 강의" : null}
                    {state === 4 ? "콘텐츠 관리 > 세서미 스트리트" : null}
                    {state === 5 ? "콘텐츠 관리 > SING ALONG" : null}
                </HeadFont>
            </HeadTitle>
            <HeadCategory>
                <HeadCategorySpan onClick={onTotalStatus}>
                    전체 영상
                </HeadCategorySpan>
                <HeadCategorySpan onClick={onMovieInOST}>
                    영화 속 OST
                </HeadCategorySpan>
                <HeadCategorySpan onClick={onListenPopsong}>
                    공부할 때 듣기 좋은 팝송
                </HeadCategorySpan>
                <HeadCategorySpan onClick={onTedCourse}>
                    TED 강의
                </HeadCategorySpan>
                <HeadCategorySpan onClick={onStreet}>
                    세서미 스트리트
                </HeadCategorySpan>
                <HeadCategorySpan onClick={onSingAlong}>
                    SING ALONG
                </HeadCategorySpan>
            </HeadCategory>
        </Wrapper>
    );
}

export default HeaderAdminContentManage;