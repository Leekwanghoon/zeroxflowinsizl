import React,{ useEffect, useState } from 'react'
import styled from 'styled-components';
import pencil from '../../Images/images/images/IconMaterialEdit.png';
import axios from 'axios';
import Button1 from '../../utils/Button1';
import AdminCategoryCreateModal from './AdminCategoryCreateModal';

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
}


const AdminCategoryMainManage:React.FC<Props> = ({CookieValue}) => {

    const [CategoryListData, setCategoryListData] = useState<Object[]>([]);
    const [isModalOpen, setIsModalOpen] = useState<boolean>(false);
    const [isModalUpdateOpen, setIsModalUpdateOpen] = useState<boolean>(false);
    const [specificUpdateCategoryData,setspecificUpdateCategoryData] = useState<Object[]>([]);

    console.log(CookieValue);

    async function getCategoryList() {
        await axios.get(`https://1hour.school/api/v1/category/list`, {
            headers: {
                Authorization: CookieValue
            }
        }).then(response => {
            if(response.data.status === 200) {
                console.log(response.data.data);
                setCategoryListData(response.data.data)
            }
        });
    }

    useEffect(() => {
        getCategoryList();
    },[isModalOpen])

    
    const onCategoryCreate = () => {
        console.log("카테고리 생성하기 버튼을 눌렀엄");
        setIsModalOpen(true);
        setIsModalUpdateOpen(false);
    }

    const CategoryUpdateModalHandler = (category:any) => {
        setIsModalOpen(true);
        setIsModalUpdateOpen(true);
        setspecificUpdateCategoryData(category);
    }

    

    
    
    return(
        <>
            {isModalOpen ? 
                <>
                <AdminCategoryCreateModal 
                    isModalUpdateOpen={isModalUpdateOpen} 
                    CookieValue={CookieValue} 
                    setIsModalOpen={setIsModalOpen} 
                    specificUpdateCategoryData={specificUpdateCategoryData}
                    setIsModalUpdateOpen={setIsModalUpdateOpen}
                />
                    </> : null
            }
                <SearchSection>
                    <InputAlign>
                        <Button1 size="130pt" heightSize="20pt" onClick={onCategoryCreate} text="카테고리 생성하기"  />
                    </InputAlign>
                </SearchSection>
                <div>
                    <Table>
                        <Thead>
                            <tr>
                                <td></td>
                                <td>카테고리 이름</td>
                                <td>등록된 영상</td>
                                <td>생성일</td>
                            </tr>
                        </Thead>
                        <Tbody>
                        {CategoryListData ? 
                            CategoryListData.map((category:any,index:any) => {
                                return(
                                    <tr key={index}>
                                        <td>#</td>
                                        <td>{category.name}</td>
                                        <td>{category.size}</td>
                                        <td>{category.registered}</td>
                                        <td onClick={() => CategoryUpdateModalHandler(category)} style={{cursor:'pointer'}}><img src={pencil} alt="logo" width="11px" height="11px" /></td>
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

export default AdminCategoryMainManage;
