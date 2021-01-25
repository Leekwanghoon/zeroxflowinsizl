import React, { useState } from 'react';
import styled from 'styled-components';
import NavigationStudent from '../components/NavigationStudent';
import Helmet from 'react-helmet';
import Calendar from '../utils/Calendar/Calendar.jsx';
const Container = styled.section`
    min-height: 75vh;
    display: flex;
    justify-content: center;
    position: relative;
`;

const Wrapper = styled.div`
    width: 70%;
    height: 100%;
    margin-top: 7%;
    align-self: center;
    position: absolute;
    top: 0;
`;

const Header = styled.div`
    height: 15%;
`;


const FontTitle = styled.div`
    height: 50%;
    font-weight: 600;
    font-size: 26pt;
`;

const FontRegion = styled.div`
    height: 50%;
    border-bottom: 1px solid black;
    display: flex;
    padding: 1rem;
`;

const FontText = styled.span`
    font-weight: 500;
    font-size: 22pt;
    text-align: left;
    margin-left: 10px;
    cursor: pointer;
    &:hover {
        font-size: 24pt;
        font-weight:bold;
        border-bottom: 7px solid yellow;
    }
`;





const MyReport = (props:any) => {

    const [isClickReport, setisClickReport] = useState(true);

    const [isClickHistory, setisClickHistory] = useState(false);

    const ReportStatus = () => {
        setisClickReport(true);
        setisClickHistory(false);
    }

    const HomeworkStatus = () => {
        setisClickHistory(true);
        setisClickReport(false);
    }

    return(
        <>
        <Helmet>
            <title>나의리포트 | 과제마감관리</title>
        </Helmet>
        <NavigationStudent />
            <Container>
                <Wrapper>
                    <Header>
                            <FontTitle>과제마감 관리</FontTitle>
                            <FontRegion>
                                <FontText onClick={ReportStatus}>
                                    학습 리포트
                                </FontText>
                                <FontText onClick={HomeworkStatus}>
                                    과제 내역
                                </FontText>
                            </FontRegion>
                    </Header>
                    { isClickReport && !isClickHistory ? <>
                        <Calendar email="" cookie="" />
                    </> : 
                    <div>
                        History눌렀당
                    </div>
                    }
                </Wrapper>
            </Container>
        </>
    );
}

export default MyReport;
