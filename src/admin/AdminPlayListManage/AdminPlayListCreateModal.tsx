import React,{ useState } from 'react';
import axios from 'axios';
import styled from 'styled-components';
import PublicButton from '../../utils/Button/PublicButton';

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

const MainButton = styled.div`
    display: flex;
    justify-content: space-around;
    align-items: center;
    width: 73%;
    margin-top: 30px;
`;

const MainButtonFont = styled.p`
    margin: 0px;
    font: bold 12px / 15px "Helvetica Neue";
    letter-spacing: 0px;
    color: rgb(44, 44, 44);
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

type AdminPlayListModalProps = {
    setIsModalOpen:React.Dispatch<React.SetStateAction<boolean>>;
    CookieValue: Number;
}

const AdminPlayListCreateModal = ({
    setIsModalOpen,
    CookieValue
}:AdminPlayListModalProps) => {

    //false가 공개임 true가 비공개
    const [name, setName] = useState<string>("");
    const [state,setState] = useState<boolean>(true);

    const onPlayListNameHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
        setName(e.target.value);
    }


    const CancelButtonHandler = () => {
        setIsModalOpen(false);
    }

    const PublicButtonChange = (e:any) => {
        setState(!state);
    }

    const PlayListRegister = (e:any) => {
        let body = {
            name,
            hidden:state
        }
        axios.post(`https://1hour.school/api/v1/playlist/register`,body, {
            headers: {
                Authorization: CookieValue
            }
        }).then(response => {
            if(response.data.status === 200) {
                setIsModalOpen(false);
            } else {
                alert("PlayList등록하는데 실패했습니다");
                setIsModalOpen(false);
            }
        });

    }

    return(
        <Container>
        <Wrapper>
            <SmallWrapper>
                <Title>
                    <Font>플레이리스트 생성하기</Font>
                </Title>
                <NameTitle>
                    <NameTiteFont>이름을 입력하세요</NameTiteFont>
                </NameTitle>
                <InputRegion>
                    <Input value={name} onChange={onPlayListNameHandler} />
                </InputRegion>
                <MainButton>
                    <MainButtonFont>메인화면 노출여부</MainButtonFont>
                    <PublicButton PublicButtonChange={PublicButtonChange} state={state} />
                </MainButton>
                <BottomButton>
                    <CancelButton onClick={CancelButtonHandler}>
                        <ButtonTitle>
                            취소
                        </ButtonTitle>
                    </CancelButton>
                    <ConfirmButton>
                        <ButtonTitle onClick={PlayListRegister}>
                            확인
                        </ButtonTitle>
                    </ConfirmButton>
                </BottomButton>
            </SmallWrapper>
        </Wrapper>
    </Container>
    );
}

export default AdminPlayListCreateModal;