import React from 'react';
import styled from 'styled-components';

type styleProps = {
    widthSize: string;
    minHeightSize: string;
}

const TextArea = styled.textarea`
    width: ${(props:styleProps) => props.widthSize};
    height: 62px;
    background: 0% 0% no-repeat padding-box padding-box rgb(244, 244, 244);
    box-shadow: rgba(0, 0, 0, 0.16) 0px 3px 6px;
    border-radius: 12px;
    border: 0px;
    padding-left: 22px;
    font-size: 19px;
    padding:10px;
    color: rgb(112, 112, 112);
    font-family: "Helvetica Neue", Light;
    min-height: ${(props:styleProps) => props.minHeightSize};
`;

type Props = {
    widthSize: string
    minHeightSize?:string
    value?:string
    onChange?:any
}

const TextAreaModule = ({value,onChange,widthSize,minHeightSize="62px"}:Props) => {
    
    
    return(
        <>
            <TextArea 
                value={value}
                onChange={onChange} 
                widthSize={widthSize} 
                minHeightSize={minHeightSize}
            />
        </>
    );
}

export default TextAreaModule;