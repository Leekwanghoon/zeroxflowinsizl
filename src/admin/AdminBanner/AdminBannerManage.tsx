import React,{ useState } from 'react';
import styled from 'styled-components';
import AdminNaviLeft from '../AdminNaviLeft';
import Helmet from 'react-helmet';
import AdminBannerManageMain from './AdminBannerManageMain';
import HeaderAdminBanner from './HeaderAdminBanner';

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
    const [state, setState] = useState<boolean>(true);

    
    const onBannerCategoryStatus = () => {
        setState(false);
    }
    const onBanneUpdateStatus = () => {
        setState(true);
    }

    return(
        <Container>
            <Helmet>
                <title>Admin | 배너관리</title>
            </Helmet>
            <Navigation>
                <AdminNaviLeft />
            </Navigation>
            <Wrapper>     
                <Content>
                    <HeaderAdminBanner 
                        onBanneUpdateStatus={onBanneUpdateStatus}
                        onBannerCategoryStatus={onBannerCategoryStatus}
                    />
                    <AdminBannerManageMain setState={setState} type={state} CookieValue={CookieValue} />
                </Content>
            </Wrapper>    
        </Container>
    );
}

export default AdminOrganizationManage;