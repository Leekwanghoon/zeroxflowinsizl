import React from 'react';
import styled from 'styled-components';


const Wrapper = styled.div`
    display:flex;
    flex-direction:column;
    width:100%;
`;

const Span = styled.p`
    font-size:24pt;
    font-weight:bold;
    color:black;
`;
const SmallSpan = styled.p`
    font-size:14pt;
    font-weight:300;
    color:gray;
`;



type FrequentlyType = {
    eng: string
    kor: string
}

type Props = {
    frequently:FrequentlyType[] | undefined
}

const ShowDataSentence:React.FC<Props> = ({frequently}) => {
    console.log(frequently,"frequently");
    if(frequently === undefined) {
        frequently = [
            {
                eng:"",
                kor:""
            }   
        ]
    }
    return(
        <Wrapper>
            {frequently.map((item,index) => {
                return(
                    <div key={index}>
                        <Span>{item.eng}</Span>
                        <SmallSpan>{item.kor}</SmallSpan>
                    </div>
                );
            })}
        </Wrapper>
    );
}

export default ShowDataSentence;