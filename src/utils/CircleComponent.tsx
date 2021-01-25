import React from 'react';
import styled from 'styled-components';

const Circle = styled.div`
    display:flex;
    justify-content:center;
    align-items:center;
    border-radius:100%;
    border:1px solid black;
    width:24pt;
    height:24pt;
`;

const SPAN = styled.span`
    color:#4A4A4A;
`;


type CircleProps = {
    size?:any;
    text?:any;
    number?:any;
}

const CircleComponent = ({size,number="1"}:CircleProps) => {
    return(
        <Circle>
            <SPAN>{number}</SPAN>
        </Circle>
    );
}

export default CircleComponent;