import React,{useState, useEffect} from 'react';
import styled from 'styled-components';
import axios from 'axios';
import logo from '../../Images/images/images/logo.png';
import { Logo } from '../../utils/Logo/Logo';
import { Container, Text, Text1, Wrapper,Input,InputLabel, Small } from './LoginStyle';
import {Link} from 'react-router-dom';
import Button1 from '../../utils/Button1';
import Input1 from '../../utils/Input/Input';
import useInput from '../../hooks/useInput';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '../../_reducers';
import { login } from '../../_actions/user_action';
import Helmet from 'react-helmet';
const Linked = styled(Link)`
    text-decoration:none;
    font-size: 5px;
    color: black;
`;

const Login = (props:any) => {

    const data = useSelector((state:RootState) => state.user);
    const dispatch = useDispatch();

    console.log(data,"loginData");
    const email = useInput("");
    const password = useInput("");


    async function getLogin(body:any) {
        try {
            const response = await axios.post(`https://1hour.school/user/login`, body);
            if(response.data.status === 200) {
                console.log(response.data.data,"데이터");
                console.log(response.data,"token");
                document.cookie = `usertoken=${response.data.data.token}`;
                localStorage.setItem('authority',`${response.data.data.authority}`);
                localStorage.setItem('organizationName',`${response.data.data.organizationName}`);
                localStorage.setItem('userEmail',`${body.email}`);
                const authority = response.data.data.authority;
                console.log(authority);
                //0 ,1, 2
                if(authority === 2) {
                    props.history.push("/student/MainDashBoard");
                } else if(authority === 1) {
                    props.history.push("/dashboard");
                } else if( authority === 0) {
                    props.history.push("/admin/AdminMainPage")
                } else {
                    props.history.push("/login");
                }
            } else {
                alert("로그인하는데 실패");
                props.history.push("/login");
            }
        } catch(error) {
            console.error(error);
        }
    }
    


    const onLogin = (e: React.FormEvent<HTMLFormElement> | React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
        e.preventDefault();
        let body = {
            email: email.value,
            password: password.value
        }
        // dispatch(login(body, email.value));
        // console.log(data,"finddata");   

        getLogin(body)

        // if( data?.login?.data?.authority === undefined ) {
        //     dispatch(login(body, email.value));
        //     console.log(data && data.login && data.login.data,"undefined면 다시보내"); 
        // } 

    }

   

   

    return(
        <Container>
            <Helmet>
                <title>Login</title>
            </Helmet>
            <Logo src={logo} alt="Logo" />
            <Wrapper>
                <form style={{display:'flex', flexDirection:'column'}} onSubmit={onLogin}>
                    <Text>시작하기</Text>
                    <Text1>환영합니다! 계정이 없다면 회원가입 후 이용해주세요</Text1>
                    <InputLabel>이메일 주소</InputLabel>
                    <Input1 
                        type="text"
                        {...email}
                    />
                    <InputLabel>비밀번호</InputLabel>
                    <Input1  
                        type="password"
                        {...password}
                    />
                    <Button1 onClick={onLogin} text="로그인" size="50px" />
                    <Small>
                        <Linked to="/findPassword"><p>비밀번호 찾기</p></Linked>
                        <Linked to="/register"><p>회원가입</p></Linked>
                    </Small>
                </form>
            </Wrapper>
        </Container>
    );
}

export default Login;
