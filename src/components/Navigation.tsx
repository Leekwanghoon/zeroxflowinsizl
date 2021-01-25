import React, {useState} from 'react';
import styled from 'styled-components';
import {Link, withRouter} from 'react-router-dom';
import header from '../Images/images/images/headerLogo.png';


const Container = styled.div`
    display: flex;
    width: 100%;
    min-width: 1280pt;
    height: 69pt;
    -webkit-box-align: center;
    align-items: center;
    -webkit-box-pack: justify;
    justify-content: space-between;
    box-shadow: 0px 2px 4px -1px rgba(0,0,0,0.2), 0px 4px 5px 0px rgba(0,0,0,0.14), 0px 1px 10px 0px rgba(0,0,0,0.12);
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
    font-size: 20pt;
    margin: 10px;
`;

const Modal = styled.div`
    position: relative;
    top: 62px;
    right: 60px;
`;

const Navigation = (props:any) => {

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
                <Link to="/dashboard">
                    <Img src={header} alt="Logo" width="40px" /> &nbsp; | &nbsp;
                </Link>
                <div>
                    <Link to="/dashboard">
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
                    <HeadListText><Link to="/teacher/StudentManage">학생관리</Link></HeadListText>
                </HeadList>
            </Section>
            <Section>
                <HeadList>
                    <HeadListText>컨텐츠 만들기</HeadListText>
                </HeadList>
                <Img onClick={() => ShowModal()} src="../userShadow.png" alt="Logo" width="40px" />
                    {!showModal 
                        ? null 
                    : 
                        <Modal>
                            <Link to="/myPage">
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

export default withRouter(Navigation);