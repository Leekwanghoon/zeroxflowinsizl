import React,{ useState } from 'react';
import styled from 'styled-components';
import AdminNaviLeft from '../AdminPlayListManage/AdminNaviLeft';
import Helmet from 'react-helmet';
import HeaderAdminHomeworkManage from '../AdminHomeworkManage/HeaderAdminHomeworkManage';
import AdminHomeworkManageMain from '../AdminHomeworkManage/AdminHomeworkManageMain';

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


const AdminHomeworkManage:React.FC = (props:any) => {

    const CookieValue = props.cookieValue[1];
    
    //true 마감 false 진행중
    const [state, setState] = useState<boolean>(false);


    const onProgress = () => {
        setState(false);
    }
    const onDeadline = () => {
        setState(true);
    }
    

    return(
        <Container>
            <Helmet>
                <title>Admin | 과제마감 관리</title>
            </Helmet>
            <Navigation>
                <AdminNaviLeft />
            </Navigation>
            <Wrapper>     
                <Content>
                    <HeaderAdminHomeworkManage 
                        state={state}
                        onProgress={onProgress}
                        onDeadline={onDeadline}
                    />
                    <AdminHomeworkManageMain state={state} CookieValue={CookieValue} />
                </Content>
            </Wrapper>    
        </Container>
    );
}

export default AdminHomeworkManage;