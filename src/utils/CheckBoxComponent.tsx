import React from 'react';
import styled from 'styled-components';
import checkBlue from '../Images/images/images/checkBlue.png';
import checkGray from '../Images/images/images/checkGray.png';

type Props = {
    state:any
    onClick:any
}

const CheckBoxComponent = ({state,onClick}:Props) => {

    
    return(
        <div onClick={onClick}>
            {state ? <img width="24pt" height="24pt" src={checkBlue} alt="logo" /> : <img width="24pt" height="24pt" src={checkGray} alt="logo" />}
        </div>
    );
}

export default CheckBoxComponent;