import React,{useEffect, useState} from 'react';
import styled from 'styled-components';
import MedialToolManageComponent from './AdminContentContainer/MediaToolManageComponent';


const Wrapper = styled.section`
    height: 1200px;
`;

type Props = {
    type: Number;
    CookieValue: Number;
    setState:any;
}


const AdminContentMakeManageMain:React.FC<Props> = ({type, setState, CookieValue}) => {

    
   
    //type 1인지 2인지 에따라 컴포넌트가 편한다
    

    return(
        <Wrapper>
            {type === 1 ? <MedialToolManageComponent CookieValue={CookieValue} /> : null}
        </Wrapper>
    );
}

export default AdminContentMakeManageMain;