import React,{ useState } from 'react';
import styled from 'styled-components';
import AdminNaviLeft from '../AdminPlayListManage/AdminNaviLeft';
import Helmet from 'react-helmet';
import HeaderAdminOrganization from './HeaderAdminOrganization';
import AdminOrganizationMainManage from './AdminOrganizationMainManage';


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


const AdminOrganizationManage:React.FC = (props:any) => {

    const CookieValue = props.cookieValue[1];
    const [state, setState] = useState<Number>(-1);

    const onTotalStatus = () => {
        setState(-1);
    }
    const onSchoolStatus = () => {
        setState(0);
    }
    const onUserStatus = () => {
        setState(1);
    }

    return(
        <Container>
            <Helmet>
                <title>Admin | 기관관리</title>
            </Helmet>
            <Navigation>
                <AdminNaviLeft />
            </Navigation>
            <Wrapper>     
                <Content>
                    <HeaderAdminOrganization 
                        state={state} 
                        onTotalStatus={onTotalStatus}
                        onSchoolStatus={onSchoolStatus}
                        onUserStatus={onUserStatus}
                    />
                    <AdminOrganizationMainManage type={state} CookieValue={CookieValue} />
                </Content>
            </Wrapper>    
        </Container>
    );
}

export default AdminOrganizationManage;