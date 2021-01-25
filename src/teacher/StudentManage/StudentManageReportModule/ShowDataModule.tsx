import React,{ useEffect, useState } from 'react';
import styled from 'styled-components';


const Wrapper = styled.div`
    width:100%;
`;

const SPAN = styled.span`
    font-size: 33px;
    color: rgb(112, 112, 112);
    font-family: "Helvetica Neue";
    text-align: left;
    margin-top: 0px;
    margin-bottom: 10px;
`;

const SPANColor = styled(SPAN)`
    margin-left:3px;
    color:#8484cd;
`;


type Props = {
    data1:number | undefined
    data2:number | undefined
    data3:number | undefined
    text1:string
    text2:string
    text3:string
}


const ShowDataModule = ({
    data1,
    data2,
    data3,
    text1,
    text2,
    text3
}:Props) => {
        

    if(data1 === undefined) {
        data1 = 0;
    }
    
    if(data2 === undefined) {
        data2 = 0;
    }
    if(data3 === undefined) {
        data3 = 0;
    }
        
 

    return(
        <Wrapper>
        <div>
            <SPAN>{text1}</SPAN>
            <SPANColor>{data1}</SPANColor>
        </div>
        <div>
            <SPAN>{text2}</SPAN>
            <SPANColor>{data2}</SPANColor>
        </div>
        <div>
            <SPAN>{text3}</SPAN>
            <SPANColor>{data3}</SPANColor>
        </div>
    </Wrapper>
    );
}

export default ShowDataModule;