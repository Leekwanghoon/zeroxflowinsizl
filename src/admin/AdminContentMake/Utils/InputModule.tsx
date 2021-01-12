import React from 'react';
import styled from 'styled-components';

type styleProps = {
    widthSize: string;
    minHeightSize: string;

}

const Input = styled.input`
    width: ${(props:styleProps) => props.widthSize};
    height: 62px;
    background: 0% 0% no-repeat padding-box padding-box rgb(244, 244, 244);
    box-shadow: rgba(0, 0, 0, 0.16) 0px 3px 6px;
    border-radius: 12px;
    border: 0px;
    padding-left: 22px;
    font-size: 19px;
    color: rgb(112, 112, 112);
    font-family: "Helvetica Neue", Light;
    min-height: ${(props:styleProps) => props.minHeightSize};
`;

type Props = {
    widthSize: string
    minHeightSize?:string
    value?:string
    onChange?:any
    onKeyUp?:any
    placeholder?:any
}

const InputModule = ({placeholder,onKeyUp,value,widthSize,onChange,minHeightSize="62px"}:Props) => {
    
    
    return(
        <>
            <Input 
                value={value} 
                onChange={onChange} 
                widthSize={widthSize} 
                minHeightSize={minHeightSize}
                onKeyUp={onKeyUp}
                placeholder={placeholder}
            />
        </>
    );
}

export default InputModule;