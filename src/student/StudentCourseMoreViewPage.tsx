import React,{useState, useEffect} from 'react';
import queryString from 'query-string';
import { useDispatch, useSelector } from 'react-redux';
import styled from 'styled-components';
import NavigationStudent from '../components/NavigationStudent';
import { SearchByCategory, SearchData } from '../_actions/user_action';
import Input1 from '../utils/Input/Input';
import Banner from '../teacher/DashBoard/Banner';
import { RootState } from '../_reducers';
import Button1 from '../utils/Button1';


const Container = styled.div`
    overflow-y:scroll;
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




const StudentCourseMoreViewPage:React.FC = (props:any) => {

    const query = queryString.parse(props.location.search);

    const dispatch = useDispatch();
    const Data = useSelector((state:RootState) => state?.user?.data?.data?.contents);
    const CategoryData = useSelector((state:RootState) => state?.user.searchCategory?.data?.contents);

    console.log(CategoryData,"이거잉너아나"); //category일때옴
    
    
    
    // auth hoc만들어서 한번에 검증해버릴거임 귀차나
    const cookieValue = document.cookie.split('=');
    
    const [search, setSearch] = useState<string>("");


    useEffect(() => {
        const selected = 0;
        {query.keyword ? dispatch(SearchData(cookieValue[1],query.keyword)) :
            dispatch(SearchByCategory(cookieValue[1],selected ,query.categoriespk));
        }  
    },[dispatch,SearchByCategory,SearchData])


    const onSearch = (e:React.ChangeEvent<HTMLInputElement>) => {
        setSearch(e.target.value);
    }

    //검색하면 데이터 불러옴
    const onSearchButton = (e:any) => {
        dispatch(SearchData(cookieValue[1],search))
        props.history.push(`/student/StudentCourseMoreViewPage?categoriespk=&categoriesname=&keyword=${search}&type=KEYWORD`);
    }
    
    return(
        <>
            <NavigationStudent />
            <Container>
                <Banner cookieValue={cookieValue}/> 
                <SearchSection>
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
                    <>
                        {query.keyword ? <>
                        <MainTitle>
                            <p>{query?.keyword}의 검색결과</p>
                            <p>더보기</p>
                        </MainTitle>
                        <MainBody>
                            <div style={{
                                height:"300px",
                                display:"flex",
                                flexDirection:"row",
                            }}>
                                {Data && Data.map((content:any,index:any) => {
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
                        </MainBody></> :
                            <>
                            <MainTitle>
                                <p>{query?.categoriesname}의 검색결과</p>
                                <p>더보기</p>
                            </MainTitle>
                            <MainBody>
                                <div style={{
                                    height:"300px",
                                    display:"flex",
                                    flexDirection:"row",
                                }}>
                                    {CategoryData && CategoryData.map((content:any,index:any) => {
                                        const suburl = content.url.slice(32,43);
    
                                        return(
                                            <div 
                                                key={index}
                                            >
                                                <img width="100%" src={`https://img.youtube.com/vi/${suburl}/0.jpg`} alt="Logo" height="150px" 
                                                    style={{
                                                        margin:"10px",
                                                        padding:"10px",
                                                        maxWidth:"220pt"
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
                            </MainBody></>
                        }
                        </>
                    </MainSection>
            </Container>
        </>
    );
}

export default StudentCourseMoreViewPage;