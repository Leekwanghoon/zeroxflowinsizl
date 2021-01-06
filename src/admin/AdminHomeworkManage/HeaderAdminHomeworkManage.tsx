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
    state?: boolean;
    onProgress: any;
    onDeadline: any;
}


const HeaderAdminHomeworkManage:React.FC<Props> = ({state, onProgress, onDeadline}) => {

    return(
        <Wrapper>
            <HeadTitle>
                <HeadFont>
                    {state ? "과제마감 관리 > 마감" : "과제마감 관리 > 진행중"}
                    {/* {state === -1 ? "콘텐츠 관리 > 마감" : null} */}
                </HeadFont>
            </HeadTitle>
            <HeadCategory>
                <HeadCategorySpan onClick={onProgress}>
                    진행중
                </HeadCategorySpan>
                <HeadCategorySpan onClick={onDeadline}>
                    마감
                </HeadCategorySpan>
            </HeadCategory>
        </Wrapper>
    );
}

export default HeaderAdminHomeworkManage;