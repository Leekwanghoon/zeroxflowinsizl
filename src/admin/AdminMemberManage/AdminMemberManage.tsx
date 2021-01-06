import React,{ useState } from 'react';
import styled from 'styled-components';
import AdminNaviLeft from '../AdminPlayListManage/AdminNaviLeft';
import Helmet from 'react-helmet';
import HeaderAdmin from './HeaderAdmin';
import AdminMemberMainManage from './AdminMemberMainManage';


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


const AdminMemberManage:React.FC = (props:any) => {

    const CookieValue = props.cookieValue[1];
    const [state, setState] = useState<Number>(-1);

    const onTotalStatus = () => {
        setState(-1);
    }
    const onAdminStatus = () => {
        setState(0);
    }
    const onTeacherStatus = () => {
        setState(1);
    }

    const onStudentStatus = () => {
        setState(2);
    }

    return(
        <Container>
            <Helmet>
                <title>Admin | 회원관리</title>
            </Helmet>
            <Navigation>
                <AdminNaviLeft />
            </Navigation>
            <Wrapper>     
                <Content>
                    <HeaderAdmin 
                        state={state} 
                        onTotalStatus={onTotalStatus}
                        onTeacherStatus={onTeacherStatus}
                        onStudentStatus={onStudentStatus}
                        onAdminStatus={onAdminStatus}
                    />
                    <AdminMemberMainManage tab={state} CookieValue={CookieValue} />
                </Content>
            </Wrapper>    
        </Container>
    );
}

export default AdminMemberManage;