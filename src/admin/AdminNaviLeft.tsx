import React from 'react';
import styled from 'styled-components';
import header from '../Images/images/images/headerLogo.png';
import IconDown from '../Images/images/images/Icon feather-chevron-down.png';
const NaviRegion = styled.div`
    display:flex;
    flex-direction: column;
    width:100%;
    min-height:100vh;
    font-size:20pt;
    align-items: center;
`;

const HeaderTitle = styled.div`
    margin: 20px auto;
    display:flex;
    flex-direction: row;
`;

const Img = styled.img`
    height: auto;
    max-width: 100%;
    width: 68pt;
    height: 48pt;
`;


const LeftImgFont = styled.p`
    font-size: 19 pt;
    color: #575757;
    background-color: undefined;
    font-family: Helvetica Neue;
    text-align: left;
    margin-left: 10px;
`;


const SelectTitle = styled.div`
    margin: 1pt auto;
    cursor:pointer;
    
`;

const SelectTitleFont = styled.p`
    font-size: 19px;
    font-weight: bold;
    color: rgb(44, 44, 44);
    &:hover {
        background-color: yellow;
    }
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



const AdminNaviLeft = () => {
    return(
        <NaviRegion>
                <HeaderTitle>
                    <Img src={header} alt="Logo" /> <LeftImgFont>| 관리자</LeftImgFont>
                </HeaderTitle>
                <SelectTitle>
                    <div style={{display:'flex'}}><SelectTitleFont>콘텐츠만들기</SelectTitleFont><img width="20pt" height="10pt" src={IconDown} alt="logo" /></div>
                </SelectTitle>
                <SelectTitle>
                    <SelectTitleFont>콘텐츠관리</SelectTitleFont>
                </SelectTitle>
                <SelectTitle>
                    <SelectTitleFont>카테고리관리</SelectTitleFont>
                </SelectTitle>
                <SelectTitle>
                    <SelectTitleFont>플레이리스트관리</SelectTitleFont>
                </SelectTitle>
                <SelectTitle>
                    <SelectTitleFont>배너 관리</SelectTitleFont>
                </SelectTitle>
                <SelectTitle>
                    <SelectTitleFont>회원 관리</SelectTitleFont>
                </SelectTitle>
                <SelectTitle>
                    <SelectTitleFont>기관 관리</SelectTitleFont>
                </SelectTitle>
                <BackButton>
                    <BackTitle>1 hour로 돌아가기</BackTitle>
                </BackButton>
        </NaviRegion>
    );
}

export default AdminNaviLeft;