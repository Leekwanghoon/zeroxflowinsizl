import React from 'react';
import styled from 'styled-components';
import { FrequentlyInput } from '../../types';


const Container = styled.input`
    border: none;
    border-radius: 2px;
    background-color: white;
    width:${(props:FrequentlyInput) => props.size};
    ::-webkit-inner-spin-button{
        -webkit-appearance: none;
        -moz-appearance: none;
        margin: 0;       
    }
    ::-webkit-outer-spin-button{
        -webkit-appearance: none;
        -moz-appearance: none;
        margin: 0;   
    }   
`;

const Input1: React.FunctionComponent<FrequentlyInput> = ({
    placeholder,
    value,
    onChange,
    type,
    size
}) => <Container 
    placeholder={placeholder}
    value={value}
    type={type}
    onChange={onChange}
    size={size}
/>

export default Input1;