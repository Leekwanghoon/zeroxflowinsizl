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



const HeaderAdminCategory:React.FC = () => {

    return(
        <Wrapper>
            <HeadTitle>
                <HeadFont>
                    카테고리 관리 &gt; 목록
                </HeadFont>
            </HeadTitle>
            <HeadCategory>
                <HeadCategorySpan>
                    목록
                </HeadCategorySpan>
            </HeadCategory>
        </Wrapper>
    );
}

export default HeaderAdminCategory;