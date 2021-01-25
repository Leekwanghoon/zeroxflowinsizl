import React,{useState} from 'react';
import styled from 'styled-components';


type PercentBarProps = {
    color?:string;
}


const DIV = styled.div`
    background-color:${(props:PercentBarProps) => props.color};
    width: 55pt;
    height: 18pt;
    display:flex;
    justify-content:center;
    align-items:center;
    border-radius: 5px;
    font-weight:bold;
`;

const Circle = styled.div`
    margin-right: 4pt;
    width: 10px;
    height: 10px;
    background-color: white;
    border-radius: 50px;
`;


const Down = styled.div`
    margin-right: 4pt;
    width: 0px;
    height: 0px;
    border-left: 5px solid transparent;
    border-right: 5px solid transparent;
    border-top: 10px solid white;
`;
const Up = styled.div`
    margin-right: 4pt;
    width: 0px;
    height: 0px;
    border-left: 5px solid transparent;
    border-right: 5px solid transparent;
    border-bottom: 10px solid white;
`;

const Span = styled.span`
    color: white;
`;

type Props = {
    color?:string;
    newPercent?:number;
}



const PercentBar = ({color, newPercent=97}:Props) => {
    

    return(    
        <DIV color={color}>
            {newPercent >= 90 && newPercent <= 100 && <Circle />}
            {newPercent >= 60 && newPercent < 90 && <Up />}
            {newPercent < 60  && <Down />}
            <Span>{newPercent}%</Span>
        </DIV>
    );
}

export default PercentBar;