import React,{useEffect,useState} from 'react';
import styled from 'styled-components';
import { getClickPlayListData } from '../../utils/Function/AsyncFunction';
import AdminClickplayListAddButton from './AdminClickPlayListAddButton';


const Wrapper = styled.div`
    box-sizing: border-box;
    width: calc(100% - 77pt);
`;

const Title = styled.p`
    font-size: 14px;
    font-family: "Helvetica Neue";
    font-weight: bold;
    margin-top: 100pt;
    padding-left: 6pt;
    text-align: left;
`;

const MainBody = styled.div`
    display: flex;
    flex-direction: row;
`;

const Input = styled.input`
    width: 330px;
    height: 31px;
    background: 0% 0% no-repeat padding-box padding-box rgb(255, 255, 255);
    border: 0.5px solid rgb(112, 112, 112);
    padding-left:8pt;
    box-sizing: border-box;
    outline: none;
`;

const RightBody = styled.div`
    width: 418px;
    height: 238px;
    overflow-y: auto;
    background: 0% 0% no-repeat padding-box padding-box rgb(255, 255, 255);
    border: 0.5px solid rgb(112, 112, 112);
    margin-bottom: 22pt;
`;


const Content = styled.div`
    width:100%;
    padding:8px;
    box-sizing: border-box;
    outline: none;
`;

const ContentIn = styled.div`
   padding-left: 12pt;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    width: 100%;
`;

const SPan = styled.span`
    padding: 8px 0px;
    display: flex;
    -webkit-box-pack: justify;
    justify-content: space-between;
    font: 13px / 15px "Helvetica Neue";
    letter-spacing: 0px;
    color: rgb(44, 44, 44);
`;

const Button = styled.button`
    background-color: rgb(255, 227, 25);
    box-shadow: rgba(0, 0, 0, 0.16) 0px 3px 6px;
    border-radius: 6px;
    border: 0px;
    font: 15px / 17px "Helvetica Neue";
    letter-spacing: 0px;
    padding: 8px 14px;
`;

type Props = {
    PlayListItems: any;
    CookieValue: Number;
}

type contentProps = {
    title: string;
    playlist_name: string;
}

const AdminClickPlayList = ({PlayListItems,CookieValue}:Props) => {
    const [ContentData, setContentData] = useState<[]>([]);
    const [IsShowPlayList, setIsShowPlayList] = useState<boolean>(false);
    console.log(PlayListItems,"dskj");
    
    useEffect(() => {
        getClickPlayListData(PlayListItems.pk, CookieValue).then(function(data) {
            if(data.status === 200) {
                console.log(data.data,"뭐가있을까나 data.data에는");
                setContentData(data.data.contents);
            }
        }).catch(function(err) {
            alert("데이터를 불러오는데 실패했습니다");
            console.log(err);
        })
    },[PlayListItems])

    const ShowPlayList = () => {
        setIsShowPlayList(true);
    }

    return(
        <Wrapper>
            <Title>플레이리스트 이름</Title>
            <div style={{display:'flex', flexDirection:'column', textAlign:'center'}}>
                <div style={{display:'flex'}}>
                    <MainBody>
                        <Input readOnly value={PlayListItems.playlist_name} />
                    </MainBody>
                    <RightBody>
                    {ContentData.map((content:contentProps,index) => {
                        return(
                            <Content key={index}>
                                <ContentIn>
                                    <SPan>{content.title}</SPan>
                                </ContentIn>
                            </Content>
                        );
                    })}
                    </RightBody>
                </div>
                {IsShowPlayList 
                    ?
                    <>
                        <div style={{marginBottom:'20px'}}>
                            <Button onClick={ShowPlayList}>수정하기</Button>
                        </div>
                        <AdminClickplayListAddButton ContentData={ContentData} CookieValue={CookieValue} />
                    </>
                    :
                    <div>
                        <Button onClick={ShowPlayList}>플레이리스트에 추가하기</Button>
                    </div>
                }
            </div>
        </Wrapper>
    );
}

export default AdminClickPlayList;