import React from 'react';
import styled from 'styled-components';


const Wrapper = styled.div`
    display:flex;
    width:100%;
    justify-content:space-between;
`;

const HalfDiv = styled.div`
    display:flex;
    flex-direction:column;
    justify-content: space-between;
    width:50%;
    margin-left: 15pt;
`;

const EngDiv = styled.div`
    margin-bottom:10pt;
    width:100%;
`;

const Span = styled.span`
    font-size:35pt;
    font-weight:600;
`;

const SmallSpan = styled.p`
    font-size:24pt;
    font-weight:300;
`;


type FrequentlyType = {
    eng: string
    kor: string
}

type Props = {
    frequently:FrequentlyType[] | undefined
}

const ShowDataWord:React.FC<Props> = ({frequently}) => {
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
            <HalfDiv>
            {frequently.slice(0,3).map((item,index) => {
                return(
                    <div key={index}>
                        <EngDiv>
                            <Span>{item.eng}</Span>
                        </EngDiv>
                        <EngDiv>
                            <SmallSpan>{item.kor}</SmallSpan>
                        </EngDiv>
                    </div>
                );
            })}
            </HalfDiv>
            <HalfDiv>
            {frequently.slice(3,6).map((item,index) => {
                return(
                    <div key={index}>
                        <EngDiv>
                            <Span>{item.eng}</Span>
                        </EngDiv>
                        <EngDiv>
                            <SmallSpan>{item.kor}</SmallSpan>
                        </EngDiv>
                    </div>
                );
            })}
            </HalfDiv>
        </Wrapper>
    );
}

export default ShowDataWord;