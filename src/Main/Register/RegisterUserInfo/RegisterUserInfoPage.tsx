import React,{useState} from 'react';
import axios from 'axios';
import styled from 'styled-components';
import useInput from '../../../hooks/useInput';
import Button1 from '../../../utils/Button1';
import Input1 from '../../../utils/Input/Input';
import { Container, Wrapper } from './RegisterUserInfoStyle';
import { InputLabel } from '../../Login/LoginStyle';
import {RegisterUserInfo} from '../../../types/index';

const Span = styled.span`
    white-space:nowrap;
    position: absolute;
    top:10px;
`;

const RegisterUserInfoPage = (props:any) => {

    // const data = useSelector((state:RootState) => state.user);
    // const dispatch = useDispatch();
   
    const {Userdata} = props;
    console.log(Userdata,"하하");
    const email = useInput("");
    const password = useInput("");
    const passwordConfirm = useInput("");

    const [members, setMembers] = useState<RegisterUserInfo[]>([]);

    console.log(members,"body");
    const onRegisterTeacher = (e:any) => {
        
        e.preventDefault();
        let body = {
            name: Userdata[0].name,
            authority: 1,
            organization: Userdata[0].organization,
            email: email.value,
            password: password.value,
            // classroom: null,
            // grade: null,
            // tag: null
        }
        console.log(body,"직전body");
        axios.post(`https://1hour.school/user/register`, body)
            .then(response => {
                if(response.data.status === 200) {
                    alert("회원가입완료")
                } else {
                    console.log(response.data);
                }
            });
        // props.history.push("/login");
    }

    const onRegisterStudent = (e:any) => {
        e.preventDefault();
        let body = {
            name: Userdata[0].name,
            authority: 2,
            organization:Userdata[0].organization,
            email:email.value,
            password:password.value,
            classroom: Userdata[0].classroom,
            grade:Userdata[0].grade,
            tag:Userdata[0].tag
        }

        // dispatch(register(body));

        axios.post(`https://1hour.school/user/register`, body)
            .then(response => {
                if(response.data.status === 200) {
                    alert("회원가입성공");
                    return response.data;
                } else {
                    alert("회원가입실패");
                }
            });
        // props.history.push("/login");
    }

    if(Userdata[0].authority === 2) {
        console.log("2");
        return(
            <>
                <Container>
                    <Wrapper>
                        <Span>가입하기-학생 정보</Span>
                        <form onSubmit={onRegisterStudent}>
                            <InputLabel>이메일 주소*</InputLabel>
                            <Input1
                                type="email"
                                {...email}
                            />
                            <InputLabel>비밀번호*</InputLabel>
                            <Input1
                                type="password"
                                {...password}
                            />
                            <InputLabel>비밀번호 확인*</InputLabel>
                            <Input1
                                type="password"
                                {...passwordConfirm}
                            />
                            <Button1 text="가입" onClick={onRegisterStudent} size="38px"/>
                        </form>
                    </Wrapper>
                </Container>
            </>
        );
    } else if(Userdata[0].authority === 1) {
        console.log("1");
        return(
            <>
                <Container>
                    <Wrapper>
                        <Span>가입하기-선생님 정보</Span>
                        <form>
                            <InputLabel>이메일 주소*</InputLabel>
                            <Input1
                                type="email"
                                {...email}
                            />
                            <InputLabel>비밀번호*</InputLabel>
                            <Input1
                                type="password"
                                {...password}
                            />
                            <InputLabel>비밀번호 확인*</InputLabel>
                            <Input1
                                type="password"
                                {...passwordConfirm}
                            />
                            <Button1 text="가입" onClick={onRegisterTeacher} size="38px"/>
                        </form>
                    </Wrapper>
                </Container>
            </>
        );
    } else {
        return <div>해당페이지는 없는페이지입니다.</div>
    }
    
}

export default RegisterUserInfoPage;