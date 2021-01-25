import React from 'react';
import styled from 'styled-components';
import header from '../../Images/images/images/headerLogo.png';
import { Link } from 'react-router-dom';
import TestAll from '../../AdminNaviContentManage/AdminNaviContentContainer';
const NaviRegion = styled.div`
    display:flex;
    flex-direction: column;
    width:100%;
    min-height:100vh;
    font-size:20pt;
    align-items: center;
    margin-top: 112px;
    min-width: 240pt
`;

const Wrapper = styled.div`
    margin-bottom:30px;
    padding: 1px;
`;

const HeaderTitle = styled.div`
    margin: 20px auto;
    display:flex;
    align-items:center;
    flex-direction: row;
`;

const Img = styled.img`
    height: auto;
    max-width: 100%;
    width: 68pt;
    height: fit-content;
`;


const LeftImgFont = styled.p`
    font-size: 19 pt;
    color: #575757;
    background-color: undefined;
    font-family: Helvetica Neue;
    text-align: left;
    margin-left: 10px;
`;

const BackButton = styled.div`
    margin: 50px auto;
`;

const BackTitle = styled.div`
    font-size: 15px;
    font-weight: bold;
    font-family: Helvetica Neue;
    text-align: left;
`;

const AdminNaviLeft:React.FC = () => {
    
    return(
        <NaviRegion>
                <HeaderTitle>
                    <Img src={header} alt="Logo" /> <LeftImgFont>| 관리자</LeftImgFont>
                </HeaderTitle>
                <Wrapper>
                    <TestAll />
                </Wrapper>
                <BackButton>
                    <BackTitle><Link to="/admin/AdminMainPage">1 hour로 돌아가기</Link></BackTitle>
                </BackButton>
        </NaviRegion>
    );
}

export default AdminNaviLeft;