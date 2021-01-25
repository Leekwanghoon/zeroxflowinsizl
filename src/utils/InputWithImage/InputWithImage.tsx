import React from 'react';
import styled from 'styled-components';
import search from '../../../src/Images/images/images/browseSearch.png';

const Wrapper = styled.div`
    width:205px;
    height:35pt;
    border-radius:5px;
    border:1px solid black;
    box-shadow: rgba(0, 0, 0, 0.16) 0px 3px 6px;
    color: rgb(112, 112, 112);
    font-family: "Helvetica Neue", Light;
    font-size: 14px;
    position:relative;
    display:flex;
    `;

const Input = styled.input`
    margin-left:3px;
    border-radius:5px;
    width:100%;
    color: rgb(112, 112, 112);
    border:none;
    :focus{
        outline:none;
    }
`;

type Props = {
    onChange?: ((event: React.ChangeEvent<HTMLInputElement>) => void) | undefined
    Keyword?: string
    onKeyPress?: ((event: React.KeyboardEvent<HTMLInputElement>) => void) | undefined
}

const InputWithImage = ({onKeyPress,onChange,Keyword}:Props) => {
    return(
        <Wrapper>
            <img alt="logo" style={{width:"18px", margin:'12px'}} src={search} />
            <Input onKeyPress={onKeyPress} value={Keyword} onChange={onChange} />
        </Wrapper>
    );
}

export default InputWithImage;