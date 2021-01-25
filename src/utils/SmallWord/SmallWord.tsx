import React from 'react';
import styled from 'styled-components';

const Button = styled.button `
    width: 32pt;
    height: 18pt;
    border-radius: 3px;
    background-color: rgb(255, 227, 25);
    margin-right: 8px;
    margin-top: 5px;
    margin-bottom: 5px;
    border: none;
    cursor: pointer;
`;

const SmallTitle = styled.div `
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: rgb(255, 227, 25);
    border-radius: 5pt;
    border: 0px;
    cursor: pointer;
    height: 16pt;
    width: 16pt;
    outline-style: none;
`;

const Label = styled.label `
    font-weight: bold;
    cursor: pointer;
    font-size: 8pt;
`;

type SmallWordProps = {
    Problems: string;
}

const SmallWord = ({
    Problems
} : SmallWordProps) => {
    
    //Problems = ["단어, 문장, 더빙 "]
    let newArray = Problems.split(', ') // 다시 돌려놓는것은 join
    newArray.pop();

    return (
    <div style={{display:'flex'}}>
            {newArray.map((item:any,index:number) => {
                return(
                    <Button key={index}>
                    <SmallTitle>
                        <Label>
                            {item}
                        </Label>
                    </SmallTitle>
                </Button>
                );
            })}
    </div>
    );
}

export default SmallWord;