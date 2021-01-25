import React,{ useEffect, useState } from 'react'
import styled from 'styled-components';
import pencil from '../../Images/images/images/IconMaterialEdit.png';
import axios from 'axios';
import Button1 from '../../utils/Button1';
import AdminPlayListCreateModal from './AdminPlayListCreateModal';
import PublicButton from '../../utils/Button/PublicButton';
import AdminPlayListUpdateModal from './AdminPlayListUpdateModal';
import AdminClickPlayList from './AdminClickPlayList';

const SearchSection = styled.div`
    margin-Top: 10px;
    display: flex;
    position: relative;
    height: 50px;
`;
const InputAlign = styled.div`
    position: absolute;
    right: 0;
`;

const Table = styled.table`
    width: 100%;
    border-collapse: collapse;
    color: rgb(44, 44, 44);
    font: 13px / 15px "Helvetica Neue";
`;

const Thead = styled.thead `
    font: bold 14px / 17px "Helvetica Neue";
    box-sizing: border-box;
    outline: none;
`;

const Tbody = styled.tbody`
    width: 100%;
    border-collapse: collapse;
    color: rgb(44, 44, 44);
    font: 13px / 15px "Helvetica Neue";
`;



type Props = {
    CookieValue: Number;
    IsClickContent: boolean;
    PlayListItems: any;
}

const AdminPlayListMainManage:React.FC<Props> = ({PlayListItems,IsClickContent,CookieValue}) => {

    const [PlayListData, setPlayListData] = useState<Object[]>([]);
    const [page, setPage] = useState<number>(1);
    const [isModalOpen, setIsModalOpen] = useState<boolean>(false);
    const [isModalUpdateOpen, setIsModalUpdateOpen] = useState<boolean>(false);
    const [specificPlayList, setSpecificplaylist] = useState<Object[]>([]);

    async function getPlayList() {
        await axios.get(`https://1hour.school/api/v1/playlist/load/${page}`, {
            headers: {
                Authorization: CookieValue
            }
        }).then(response => {
            if(response.data.status === 200) {
                console.log(response.data.data.rows);
                setPlayListData(response.data.data.rows)
            }
        });
    } 

    useEffect(() => {
        getPlayList();
    },[isModalOpen,isModalUpdateOpen,IsClickContent])

    const onPlayListCreate = () => {
        setIsModalOpen(true);
    }

    //목록 메인화면 노출 클릭

    //받아왔고 , == 
    const PublicButtonChange = (playlist:any) => {
        let hidden = playlist.hidden;
        let body = {
            pk: playlist.pk,
            name: playlist.playlist_name,
            hidden: !hidden,
            index: playlist.index
        }
        axios.post(`https://1hour.school/api/v1/playlist/update`,body, {
            headers: {
                Authorization: CookieValue
            }
        }).then(response => {
            if(response.data.status === 200) {
                getPlayList();
            } else {
                alert("메인화면 노출 업데이트 하는데 실패했습니다");
            }
        });
    }


    const PlayListUpdateModalHandler = (playlist:any) => {
        setIsModalUpdateOpen(true);
        setSpecificplaylist(playlist);
    }

    //플레이리스트
    if(IsClickContent === false) {
        return(
            <AdminClickPlayList CookieValue={CookieValue} PlayListItems={PlayListItems} />
        );
    }

    return(
        <>
        {isModalUpdateOpen ? 
                <>
                    <AdminPlayListUpdateModal data={PlayListData} playlist={specificPlayList} CookieValue={CookieValue} setIsModalUpdateOpen={setIsModalUpdateOpen} />
                </> : null
            }
            {isModalOpen ? 
                <>
                    <AdminPlayListCreateModal setIsModalOpen={setIsModalOpen} CookieValue={CookieValue} />
                </> : null
            }
            <SearchSection>
                <InputAlign>
                    <Button1 size="130pt" heightSize="20pt" onClick={() => onPlayListCreate()} text="플레이리스트 생성하기"  />
                </InputAlign>
            </SearchSection>
            <div>
                <Table>
                    <Thead>
                        <tr>
                            <td>플레이리스트 이름</td>
                            <td>화면순서</td>
                            <td>메인화면 노출</td>
                            <td></td>
                        </tr>
                    </Thead>
                    <Tbody>
                        {PlayListData ? 
                            PlayListData.map((playlist:any,index:any) => {
                                return(
                                    <tr key={index}>
                                        <td>{playlist.playlist_name}</td>
                                        <td>{playlist.index}</td>
                                        <td>
                                            <PublicButton 
                                                state={playlist.hidden}
                                                PublicButtonChange={() => PublicButtonChange(playlist)}
                                            />
                                        </td>
                                        <td onClick={() => PlayListUpdateModalHandler(playlist)} style={{cursor:'pointer'}}><img src={pencil} alt="logo" width="11px" height="11px" /></td>
                                    </tr>
                                );
                            })
                            : 
                            <div>데이터없당</div>
                        }
                    </Tbody>
                </Table>
            </div>
        </>
    );
}

export default AdminPlayListMainManage;
