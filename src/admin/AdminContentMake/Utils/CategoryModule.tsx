import React,{useEffect, useState} from 'react';
import styled from 'styled-components';
import {getCategoryModuleList} from '../../../utils/Function/AsyncFunction';
import {Check} from '../../../utils/Icons';


const Wrap = styled.div`
    display:flex;
    flex-direction: column;
`;

const CategoryWrap = styled.div`
    width: 254px;
    box-shadow: 3px 3px 3px 0px #00000029;
    border-radius: 12px;
    height: 62px;
    border: 1px solid #ced4da;
    cursor: pointer;
    margin-left:50px;
`;
const CategoryDIV = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    height: 100%;
    padding-left: 12px;
    padding-right: 15px;
`;

const BottomWrap = styled.div`
    width: 254px;
    box-shadow: 3px 3px 3px 0px #00000029;
    border-radius: 12px;
    height: 320px;
    border: 1px solid #ced4da;
    cursor: pointer;
    margin-left:50px;
    padding:20pt;
    z-index:1;
`;

const DIV = styled.div`
    display:flex;
    height:20%;
    align-items: center;
    &:hover {
        background-color: yellow;
    }
`;

const DIVG = styled.div`
    display:flex;
    height:20%;
    align-items: center;
    background-color: yellow;
    &:hover {
        background-color: gray;
    }
`;


const SPAN = styled.span`
    margin-left:12px;
`;

type Props = {
    CookieValue:Number;
    onClickCheckButton:any;
    EmptyArray:any;
}

const CategoryModule = ({onClickCheckButton,CookieValue,EmptyArray}:Props) => {
    
   
    const [OptionData, setOptionData] = useState<[]>([]);
    const [IsClick, setIsClick] = useState<boolean>(false);




    useEffect(() => {
        getCategoryModuleList(CookieValue)
            .then(function(data) {
                if(data.status === 200) {
                    setOptionData(data.data);
                } else {
                    console.log("카테고리 데이터 불러오는데 실패")
                }
            }).catch(function(err) {
                alert("데이터를 불러오는데 실패했당");
                console.log(err);
            })
    },[])

    const IsShowCategory = () => {
        setIsClick(!IsClick);
    }

  
   

    return(
        <Wrap>
            <CategoryWrap onClick={IsShowCategory}>
                <CategoryDIV>
                    <Check />
                </CategoryDIV>
            </CategoryWrap>
            {IsClick ? 
                <BottomWrap>
                    {OptionData && OptionData.map((item:any,index:number) => {
                        return(
                            <DIV onClick={() => onClickCheckButton(item.category,index)} key={item.category}>
                                <Check />
                                <SPAN>{item.name}</SPAN>
                            </DIV>
                        ) 
                    })}
                </BottomWrap> 
            : null}
        </Wrap>
    );
}

export default CategoryModule;