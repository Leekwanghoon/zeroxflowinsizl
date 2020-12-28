import React, {useState} from 'react';
import styled from 'styled-components';
import {Link, withRouter} from 'react-router-dom';
import header from '../Images/images/images/headerLogo.png';


const Container = styled.div`
    height: 60px;
    display: flex;
    width:100%;
    justify-content: space-between;
    border-bottom: 1px solid black;
`;

const Section = styled.div`
    display:flex;
    align-items: center;
    width:33%;
    height:100%;
    justify-content:center;
`;

const Img = styled.img`
    width:40px;
    margin-left:15px;
    position: relative;
    top: 0;
    cursor: pointer;
`;


const HeadList = styled.div`
    white-space:nowrap;
    display:flex;
    justify-content: space-evenly;
`;
const HeadListText = styled.p`
    font-size: 10px;
    margin: 10px;
`;

const Modal = styled.div`
    position: relative;
    top: 62px;
    right: 60px;
`;
const NavigationAdmin = (props:any) => {

    const [showModal, setShowModal] = useState(false);
    const organizationName = localStorage.getItem("organizationName");
    const ShowModal = () => {
        console.log(showModal)
        setShowModal(!showModal);
    }

    const Logout = () => {
        console.log("로그아웃");
        document.cookie = "usertoken" + '=; expires=Thu, 01 Jan 1999 00:00:10 GMT;'; // 과거의 만료일로 되돌리는 것임
        localStorage.clear();
        props.history.push("");
    }
    return(
        <Container>
            <Section> 
                <Link to="/admin/AdminMainPage">
                    <Img src={header} alt="Logo" width="40px" /> &nbsp; | &nbsp;
                </Link>
                <div>
                    <Link to="/admin/AdminMainPage">
                        <HeadListText>{organizationName}</HeadListText>
                    </Link>
                </div>
            </Section>
            <Section>
                <HeadList>
                    <HeadListText><Link to="/dashboard">수업보기</Link></HeadListText>
                </HeadList>
                <HeadList>
                    <HeadListText><Link to="/admin/dashboard/showCourse">수업제작</Link></HeadListText>
                </HeadList>
                <HeadList>
                    <HeadListText><Link to="/course_manage">수업관리</Link></HeadListText>
                </HeadList>
                <HeadList>
                    <HeadListText><Link to="/admin/dashboard/showCourse">학생관리</Link></HeadListText>
                </HeadList>
            </Section>
            <Section>
                <HeadList>
                    <HeadListText>
                        <Link to="/admin/AdminMode">관리자 모드</Link>
                    </HeadListText>
                </HeadList>
                <Img onClick={() => ShowModal()} src="../userShadow.png" alt="Logo" width="40px" />
                    {!showModal 
                        ? null 
                    : 
                        <Modal>
                            <Link to="/admin/AdminMyPage">
                                <p>마이페이지</p>
                            </Link>
                            <p style={{
                                cursor: 'pointer',
                                fontSize: '1em'
                            }} onClick={Logout}>로그아웃</p>
                        </Modal>
                    }
            </Section>
        </Container>
    );
}

export default withRouter(NavigationAdmin);