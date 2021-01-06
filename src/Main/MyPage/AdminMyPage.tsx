import React,{ useEffect, useState } from 'react';
import styled from 'styled-components';
import axios from 'axios';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '../../_reducers';
import { MyInfo } from '../../_actions/user_action';
import Button1 from '../../utils/Button1';
import useInput from '../../hooks/useInput';
import NavigationAdmin from '../../components/NavigationAdmin';
const Container = styled.section`
    min-height: 75vh;
    display: flex;
    justify-content: center;
`;

const Wrapper = styled.div`
    width: 70%;
    height: 100%;
    margin-top: 7%;
    align-self: center;
`;

const Header = styled.div`
    height: 15%;
`;

const FontTitle = styled.div`
    height: 50%;
    font-weight: 600;
    font-size: 26pt;
`;

const FontRegion = styled.div`
    height: 50%;
    border-bottom: 1px solid black;
    display: flex;
    padding: 1rem;
`;

const FontText = styled.span`
    font-weight: 500;
    font-size: 22pt;
    text-align: left;
    margin-left: 10px;
    cursor: pointer;
    border-bottom: 7px solid yellow;
`;

const Main = styled.div`
    display: flex;
    flex-direction:column;
    height: 700px;
    padding: 30px;
`;

const WrapDIV = styled.div`
    display:flex;
    height: 10%;
    width:100%;
    margin: 22px auto;
`;
const WrapBut = styled.div`
    display:flex;
    height: 10%;
    width:100%;
    margin: 15px auto;
    justify-content: space-between;
`;


const Ptext  = styled.p`
    margin: auto 2rem;
`;

const Input = styled.input`
    margin-left: 20px;
    margin-top: 5px;
    background: 0% 0% no-repeat padding-box padding-box rgb(244, 244, 244);
    box-shadow: rgba(0, 0, 0, 0.16) 0px 3px 6px;
    border: 0px;
    border-radius: 12px;
    width: 400pt;
    height: 36pt;
    padding-left: 11pt;
`;


const AdminMyPage = (props:any) => {

    console.log(props,"MyPageProps");
    console.log(props.cookieValue[1]);
    const data = useSelector((state:RootState) => state.user.myInfo?.data);
    const dispatch = useDispatch();

    console.log(data);

    const organization = useInput("");
    const password = useInput("");
    const name = useInput("");

    const cookieValue = document.cookie.split("=");
    const email = localStorage.getItem("userEmail");

    useEffect(() => {
        dispatch(MyInfo(cookieValue[1],email));
    },[])

    const onClickBut = () => {
        console.log("클릭함");
    }

    const onClickUpdate = () => {
        console.log("클릭함");
        if( !name.value || !organization.value || !password.value ) {
            alert("모두다 입력하세요");
        }
        let body = {
            pk:email,
            name:name.value,
            authority:props.authority,
            email,
            organization: organization.value,
            password: password.value
        }
        axios.post(`https://1hour.school/api/v1/members/update`, body, {
            headers: {
                Authorization: cookieValue[1]
            }
        }).then(response => {console.log(response.data)});
        console.log(body,"body");
    }
    return(
        <>
            <NavigationAdmin />
            <Container>
                <Wrapper>
                    <Header>
                        <FontTitle>마이페이지</FontTitle>
                        <FontRegion>
                            <FontText>
                                나의정보
                            </FontText>
                        </FontRegion>
                    </Header>
                    <Main>
                        <WrapDIV>
                            <Ptext>회원이름</Ptext>
                            <Input
                                type="text"
                                {...name}
                                placeholder={data?.name ? data.name : "없다"} />
                            <Ptext>회원타입</Ptext>
                            <Input readOnly value="관리자" />
                        </WrapDIV>
                        <WrapDIV>
                            <Ptext>기관</Ptext>
                            <Input 
                                type="text"
                                placeholder={data?.organization ? data?.organization : "없다"} 
                                {...organization}
                            />
                            <Ptext>학번</Ptext>
                            <Input
                                readOnly value="없음"
                            />
                        </WrapDIV>
                        <WrapDIV>
                            <Ptext>메일주소</Ptext>
                            <Input
                                readOnly value={data?.email ? data.email : "없다"} />
                        </WrapDIV>
                        <WrapDIV>
                            <Ptext>비밀번호</Ptext>
            \                <Input type="password" {...password} />
                        </WrapDIV>
                        <WrapBut>
                            <Button1 onClick={onClickUpdate} text="수정하기" size="10%" heightSize="62%" color="rgb(0, 116, 201)" />
                            <Button1 onClick={onClickBut} text="탈퇴하기" size="10%" heightSize="62%" color="rgb(255, 119, 119)" />
                        </WrapBut>
                            <p>회원타입을 수정하려면 고객센터에 문의해주세요.</p>
                    </Main>
                </Wrapper>
            </Container>
        </>
    );
}

export default AdminMyPage;