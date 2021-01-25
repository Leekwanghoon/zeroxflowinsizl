import React, { useState } from 'react';
import styled from 'styled-components';
import CheckBoxComponent from '../../../utils/CheckBoxComponent';
import CircleComponent from '../../../utils/CircleComponent';
import { XMark } from '../../../utils/Icons';
import InputModule from './InputModule';


const Wrapper = styled.div`
    display:flex;
    justify-content:space-around;
    align-items:center;
    margin-top:10pt;
`;
const Container = styled.div`
    display:flex;
    justify-content:space-around;
    align-items:center;
`;


type Props = {
    state?:boolean
    onClick?:any
    onChange:any
    value:any
    onResetAnswer:any
    number:any
}

const AnswerComponent = ({value,onChange,state,onClick,onResetAnswer,number}:Props) => {
    return(
        <Wrapper>
            <CircleComponent number={number} />
            <CheckBoxComponent onClick={onClick} state={state} />
            <Container>
                <InputModule value={value} onChange={onChange} marginSizeRight="30pt" placeholder="답변을 작성해주세요" widthSize="623pt" minHeightSize="41pt" />
                <XMark onClick={onResetAnswer} opacity="1" size="20pt" />
            </Container>
        </Wrapper>
    );
}

export default AnswerComponent;