import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import { getPlayList } from '../../utils/Function/AsyncFunction';
const Wrapper = styled.section`
    height: 10%;
`;

const HeadTitle = styled.div`
    padding-top: 72px;
    padding-left: 20px;
`;

const HeadFont = styled.p`
    font-size: 26px;
    font-weight: Bold;
    font-family: Helvetica Neue;
    text-align: left;
`;

const HeadCategory = styled.div`
    display: flex;
    box-sizing: border-box;
    outline: none;
    border-bottom: 1px solid black;
`;

const HeadCategorySpan = styled.span`
    width: 10%;
    display: inline-flex;
    font-size: 18px;
    font-weight:bold;
    min-width:60pt;
    margin-left:20pt;
    letter-spacing:0px;
    align-items: center;
    flex-direction: column;
    justify-content: center;
    cursor: pointer;
    &:hover {
        color: yellow;
    }
`;

type HeaderProps = {
    CookieValue:number;
    ContentButton: (event: React.MouseEvent<HTMLSpanElement, MouseEvent>) => void
    OnClickPlayListButton: (event: React.MouseEvent<HTMLSpanElement, MouseEvent>) => void
}


const HeaderAdminPlayList = ({CookieValue,ContentButton,OnClickPlayListButton}:HeaderProps) => {

    const [Data,setData] = useState<[]>([]);
    
    useEffect(() => {
        getPlayList(1,CookieValue).then(function(data) {
            if(data.status === 200) {
                setData(data.data.rows);
            }
        }).catch(function(err) {
            alert("데이터 불러오는데 실패했습니다");
            console.log(err);
        })
    },[])

    

    return(
        <Wrapper>
            <HeadTitle>
                <HeadFont>
                    플레이리스트
                </HeadFont>
            </HeadTitle>
            <HeadCategory>
                <HeadCategorySpan onClick={ContentButton}>
                    목록
                </HeadCategorySpan>
                {Data.map((items:any,index) => {
                    return(
                        <HeadCategorySpan onClick={() => OnClickPlayListButton(items)} key={index}>
                            {items.playlist_name}
                        </HeadCategorySpan>
                    );
                })}
            </HeadCategory>
        </Wrapper>
    );
}

export default HeaderAdminPlayList;