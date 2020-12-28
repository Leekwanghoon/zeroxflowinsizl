import React from 'react';
import styled from 'styled-components';
import landingBackground from '../Images/images/images/landingBackground.png';
import logo from '../Images/images/images/logo.png';
const Container = styled.div`
    height:100vh;
    background-size: 100% 100%;
    background-image: url(${landingBackground});
    background-repeat: no-repeat;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    position: relative;
`;

const Logo = styled.img`
    width: 35%;
    height: 20%;
`;

const Button = styled.button`
    position: absolute;
    top: 10%;
    right: 7%;
    border: none;
    border-radius: 14px;
    width: 70px;
    font-size: 11px;
    background-color: ${props => props.theme.color.yellowButton};
    outline: none;
    cursor: pointer;
    &:hover {
        opacity: 0.7;
    }
`;

const Link = styled.a`
    color: black;
`;

const Text = styled.span`
    color: white;
    font-size: 16px;
`;

const LandingPage = () => {
    
    return(
        <Container>
            <Button><Link href="/login">시작하기</Link></Button>
            <Logo src={logo} alt="Logo" />
            <Text>내가 만드는 한 시간 수업</Text>
        </Container>
    );
}

export default LandingPage;
