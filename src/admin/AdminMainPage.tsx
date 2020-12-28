import React,{ useEffect, useState } from 'react';
import NavigationAdmin from '../components/NavigationAdmin';
import axios from 'axios';
import styled from 'styled-components';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '../_reducers';
import { SearchData } from '../_actions/user_action';
import Banner from '../teacher/DashBoard/Banner';
import Input1 from '../utils/Input/Input';
import Button1 from '../utils/Button1';
import Helmet from 'react-helmet';
import AdminCategoryModule from './AdminCategoryModule';

const Container = styled.div`
`;

const SearchSection = styled.div`
    display:flex;
    justify-content: center;
    align-items: center;
    height: 50px;
    :nth-child(2) {
        margin-right:10px;
    }
    :last-child {
        margin-left:10px;
    }
`;

const MainSection = styled.div`
    margin-bottom: 10px;
    margin-left: 10%;
    margin-right: 10%;
`;

const MainTitle = styled.div`
    height: 50px;
    display:flex;
    justify-content: space-between;
    align-items: center;
`;

const MainBody = styled.div`
    display:flex;
`;


const AdminMainPage: React.FC = (props:any) => {


    // let cookieValue = props.cookieValue; //string[]
    const cookieValue = document.cookie.split('=');
    // console.log(cookieValue,"여기지나냐");
    
    const dispatch = useDispatch();
    const Data = useSelector((state:RootState) => state);
    // console.log(Data?.user?.myList?.data?.list[0].contents,"data");

    // const listARepla = Data?.user?.myList?.data?.list[0].contents;
    

    
    const [data, setData] = useState<any>([]);
    const [search, setSearch] = useState<string>("");


    const [list1, setList1] = useState<any>([]);
    const [list2, setList2] = useState<any>([]);
    const listA = list1?.contents;
    const listB = list2?.contents;
    


    useEffect(() => {
        
        axios.get('https://1hour.school/api/v1/dashboard/playlist', {
                headers: {
                    Authorization: cookieValue[1]
                }
            }).then(response => {
                if(response.data.status === 200) {
                    setData(response?.data);
                    setList1(response?.data?.data?.list[0]);
                    setList2(response?.data?.data?.list[1]);
                } else if( response.data.status === 401 ) {
                    return alert("401error");
                } else {
                    console.log("그외");
                }
            });
        // dispatch(DashBoardData(props.cookieValue[1]));
    },[cookieValue[1]])



    const onSearch = (e:React.ChangeEvent<HTMLInputElement>) => {
        setSearch(e.target.value);
    }

    
    //검색하면 데이터 불러옴a
    const onSearchButton = (e:any) => {
        console.log(search,"search"); 
        dispatch(SearchData(cookieValue[1],search))
        props.history.push(`/admin/AdminCourseMoreViewPage?categoriespk=&categoriesname=&keyword=${search}&type=KEYWORD`);
    }

    
    const dummyData:any = [];
    return(
        <>
        <Helmet>
            <title>admin | MainPage</title>
        </Helmet>
        <NavigationAdmin />
            <Container>
                <Banner cookieValue={ cookieValue }/>
                <SearchSection>
                    <AdminCategoryModule dummyData={dummyData} />
                    <div style={{
                        border:"1px solid black",
                        marginRight: "10px",
                        padding: "1px"
                    }}>
                        <Input1 placeholder="검색어를 입력하세요" size="500px" onChange={onSearch} type="text" value={search}/>
                    </div>
                    <Button1 onClick={onSearchButton} size="10%" text="검색" />
                </SearchSection>
                    <MainSection>
                        <MainTitle>
                            <p>{list1.name}</p>
                            <p>더보기</p>
                        </MainTitle>
                        <MainBody>
                            <div style={{
                                height:"300px",
                                display:"flex",
                                flexDirection:"row",
                            }}>
                                {listA && listA.map((content:any,index:any) => {
                                    
                                    // const str = "https://www.youtube.com/watch?v="; //11개의 아이디,32개의글자
                                    const suburl = content.url.slice(32,43);

                                    return(
                                        <div 
                                            key={index}
                                        >
                                            <img width="100%" src={`https://img.youtube.com/vi/${suburl}/0.jpg`} alt="Logo" height="150px" 
                                                style={{
                                                    margin:"10px",
                                                    padding:"10px"
                                                }}/>
                                            <p>{content?.title}</p>
                                            <p>{content?.youtubeTitle?.slice(0,31)}...</p>
                                            <div>
                                                <label>단어</label>
                                                <label>문장</label>
                                                <label>더빙</label>
                                            </div>
                                        </div>
                                    );
                                })}
                            </div>
                        </MainBody>
                    </MainSection>
                    {/* 하단 */}
                    <MainSection>
                        <MainTitle>
                            <p>{list2.name}</p>
                            <p>더보기</p>
                        </MainTitle>
                        <MainBody>
                            <div style={{
                                height:"300px",
                                display:"flex",
                                flexDirection:"row",
                            }}>
                                {listB && listB.map((content:any,index:any) => {
                                    // console.log(content,"listB");
                                    // const str = "https://www.youtube.com/watch?v="; //11개의 아이디,32개의글자
                                    const suburl = content.url.slice(32,43);

                                    return (
                                        <div 
                                            key={index}
                                        >
                                            <img width="100%" src={`https://img.youtube.com/vi/${suburl}/0.jpg`} alt="Logo" height="150px" 
                                                style={{
                                                    margin:"10px",
                                                    padding:"10px"
                                                }}/>
                                            <p>{content?.title}</p>
                                            <p>{content?.youtubeTitle?.slice(0,31)}</p>
                                            <div>
                                                <label>단어</label>
                                                <label>문장</label>
                                                <label>더빙</label>
                                            </div>
                                        </div>
                                    );
                                })}
                            </div>
                        </MainBody>
                    </MainSection>
            </Container>
        </>
    );
}

export default AdminMainPage;