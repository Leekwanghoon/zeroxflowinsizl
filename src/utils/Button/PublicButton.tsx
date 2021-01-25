import React, { useState } from 'react';
import styled from 'styled-components';

// type

type Props = {
    state?:any;
}

const CheckBox = styled.div`
    ${(props:Props) => props.state ? `background:#707070;` :`background:#FFE319;`}
    position: relative;
    cursor: pointer;
    display: block;
    border: 2px solid #D3D3BE;
    height: 25px;
    width: 60px;
    border-radius: 60px;
`;
//+ `` ,
const Gong = styled.div`
    ${(props:Props) => props.state ? 
        `width: 20px;`
     : 
        `width:20px;
        transform: translatex(38px);`
        }
    background: #fafafa;
    position: absolute;
    height:20px;
    top: 1px;
    left: 0px;
    box-sizing: border-box;     
    border: none;
    border-radius: 100%;
    transition: .3s;
`;

type PublicButtonProps = {
    state?: boolean;
    PublicButtonChange?: ((event: React.MouseEvent<HTMLDivElement, MouseEvent>) => void)
}

const PublicButton = ({state=false,PublicButtonChange}: PublicButtonProps) => {

    return(
        <>
            <CheckBox state={state} onClick={PublicButtonChange}>
                <Gong state={state}></Gong>
            </CheckBox>
        </>
    );
}

export default PublicButton;