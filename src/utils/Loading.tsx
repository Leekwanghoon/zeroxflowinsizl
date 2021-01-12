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
    height:1000vh;
    width:1000px;
`;

const Loader = styled.div`
    animation: ${Animation} 1s linear infinite;
    display:flex;
    justify-content:center;
    align-items:center;
    z-index:1;
    font-size:30px;
    color: black;
    height:100vh;
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