import React,{ useState, useEffect} from 'react';
import axios from 'axios';
import styled from 'styled-components';
import Input1 from '../../../utils/Input/Input';
import { Container, Wrapper } from './RegisterMainStyle';
import useInput from '../../../hooks/useInput';
import Button1 from '../../../utils/Button1';
import { Check } from '../../../utils/Icons';
import { RegisterUserInfo } from '../../../types';
import RegisterUserInfoPage from '../RegisterUserInfo/RegisterUserInfoPage';


interface SchoolName {
    pk: number,
    name: string
}

const Span = styled.span`
    white-space:nowrap;
    position: absolute;
    top:10px;
`;

const SmallSpan = styled.span`
    white-space:nowrap;
    font-size: 10px;
    color: gray;
`;

const TeacherCheckBox = styled.button`
    border:none;
    background-color: yellow;
    display:flex;
    justify-content:center;
    align-items: center;
    cursor: pointer;
`;

const StudentCheckBox = styled.button`
    border:none;
    background-color: green;
    display:flex;
    justify-content:center;
    align-items: center;
    cursor: pointer;
`;

const ListWrap = styled.div`
    color: gray;
    font-size: 12px;
`;

const ButtonWrapper =  styled.div`
    display:flex;
    justify-content: center;
    align-items: center;
    margin-top: 20px;
`;


const RegisterMain = (props:any) => {
    const name = useInput("");
    const organization = useInput("");
    const classroom = useInput("");
    const grade = useInput("");
    const tag = useInput("");
    
    
    const [authority, setAuthority] = useState<number>(2);
    const [isTeacher, setisTeacher] = useState<boolean>(true);
    const [nextPage, setNextPage] = useState<boolean>(false);

    
    const [members, setMembers] = useState<RegisterUserInfo[]>([]);
    console.log(members);
    const initialList = {
        pk:0,
        name:""
    }
    
    const [list, setlist] = useState<SchoolName[]>([initialList]);
    useEffect(() => {
        axios.get(`https://1hour.school/search?keyword=${organization.value}`).then(response => {
            if(response.data.status) {
                setlist(response.data.data);
            }
        })
    },[organization.value])


    const stateTeacher = (e:React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
        setAuthority(1);
        setisTeacher(true);
    }
    const stateStudent = (e:React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
        setAuthority(2);
        setisTeacher(false);
    }

    const clickNextTeacher = (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
        e.preventDefault();
        let body = {
            name: name.value,
            authority,
            organization: organization.value,
            email:"",
            password:"",
        }
        setMembers([body]);
        setNextPage(true);
    }

    const clickNextStudent = (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
        e.preventDefault();
        let body = {
            name: name.value,
            authority,
            organization:organization.value,
            email:"",
            password:"",
            classroom:classroom.value,
            grade:grade.value,
            tag:tag.value
        }
        setMembers([body]);
        setNextPage(true);
    }
    if(!nextPage) {
        return(
            <>
            <Container>
                {isTeacher ? 
                    <Wrapper>
                        <Span>가입하기 - 선생님 정보</Span>
                            <div style={{textAlign:'left'}}>
                                <SmallSpan>이름*</SmallSpan>
                                <Input1 
                                    type="text"
                                    {...name}
                                />
                            <SmallSpan>회원 구분 *</SmallSpan>
                            <div style={{display:'flex', justifyContent:'space-between'}}>
                                <TeacherCheckBox onClick={stateTeacher}>
                                    <span>선생님</span>
                                    <Check />
                                </TeacherCheckBox>
                                <StudentCheckBox onClick={stateStudent}>
                                    <span>학생</span>
                                    <Check />
                                </StudentCheckBox>
                            </div>
                            {/* 체크박스 */}
                            
                                <SmallSpan>학교 또는 학원 이름 입력하기 *</SmallSpan>
                                <Input1 
                                    type="text"
                                    {...organization}
                                    />
                                <ListWrap>
                                    {list && list.map((list) => (
                                        <div key={list.pk}>{list.name}</div>
                                    ))}
                                </ListWrap>
                                <ButtonWrapper>
                                    <Button1 onClick={clickNextTeacher} text="다음" size="38px" />
                                </ButtonWrapper>
                            </div>
                    </Wrapper>
                : 
                <Wrapper>
                <Span>가입하기 - 학생 정보</Span>
                    <div style={{textAlign:'left'}}>
                        <SmallSpan>이름*</SmallSpan>
                        <Input1 
                            type="text"
                            {...name}
                        />
                    <SmallSpan>회원 구분 *</SmallSpan>
                    <div style={{display:'flex', justifyContent:'space-between'}}>
                        <TeacherCheckBox onClick={stateTeacher}>
                            <span>선생님</span>
                            <Check />
                        </TeacherCheckBox>
                        <StudentCheckBox onClick={stateStudent}>
                            <span>학생</span>
                            <Check />
                        </StudentCheckBox>
                    </div>
                    {/* 체크박스 */}
                        <SmallSpan>학교 또는 학원 이름 입력하기 *</SmallSpan>
                        <Input1 
                            type="text"
                            {...organization}
                            />
                        <ListWrap>
                            {list && list.map((list) => (
                                <div key={list.pk}>{list.name}</div>
                            ))}
                        </ListWrap>
                        <div style={{
                            display: 'flex',
                            justifyContent: 'space-between'
                        }}>
                            <SmallSpan>학년</SmallSpan>
                            <SmallSpan>반</SmallSpan>
                            <SmallSpan>번호</SmallSpan>
                        </div>
                        <div style={{
                            display: 'flex',
                            justifyContent: 'space-between'
                        }}>
                            <Input1
                                type="number"
                                size="50px" 
                                {...classroom} 
                            />
                            <Input1
                                type="number" 
                                size="50px" 
                                {...grade} 
                            />
                            <Input1
                                type="number" 
                                size="50px" 
                                {...tag} 
                            />
                        </div>
                        <ButtonWrapper>
                            <Button1 onClick={clickNextStudent} text="다음" size="38px" />
                        </ButtonWrapper>
                    </div>
                </Wrapper>
                }
            </Container>
            </>
        );
    } else {
        return(
            <>
               <RegisterUserInfoPage Userdata={members} /> 
            </>
        );
    }
}

export default RegisterMain;