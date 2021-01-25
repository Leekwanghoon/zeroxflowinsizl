import React,{ useState } from 'react';
import styled from 'styled-components';
import AdminNaviLeft from '../AdminPlayListManage/AdminNaviLeft';
import Helmet from 'react-helmet';
import axios from 'axios';
import HeaderAdminContentMake from './HeaderAdminContentMake';
import AdminContentMakeManageMain from './AdminContentMakeManageMain';


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


const AdminContentMakeManage:React.FC = (props:any) => {

    const CookieValue = props.cookieValue[1];
    const [state, setState] = useState<Number>(5);

    console.log(state);

    
    //콘텐츠만들기 영상마법사 1 /  문장 만들기 2 / 싱크맞추기 3 / 단어만들기 4 / 문제 만들기 5
    const onVideoWizard = () => {
        console.log("클릭해따");
        setState(1);
    }
    const onMakeSentence = () => {
        setState(2);
    }

    const onSyncTiming = () => {
        setState(3);
    }
    const onMakeWord = () => {
        setState(4);
    }
    const onMakeExam = () => {
        setState(5);
    }

    return(
        <Container>
            <Helmet>
                <title>Admin | 콘텐츠 만들기</title>
            </Helmet>
            <Navigation>
                <AdminNaviLeft />
            </Navigation>
            <Wrapper>     
                <Content>
                    <HeaderAdminContentMake 
                        state={state}
                        onVideoWizard={onVideoWizard}
                        onMakeSentence={onMakeSentence}
                        onSyncTiming={onSyncTiming}
                        onMakeWord={onMakeWord}
                        onMakeExam={onMakeExam}
                    />
                    <AdminContentMakeManageMain 
                        type={state} 
                        setState={setState} 
                        CookieValue={CookieValue} 
                    />
                </Content>
            </Wrapper>    
        </Container>
    );
}

export default AdminContentMakeManage;