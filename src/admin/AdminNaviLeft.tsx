import React,{useState} from 'react';
import styled from 'styled-components';
import header from '../Images/images/images/headerLogo.png';
import IconDown from '../Images/images/images/Icon feather-chevron-down.png';
import { Link } from 'react-router-dom';
const NaviRegion = styled.div`
    display:flex;
    flex-direction: column;
    width:100%;
    min-height:100vh;
    font-size:20pt;
    align-items: center;
    margin-top: 112px;
`;

const Wrapper = styled.div`
    margin-bottom:30px;
    padding: 1px;
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

const SelectTitleSection = styled.div`
    font-size: 19px;
    font-weight: bold;
    color: rgb(44, 44, 44);
`;

const SelectTitleFont = styled.p`
    font-size: 19px;
    font-weight: bold;
    color: rgb(44, 44, 44);
    &:hover {
        background-color: yellow;
    } 
`;

const SpanTitle = styled.span`
    margin-right: 10px;
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

const Img1 = styled.img`
    width: 20pt;
    height: 10pt;
`;

const SmallWrapper = styled.div`
    background-color: #00000017;
`;

const ContentDiv = styled.div`
    color: inherit;
    font-weight: inherit;
    padding-left: 24px;
    margin: 20px auto;
    &:hover {
        background-color: yellow;
    }
`;



const AdminNaviLeft:React.FC = () => {
    
    const [ContentMakeClick, setContentMakeClick] = useState<boolean>(true);
    const [ContentManageClick, setContentManageClick] = useState<boolean>(true);

    const ContentClickHandler = () => {
        setContentMakeClick(!ContentMakeClick);
        console.log(ContentMakeClick);
    }
    const ContentManageHandler = () => {
        setContentManageClick(!ContentManageClick);
        console.log(ContentManageClick);
    }

    

    return(
        <NaviRegion>
                <HeaderTitle>
                    <Img src={header} alt="Logo" /> <LeftImgFont>| 관리자</LeftImgFont>
                </HeaderTitle>
                <Wrapper>
                    <SelectTitle>
                        <div style= {{ display:'flex' }}>
                            <SelectTitleSection onClick={ContentClickHandler}>
                                {ContentMakeClick ?  <>
                                    <SpanTitle>콘텐츠만들기</SpanTitle>
                                    <Img1 src={IconDown} alt="logo" /></>  
                                        : 
                                        <>
                                            <SpanTitle>콘텐츠만들기</SpanTitle>
                                            <Img1 src={IconDown} alt="logo" />
                                        <SmallWrapper>
                                                <ContentDiv>
                                                    <SpanTitle>
                                                    영상 마법사
                                                    </SpanTitle>
                                                </ContentDiv>    
                                                <ContentDiv>
                                                    <SpanTitle>
                                                    문장 만들기
                                                    </SpanTitle>
                                                </ContentDiv>    
                                                <ContentDiv>
                                                    <SpanTitle>
                                                    싱크 맞추기
                                                    </SpanTitle>
                                                </ContentDiv>    
                                                <ContentDiv>
                                                    <SpanTitle>
                                                        단어 만들기
                                                    </SpanTitle>
                                                </ContentDiv>    
                                                <ContentDiv>
                                                    <SpanTitle>
                                                        문제 만들기
                                                    </SpanTitle>
                                                </ContentDiv>    
                                        </SmallWrapper>
                                        </>
                                        }
                            </SelectTitleSection>
                        </div>
                    </SelectTitle>
                </Wrapper>
                <SelectTitle>
                    <div style= {{ display:'flex' }}>
                        <SelectTitleSection onClick={ContentManageHandler}>
                            {ContentManageClick ?  <>
                                <SpanTitle>콘텐츠 관리</SpanTitle>
                                <Img1 src={IconDown} alt="logo" /></>  
                                    : 
                                    <>
                                        <SpanTitle>콘텐츠 관리</SpanTitle>
                                        <Img1 src={IconDown} alt="logo" />
                                        <SmallWrapper>   
                                            <ContentDiv>
                                                <SpanTitle>
                                                콘텐츠 관리
                                                </SpanTitle>
                                            </ContentDiv>    
                                            <ContentDiv>
                                                <SpanTitle>
                                                과제마감 관리
                                                </SpanTitle>
                                            </ContentDiv>
                                        </SmallWrapper>    
                                    </>
                                    }
                        </SelectTitleSection>
                    </div>
                </SelectTitle>
                <SelectTitle>
                    <SelectTitleFont><Link to="/admin/AdminMode/Category/category_manage">카테고리관리</Link></SelectTitleFont>
                </SelectTitle>
                <SelectTitle>
                    <SelectTitleFont><Link to="/admin/AdminMode/PlayList/play_list_manage">플레이리스트관리</Link></SelectTitleFont>
                </SelectTitle>
                <SelectTitle>
                    <SelectTitleFont><Link to="/admin/AdminMode/Banner/banner_manage">배너 관리</Link></SelectTitleFont>
                </SelectTitle>
                <SelectTitle>
                    <SelectTitleFont><Link to="/admin/AdminMode/Member/member_manage">회원 관리</Link></SelectTitleFont>
                </SelectTitle>
                <SelectTitle>
                    <SelectTitleFont><Link to="/admin/AdminMode/Organization/organization_manage">기관 관리</Link></SelectTitleFont>
                </SelectTitle>
                <BackButton>
                    <BackTitle><Link to="/admin/AdminMode">1 hour로 돌아가기</Link></BackTitle>
                </BackButton>
        </NaviRegion>
    );
}

export default AdminNaviLeft;