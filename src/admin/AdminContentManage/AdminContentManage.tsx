import React,{ useEffect, useState } from 'react';
import styled from 'styled-components';
import AdminNaviLeft from '../AdminPlayListManage/AdminNaviLeft';
import Helmet from 'react-helmet';
import axios from 'axios';
import HeaderAdminContentManage from './HeaderAdminContentManage';
import AdminContentManageMain from './AdminContentManageMain';


const Container = styled.div`
    display:flex;
    min-height:2350px;
`;
const Wrapper = styled.div`
    margin-left: 74px;
    margin-top: 108px;
    width:100%;
`;

const Navigation = styled.div`
    text-align: center;
    width: 28%;
    box-shadow: 4px 3px 6px rgba(0,0,0,0.16);
    margin: 0px 20px 0px 10px;
    padding-right: 40px;
`;


const Content = styled.div`
    width:85%;
`;


const AdminContentManage:React.FC = (props:any) => {

    const CookieValue = props.cookieValue[1];
    const [state, setState] = useState<Number>(-1);

    const [HeaderClickIsLoading, setHeaderClickIsLoading] = useState<boolean>(false);

    console.log(state);

    axios.get(`https://1hour.school/api/v1/category/list`, {
            headers: {
                Authorization: CookieValue
            }
        }).then(response => {console.log(response.data)});
    //콘텐츠관리 전체영상 -1  영화속OST 0 / 공부할때듣기좋읂팝송 1 / TED강의 2 / 세서미스트리트 3 /singalong 4
    const onTotalStatus = () => {
        setState(-1);
    }
    const onMovieInOST = () => {
        console.log("클릭해따");
        setState(1);
        setHeaderClickIsLoading(true);
    }
    const onListenPopsong = () => {
        setState(2);
        setHeaderClickIsLoading(true);
    }

    const onTedCourse = () => {
        setState(3);
        setHeaderClickIsLoading(true);
    }
    const onStreet = () => {
        setState(4);
        setHeaderClickIsLoading(true);
    }
    const onSingAlong = () => {
        setState(5);
        setHeaderClickIsLoading(true);
    }



    return(
        <Container>
            <Helmet>
                <title>Admin | 콘텐츠관리</title>
            </Helmet>
            <Navigation>
                <AdminNaviLeft />
            </Navigation>
            <Wrapper>     
                <Content>
                    <HeaderAdminContentManage 
                        state={state}
                        onTotalStatus={onTotalStatus}
                        onMovieInOST={onMovieInOST}
                        onListenPopsong={onListenPopsong}
                        onTedCourse={onTedCourse}
                        onStreet={onStreet}
                        onSingAlong={onSingAlong}
                    />
                    <AdminContentManageMain HeaderClickIsLoading={HeaderClickIsLoading} setHeaderClickIsLoading={setHeaderClickIsLoading} category={state} CookieValue={CookieValue} />
                </Content>
            </Wrapper>    
        </Container>
    );
}

export default AdminContentManage;