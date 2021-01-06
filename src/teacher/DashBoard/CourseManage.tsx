import React,{useState, useEffect} from 'react';
import styled from 'styled-components';
import Navigation from '../../components/Navigation';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '../../_reducers';
import { deadlineInfo } from '../../_actions/user_action';
import  Button1  from '../../utils/Button1';
import { Gear } from '../../utils/Icons';

const Container = styled.section`
    min-height: 75vh;
    display: flex;
    justify-content: center;
`;

const Wrapper = styled.div`
    width: 70%;
    height: 100%;
    margin-top: 7%;
    align-self: center;
`;

const Header = styled.div`
    height: 15%;
`;


const FontTitle = styled.div`
    height: 50%;
    font-weight: 600;
    font-size: 26pt;
`;

const FontRegion = styled.div`
    height: 50%;
    border-bottom: 1px solid black;
    display: flex;
    padding: 1rem;
`;

const FontText = styled.span`
    font-weight: 500;
    font-size: 22pt;
    text-align: left;
    margin-left: 10px;
    cursor: pointer;
    &:hover {
        font-size: 24pt;
        font-weight:bold;
        border-bottom: 7px solid yellow;
    }
`;

const MainWrapper = styled.div`
    display:flex;
    justify-content:center;
    flex-direction: column;
    align-items: center;
`;

const Main = styled.div`
    height: 200px;
    display:flex;
    justify-content:space-between;
    width: 80%;
    padding: 1rem 0;
    border-bottom: 1px solid black;
    position: relative;
`;

const Img = styled.img`
    width:132pt;
`;

const Middletitle = styled.div`
    width: 30%;
    height: 100%;
`;

const RightTitle = styled.div`
    width: 42%;
    height: 100%;
    display:flex;
    justify-content:space-evenly;
    align-items:center;
`;

const IconPosi = styled.div`
    position: absolute;
    top: 10px;
    right: 20px;
    cursor: pointer;
`;

const Paging = styled.div`
    margin: 10px auto;
    display: flex;
    justify-content: center;
`;

const CourseManage:React.FC = (props:any) => {


    const deadlineInfoData = useSelector((state:RootState) => state.user.deadlineInfo?.data);
    const dispatch = useDispatch();
    console.log(deadlineInfoData);

    //closed: false 진행중,  closed: true  마감
    const [closed, setClosed] = useState<boolean>(true);
    const [page,setPage] = useState<Number>(1);

    const cookieValue = document.cookie.split('=');

    useEffect(() => {
        dispatch(deadlineInfo(cookieValue[1], closed, page));
        
    }, [])

    


    //버튼 변화 진행중버튼클릭
    const closedStatusFalse = () => {
        console.log("진행중클릭"); // false
        setClosed(false)
        let closed = false;
        dispatch(deadlineInfo(cookieValue[1], closed, page))
        console.log(closed,"false");
    }
    // 마감 버튼 클릭
    const closedStatusTrue = () => {
        console.log("마감클릭"); //true
        setClosed(true);
        let closed = true;
        dispatch(deadlineInfo(cookieValue[1], closed, page))
        console.log(closed,"true");
    }

    const onClick = () => {
        console.log("클릭");
    }
    return(
        <>
        <Navigation />
        <Container>
           <Wrapper>
               <Header>
                    <FontTitle>과제마감 관리</FontTitle>
                    <FontRegion>
                        <FontText onClick={closedStatusFalse}>
                            진행중
                        </FontText>
                        <FontText onClick={closedStatusTrue}>
                            마감
                        </FontText>
                    </FontRegion>
               </Header>
               {closed ? 
                    deadlineInfoData?.rows.map((deadInfo:any,index:number) => {
                        console.log(deadInfo,"url봅기");
                        const suburl = deadInfo.url.slice(32,43);
                        return(
                            <MainWrapper key={index}>
                                <Main>
                                    <Img src={`https://img.youtube.com/vi/${suburl}/0.jpg`} alt="Logo"/>
                                    <Middletitle>
                                        <div>
                                            {deadInfo.deadline}
                                        </div>
                                        <div>
                                            <span>{deadInfo.title}</span>
                                            {
                                                deadInfo.youtubeTitle.length >= 20 ? 
                                                <p>{deadInfo.youtubeTitle.slice(0,20)}...</p>
                                                : <p>{deadInfo.youtubeTitle}</p>
                                            }
                                        
                                        </div>
                                        <div>
                                            단어, 문장, 더빙
                                        </div>
                                        <div>
                                            {deadInfo.registered}
                                        </div>
                                    </Middletitle>
                                    <RightTitle>
                                        <div style={{marginRight:"1rem"}}>
                                            <p>과제제출 현황</p>
                                            <p>{deadInfo.carried}/{deadInfo.students}</p>
                                        </div>
                                        <Button1 onClick={onClick} text="학생 리포트" size="7rem" />
                                        <IconPosi>
                                            <Gear />
                                        </IconPosi>
                                    </RightTitle>
                                </Main>
                            </MainWrapper>
                        );
                    }) 
                    :
                    <div>
                        진행중
                    </div>
                }
                <Paging>
                    <div>1</div>
                </Paging>
            </Wrapper> 
        </Container>
        </>
    );
}

export default CourseManage;
