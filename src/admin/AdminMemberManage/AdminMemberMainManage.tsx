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
type TDType = {
    IsEven?: boolean;
    index: number;
}

const TD = styled.td`
    ${(props:TDType) => props.index%2 !== 0 ? 
        `background: #F2F2F2;` 
        :
        `background: #FFFFFF;`
    }
    border:0.5pt solid #F2F2F2;
    height: 30px;
`;

type Props = {
    tab: Number;
    CookieValue: Number;
}


const AdminMemberMainManage:React.FC<Props> = ({tab,CookieValue}) => {

    console.log(tab,"이거");
    console.log(CookieValue);
    const [IsEven, setIsEven] = useState<boolean>(false);

    const [page, setPage] = useState<Number>(1);
    const [memberData, setMemberData] = useState([]);
    const [searchValue, setValue] = useState<string>("");
    
    const searchChange = (e:any) => {
        console.log(e.target.value);
        setValue(e.target.value);
    }

    


    async function getData(search?:string) {
        if(search) {
            await axios.get(`https://1hour.school/api/v1/members/list/${tab}/${page}/query?keyword=${search}`, {
            headers: {
                        Authorization: CookieValue
                    }
        }).then(response => {
            if(response.data.status === 200) {
                console.log(response.data);
                setMemberData(response.data.data.rows);
            } else {
                alert("데이터 불러오기에 실패");
            }
        });
        } else {
            await axios.get(`https://1hour.school/api/v1/members/list/${tab}/${page}/query?keyword=`, {
            headers: {
                        Authorization: CookieValue
                    }
        }).then(response => {
            if(response.data.status === 200) {
                console.log(response.data);
                setMemberData(response.data.data.rows);
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
    },[tab])

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
                                <td>회원이름</td>
                                <td>타입</td>
                                <td>메일주소/ID</td>
                                <td>기관(학교 또는 학원)</td>
                                <td>학번</td>
                                <td>가입일</td>
                            </tr>
                        </Thead>
                        <Tbody>
                        {memberData ? 
                            memberData.map((member:any,index:any) => {
                            console.log(member.authority);
                            if( member.authority === 0) {
                                member.authority = "관리자";
                            } else if( member.authority === 1) {
                                member.authority = "선생님";
                            } else if( member.authority === 2) {
                                member.authority = "학생";
                            }
                            return(
                                    <tr key={index}>
                                        <td><input type="checkbox" /></td>
                                        <td>#</td>
                                        <TD index={index} IsEven={IsEven}>{member.name}</TD>
                                        <TD index={index} IsEven={IsEven}>{member.authority}</TD>
                                        <TD index={index} IsEven={IsEven}>{member.pk}</TD>
                                        <TD index={index} IsEven={IsEven}>{member.organization_name}</TD>
                                        <TD index={index} IsEven={IsEven}>{member.id}</TD>
                                        <TD index={index} IsEven={IsEven}>{member.registered}</TD>
                                        <td style={{cursor:'pointer'}}><img src={pencil} alt="logo" width="11px" height="11px" /></td>
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

export default AdminMemberMainManage
