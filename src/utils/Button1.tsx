import React from 'react';
import styled from 'styled-components';
import { FrequnetlyButton } from '../types';

interface Props extends FrequnetlyButton {
    text: string,
    heightSize?: string,
    margin?:any,
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
    margin:${(props:FrequnetlyButton) => props.margin};
    color:black;
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
    margin="0px",
    heightSize="20px",
    color="#ffe94a"}) => 
        {
            return(
            <Container 
                onClick={onClick} 
                size={size} 
                heightSize={heightSize} 
                color={color}
                margin={margin}
            >
                    {text}
            </Container>
            )
        }
export default Button1;
