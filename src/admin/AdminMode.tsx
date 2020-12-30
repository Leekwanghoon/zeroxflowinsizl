import React from 'react';
import styled from 'styled-components';
import AdminNaviLeft from './AdminNaviLeft';


const Wrapper = styled.div`
    display:flex;
    min-height:2350px;
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


const AdminMode:React.FC = () => {
    return(
        <Wrapper>
            <Navigation>
                <AdminNaviLeft />
            </Navigation>
            <Content>
                Content영역    
            </Content>
        </Wrapper>
    );
}

export default AdminMode;