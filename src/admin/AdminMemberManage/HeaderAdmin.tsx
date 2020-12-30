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

type Props = {
    state?: Number;
    onTotalStatus: any;
    onTeacherStatus: any;
    onStudentStatus: any;
    onAdminStatus: any;
}


const HeaderAdmin:React.FC<Props> = ({state,onTotalStatus,onTeacherStatus,onStudentStatus,onAdminStatus}) => {

    return(
        <Wrapper>
            <HeadTitle>
                <HeadFont>
                    회원 관리
                </HeadFont>
            </HeadTitle>
            <HeadCategory>
                <HeadCategorySpan onClick={onTotalStatus}>
                    전체
                </HeadCategorySpan>
                <HeadCategorySpan onClick={onTeacherStatus}>
                    선생님
                </HeadCategorySpan>
                <HeadCategorySpan onClick={onStudentStatus}>
                    학생
                </HeadCategorySpan>
                <HeadCategorySpan onClick={onAdminStatus}>
                    관리자
                </HeadCategorySpan>
            </HeadCategory>
        </Wrapper>
    );
}

export default HeaderAdmin;