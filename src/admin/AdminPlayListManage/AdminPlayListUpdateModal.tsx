import React, { useState } from 'react';
import axios from 'axios';
import styled from 'styled-components';
import PublicButton from '../../utils/Button/PublicButton';
import chevronDown from '../../Images/images/images/Icon feather-chevron-down.png';
import SelectBox from '../../utils/SelectBox/SelectBox';


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

const PlaylistDelete = styled.span`
    cursor: pointer;
    margin-top: 22px;
    width: 54%;
    display: block;
    -webkit-text-decoration: underline;
    text-decoration: underline;
    font: 10px / 12px "Helvetica Neue";
    -webkit-letter-spacing: 0px;
    -moz-letter-spacing: 0px;
    -ms-letter-spacing: 0px;
    letter-spacing: 0px;
    color: rgb(44,44,44);
    margin-bottom: 20px;
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

const ChangeSequence = styled.div`
    display: flex;
    width: 100%;
    -webkit-box-pack: justify;
    justify-content: space-evenly;
    -webkit-box-align: center;
    align-items: center;
`;

const DropNumber = styled.div`
    position: relative;
    display: flex;
    -webkit-box-pack: justify;
    justify-content: space-between;
    -webkit-box-align: center;
    align-items: center;
    min-width: 90px;
    height: 33px;
    background: 0% 0% no-repeat padding-box padding-box rgb(244, 244, 244);
    box-shadow: rgba(0, 0, 0, 0.16) 0px 3px 6px;
    border-radius: 6px;
    border: 0px;
    margin-bottom: 5px;
    padding: 0px 10px;
    color: rgb(44, 44, 44);
    font: 300 12px / 15px "Helvetica Neue";
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



type AdminPlayListUpdateModalProps = {
    setIsModalUpdateOpen: React.Dispatch<React.SetStateAction<boolean>>;
    CookieValue: Number;
    playlist:any;
    data: any;
}

const AdminPlayListUpdateModal = ({data, playlist, setIsModalUpdateOpen, CookieValue}:AdminPlayListUpdateModalProps) => {

    console.log(data);
    console.log(playlist); //pk
    const [name, setName] = useState<string>(playlist.playlist_name);
    const [state,setState] = useState<boolean>(playlist.hidden);
    const [IsShowIndex,setIsShowIndex] = useState<boolean>(false); //false일때 안열림
    const [Index,setIndex] = useState<number>(playlist.index); 

    //이름 바꾼거
    const onPlayListNameHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
        setName(e.target.value);
    }
    // 업데이트버튼 눌렀나
    const PublicButtonChange = (e:any) => {
        setState(!state);
    }
    //취소버튼 눌렀나
    const CancelButtonHandler = (e:any) => {
        setIsModalUpdateOpen(false);
    }

    //selectBox눌렀나
    const ShowIndex = () => {
        setIsShowIndex(!IsShowIndex);
    }

    const onChangeIndex = (e:any) => {
        setIndex(e.target.value);
    }

    const PlayListRegister = (e:any) => {
        let body = {
            pk: playlist.pk,
            name,
            hidden: state,
            index: Index
        }
        axios.post(`https://1hour.school/api/v1/playlist/update`,body, {
            headers: {
                Authorization: CookieValue
            }
        }).then(response => {
            if(response.data.status === 200) {
                setIsModalUpdateOpen(false);
            } else {
                alert("플레이리스트 수정하기 실패했습니다");
            }
        });
    }

    const onPlayListDeleteHandler = (e:any) => {
        let body = {
            pk: playlist.pk
        }
        axios.post(`https://1hour.school/api/v1/playlist/remove`,body, {
            headers: {
                Authorization: CookieValue
            }
        }).then(response => {
            if(response.data.status === 200) {
                setIsModalUpdateOpen(false);
            } else {
                alert("플레이리스트 삭제하기 실패했습니다");
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
                <PlaylistDelete onClick={onPlayListDeleteHandler}>플레이리스트 삭제</PlaylistDelete>
                <ChangeSequence>
                    <MainButtonFont>순서 변경</MainButtonFont>
                    <DropNumber>
                        {!IsShowIndex ? 
                            <>
                                <span>{playlist.index}</span> 
                                <div>
                                    <img onClick={ShowIndex} width="20px" src={chevronDown} alt="chevron-down"/>
                                </div>
                            </>
                            : 
                            <>
                                <SelectBox data={data} onChangeIndex={onChangeIndex} />
                                {/* <div style={{transform:'rotateX(180deg)'}}>
                                        <img onClick={ShowIndex} width="20px" src={chevronDown} alt="chevron-down"/>
                                </div> */}
                            </>
                        }
                    </DropNumber>
                </ChangeSequence>
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
                    <ConfirmButton onClick={PlayListRegister}>
                        <ButtonTitle>
                            확인
                        </ButtonTitle>
                    </ConfirmButton>
                </BottomButton>
            </SmallWrapper>
        </Wrapper>
    </Container>
    );
}

export default AdminPlayListUpdateModal;