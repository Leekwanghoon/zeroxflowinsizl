import React from 'react';
import styled from 'styled-components';
import { FrequnetlyButton } from '../types';

interface Props extends FrequnetlyButton {
    text: string,
    heightSize?: string,
    onClick: (event: React.MouseEvent<HTMLButtonElement>) => void;
}




// background-color: ${props => props.theme.color.yellowButton};
const Container = styled.button`
    width:${(props:FrequnetlyButton) => props.size};
    border: none;
    border-radius: 2px;
    height: ${(props:FrequnetlyButton) => props.heightSize};
    background-color: ${props => props.color};
    font-size: 12px;
    font-weight:bold;
    color:white;
    outline: none;
    cursor: pointer;
    &:hover {
        opacity: 0.7;
    }
`;

const Button1: React.FunctionComponent<Props> = ({
    onClick,
    text,
    size, 
    heightSize="20px",
    color="#ffe94a"}) => 
        {
            return(
            <Container 
                onClick={onClick} 
                size={size} 
                heightSize={heightSize} 
                color={color}
            >
                    {text}
            </Container>
            )
        }
export default Button1;
