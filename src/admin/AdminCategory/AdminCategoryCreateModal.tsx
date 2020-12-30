import React, { useState } from 'react';
import styled from 'styled-components';
import axios from 'axios';

const Container = styled.div`
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    display: flex;
    z-index: 1;
    position: fixed;
    align-items: center;
    justify-content: center;
    background-color: rgba(0, 0, 0, 0.5);
    -webkit-tap-highlight-color: transparent;
`;

const Wrapper = styled.div`
    background: rgba(255, 255, 255, 0.5);
    border-radius: 8pt;
    opacity: 1;
    backdrop-filter: blur(23pt);
    box-sizing: border-box;
    width: 100%;
    max-width: 700px;
    padding: 20pt 37pt;
`;
const SmallWrapper = styled.div`
    border-radius: 8pt;
    opacity: 1;
    box-sizing: border-box;
    width: 100%;
    max-width: 700px;
    padding: 20pt 37pt;
    display: flex;
    flex-direction: column;
    align-items: center;
`;

const Title = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
`;

const Font = styled.p`
    font-size: 19pt;
    font-weight: bold;
    font-family: "Helvetica Neue";
    text-align: left;
`;

const NameTitle =  styled.div`
    display: flex;
    justify-content: flex-start;
    width: 212pt;
`;

const NameTiteFont = styled.p`
    font-size: 13pt;
    color: rgb(0, 0, 0);
    font-weight: bold;
    font-family: "Helvetica Neue";
    text-align: left;
`;
const InputRegion = styled.div`
        display: flex;
    justify-content: flex-start;
    width: 212pt;
    height: 38pt;
`;

const Input = styled.input`
    width: 100%;
    height: 100%;
    background-color: rgb(244, 244, 244);
    border-radius: 6px;
    box-shadow: rgba(0, 0, 0, 0.16) 0px 3px 6px 0px;
    border: 0px;
    padding-left: 11pt;
`;

const BottomButton = styled.div`
    width: 205pt;
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-top: 50px;
`;

const CancelButton = styled.div`
    width: 67pt;
    height: 27pt;
    background-color: rgb(219, 219, 219);
    border: 0px;
    border-radius: 5px;
    box-shadow: rgba(0, 0, 0, 0.16) 0px 3px 6px 0px;
    display: flex;
    justify-content: center;
    align-items: center;
    cursor: pointer;
`;

const ButtonTitle = styled.p`
    color: rgb(110, 110, 110);
    font-size: 11pt;
    font-weight: bold;
`;

const ConfirmButton = styled.div`
    width: 67pt;
    height: 27pt;
    background-color: rgb(255, 227, 25);
    border: 0px;
    border-radius: 5px;
    box-shadow: rgba(0, 0, 0, 0.16) 0px 3px 6px 0px;
    display: flex;
    justify-content: center;
    align-items: center;
    cursor: pointer;
`;

const DeleteWrap = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: flex-start;
    width: 212pt;
    margin-top: -4pt;
`;

const DeleteFont = styled.p`
    color: rgb(44, 44, 44);
    text-decoration: underline;
    font-size: 10pt;
    cursor: pointer;
`;

type AdminCategorModalProps = {
    setIsModalOpen:React.Dispatch<React.SetStateAction<boolean>>;
    CookieValue: Number;
    isModalUpdateOpen?: boolean;
    specificUpdateCategoryData?:any;
    setIsModalUpdateOpen: React.Dispatch<React.SetStateAction<boolean>>
}

const AdminCategoryCreateModal = ({setIsModalUpdateOpen,specificUpdateCategoryData,isModalUpdateOpen,setIsModalOpen,CookieValue}: AdminCategorModalProps) => {
    
    const [NameValue, setNameValue] =  useState<string>("");

    console.log(specificUpdateCategoryData,"dsjsdj");
    
    const NameValueChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setNameValue(e.target.value);
    }

    const CancelButtonHandler = () => {
        setIsModalOpen(false);
    }

    //카테고리 등록하기
    const onCategoryRegisterHandler = (event: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
        let body = {
            category_name: NameValue
        }
        console.log(CookieValue,"쿠키는 넘어오나");
        axios.post(`https://1hour.school/api/v1/category/register`,body, {
            headers: {
                Authorization: CookieValue
            }
        }).then(response => {
            console.log(response.data,"데이터가 안넘어오나");
            if(response.data.status === 200) {
                setIsModalOpen(false);
                setIsModalUpdateOpen(false);
            }else {
                alert("카테고리를 추가하는데 실패했습니다");
                setIsModalOpen(false);
                setIsModalUpdateOpen(false);
            }
        }) 
    }

    //카테고리 업데이트
    const onCategoryUpdateHandler = (event: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
        let body = {
            category_pk: specificUpdateCategoryData.category,
            category_name: NameValue
        }
        console.log(CookieValue,"쿠키는 넘어오나");
        axios.post(`https://1hour.school/api/v1/category/update`,body, {
            headers: {
                Authorization: CookieValue
            }
        }).then(response => {
            console.log(response.data,"데이터가 안넘어오나");
            if(response.data.status === 200) {
                setIsModalOpen(false);
                setIsModalUpdateOpen(false);
            }else {
                alert("카테고리를 추가하는데 실패했습니다");
                setIsModalOpen(false);
                setIsModalUpdateOpen(false);
            }
        }) 
    }

    //카테고리 삭제하기
    const CategoryDeleteHandler = () => {
        let body = {
            category_pk: specificUpdateCategoryData.category
        }
        console.log(CookieValue,"쿠키는 넘어오나");
        axios.post(`https://1hour.school/api/v1/category/remove`,body, {
            headers: {
                Authorization: CookieValue
            }
        }).then(response => {
            console.log(response.data,"데이터가 안넘어오나");
            if(response.data.status === 200) {
                setIsModalOpen(false);
                setIsModalUpdateOpen(false);
            }else { 
                alert("카테고리를 제거하는데 실패했습니다");
                setIsModalOpen(false);
                setIsModalUpdateOpen(false);
            }
        }) 
    }

    return(
        <Container>
            <Wrapper>
                <SmallWrapper>
                    <Title>
                        <Font>카테고리 생성하기</Font>
                    </Title>
                    <NameTitle>
                        <NameTiteFont>이름을 입력하세요</NameTiteFont>
                    </NameTitle>
                    <InputRegion>
                        {isModalUpdateOpen ? <Input value={NameValue} onChange={NameValueChange} placeholder={specificUpdateCategoryData.name} /> : <Input value={NameValue} onChange={NameValueChange} /> }
                    </InputRegion>
                    {isModalUpdateOpen 
                        ? 
                        <DeleteWrap onClick={CategoryDeleteHandler}>
                            <DeleteFont>카테고리 삭제</DeleteFont>
                        </DeleteWrap> 
                        : null}
                    <BottomButton>
                        <CancelButton onClick={CancelButtonHandler}>
                            <ButtonTitle>
                                취소
                            </ButtonTitle>
                        </CancelButton>
                        {isModalUpdateOpen ? 
                            <ConfirmButton onClick={onCategoryUpdateHandler}>
                                <ButtonTitle>
                                    수정하기
                                </ButtonTitle>
                            </ConfirmButton>:
                            <ConfirmButton onClick={onCategoryRegisterHandler}>
                                <ButtonTitle>
                                    확인
                                </ButtonTitle>
                            </ConfirmButton>
                        }
                    </BottomButton>
                </SmallWrapper>
            </Wrapper>
        </Container>
    );
}


export default AdminCategoryCreateModal;