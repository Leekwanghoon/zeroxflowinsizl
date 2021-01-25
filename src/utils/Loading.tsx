import React from 'react';
import styled, {keyframes} from 'styled-components';

const Animation = keyframes`
    0% {
        opacity:0
    }
    50% {
        opacity:1
    }
    100% {
        opacity: 0;
    }
`;


const Container = styled.div`
    height:2301.33px;
    width:1903px;
    position:absolute;
    top:0;
    left:0;
    background:rgba(0,0,0,0.3);
`;

const Loader = styled.div`
    animation: ${Animation} 1s linear infinite;
    display:flex;
    justify-content:center;
    position:fixed;
    top: 600px;
    z-index:1;
    font-size:30px;
    color: black;
    width:1903px;
    height:2301.33px;
`;

type Props = {
    text?:string
}

const Loading = ({text="Loading..."}:Props) => {
    return(
        <Container>
            <Loader>
                <span>{text}</span>
            </Loader>
        </Container>
    );
}

export default Loading;