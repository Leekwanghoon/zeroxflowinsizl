import React from 'react';
import styled from 'styled-components';

const Wrapper = styled.section`
    height: 10%;
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



const HeaderAdminPlayList:React.FC = () => {

    return(
        <Wrapper>
            <HeadTitle>
                <HeadFont>
                    플레이리스트
                </HeadFont>
            </HeadTitle>
            <HeadCategory>
                <HeadCategorySpan>
                    목록
                </HeadCategorySpan>
                <HeadCategorySpan>
                    플레이리스트1
                </HeadCategorySpan>
                <HeadCategorySpan>
                    플레이리스트2
                </HeadCategorySpan>
                <HeadCategorySpan>
                    플레이리스트3
                </HeadCategorySpan>
                <HeadCategorySpan>
                    플레이리스트4
                </HeadCategorySpan>
                <HeadCategorySpan>
                    플레이리스트5
                </HeadCategorySpan>
                <HeadCategorySpan>
                    LEVEL1 저학년 회화
                </HeadCategorySpan>
                <HeadCategorySpan>
                    만화로 배우는 영회
                </HeadCategorySpan>
            </HeadCategory>
        </Wrapper>
    );
}

export default HeaderAdminPlayList;