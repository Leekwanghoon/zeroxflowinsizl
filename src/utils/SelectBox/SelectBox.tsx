import React, { useState } from 'react';
import styled from 'styled-components';
import chevronDown from '../../Images/images/images/Icon feather-chevron-down.png';



const DesignSelectBox = styled.select`
    -webkit-appearance: none;
    -moz-appearance: none;
    appearance: none;
    width:50pt;
    border:none;
    background-color:0% 0% no-repeat padding-box padding-box rgb(244,244,244);
    font-family: inherit;
    background: url(${chevronDown}) no-repeat 95% 50%;
    border-radius: 0px;
    background-size: 12pt;
    background-color: #a0988d6b;
    box-shadow: rgba(0, 0, 0, 0.16) 0px 3px 6px;
`;

type SelectBoxProps = {
    data?: any
    onChangeIndex?: any
}

const SelectBox = ({data,onChangeIndex}:SelectBoxProps) => {
    
    console.log(data,"dadada");
    
   
    

    return(
        <DesignSelectBox onChange={onChangeIndex}>
            {data.map((item:any) => (
                <option key={item.index} value={item.index}>
                    {item.index}
                </option>
            ))}
        </DesignSelectBox>
    );
}

export default SelectBox;
