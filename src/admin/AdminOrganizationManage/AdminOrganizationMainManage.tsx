import React,{ useEffect, useState } from 'react'
import styled from 'styled-components';
import axios from 'axios';
import pencil from '../../Images/images/images/IconMaterialEdit.png';
import Button1 from '../../utils/Button1';
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
    type: Number;
    CookieValue: Number;
}


const AdminOrganizationMainManage:React.FC<Props> = ({type,CookieValue}) => {

    console.log(type,"이거");
    console.log(CookieValue);

    const [page, setPage] = useState<Number>(1);
    const [OrganizationData, setOrganizationData] = useState([]);
    const [searchValue, setValue] = useState<string>("");
    
    const searchChange = (e:any) => {
        console.log(e.target.value);
        setValue(e.target.value);
    }

    


    async function getData(search?:string) {
        if(search) {
            await axios.get(`https://1hour.school/api/v1/organization/list/${type}/${page}/query?keyword=${search}`, {
            headers: {
                        Authorization: CookieValue
                    }
        }).then(response => {
            if(response.data.status === 200) {
                console.log(response.data);
                setOrganizationData(response.data.data.rows);
            } else {
                alert("데이터 불러오기에 실패");
            }
        });
        } else {
            await axios.get(`https://1hour.school/api/v1/organization/list/${type}/${page}/query?keyword=`, {
            headers: {
                        Authorization: CookieValue
                    }
        }).then(response => {
            if(response.data.status === 200) {
                console.log(response.data);
                setOrganizationData(response.data.data.rows);
            } else {
                alert("데이터 불러오기에 실패");
            }
        });
        }
    }
    
    const onSubmit = (e:any) => {
        getData(searchValue)
    }

     useEffect(() => {
         getData();
     },[type])

    return(
        <>
            <SearchSection>
                <InputAlign>
                    <input style={{marginRight:"10px"}} type="text" placeholder="검색어를 입력하세요" value={searchValue} onChange={searchChange}  />
                    <Button1 size="30pt" heightSize="20pt" onClick={onSubmit} text="검색" color="#707070"  />
                </InputAlign>
            </SearchSection>
            
                <div>
                    <Table>
                        <Thead>
                            <tr>
                                <td></td>
                                <td></td>
                                <td>기관이름</td>
                                <td>타입</td>
                                <td>지역</td>
                                <td>등록 인원 (교사)</td>
                                <td>등록일</td>
                            </tr>
                        </Thead>
                        <Tbody>
                        {OrganizationData ? 
                            OrganizationData.map((member:any,index:any) => {
                            console.log(member.authority);
                            if( member.type === 0) {
                                member.type = "관리자";
                            } else if( member.type === 1) {
                                member.type = "선생님";
                            } else if( member.type === 2) {
                                member.type = "학생";
                            }
                            return(
                                    <tr key={index}>
                                        <td>#</td>
                                        <td>{index + 1}</td>
                                        <td>{member.name}</td>
                                        <td>{member.type}</td>
                                        <td>{member.region}</td>
                                        <td>{member.users}/({member.teachers})</td>
                                        <td>{member.created}</td>
                                        <td style={{cursor:'pointer'}}><img src={pencil} alt="logo" width="11px" height="11px" /></td>
                                    </tr>
                            );
                        })
                         : 
                            <div>로딩중</div>
                        }
                        </Tbody>
                    </Table>
                </div>

        </>
    );
}

export default AdminOrganizationMainManage;
