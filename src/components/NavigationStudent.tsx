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

const NavigationStudent = (props:any) => {

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
                <Link to="/student/MainDashBoard">
                    <Img src={header} alt="Logo" width="40px" /> &nbsp; | &nbsp;
                </Link>
                <div>
                    <Link to="/student/MainDashBoard">
                        <HeadListText>{organizationName}</HeadListText>
                    </Link>
                </div>
            </Section>
            <Section>
                <HeadList>
                    <HeadListText><Link to="/student/MainDashBoard">수업보기</Link></HeadListText>
                </HeadList>
                <HeadList>
                    <HeadListText><Link to="/student/MyReport">나의리포트</Link></HeadListText>
                </HeadList>
            </Section>
            <Section>
                <Img onClick={() => ShowModal()} src="../userShadow.png" alt="Logo" width="40px" />
                    {!showModal 
                        ? null 
                    : 
                        <Modal>
                            <Link to="/student/StudentMyPage">
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

export default withRouter(NavigationStudent);