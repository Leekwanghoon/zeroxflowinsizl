import React,{ useState } from 'react';
import styled from 'styled-components';


const PaginationDiv = styled.div`
    display: flex;
    -webkit-box-pack: center;
    justify-content: center;
    padding: 30pt 0pt 100pt;
`;

const Nav = styled.nav`
    color: rgb(44, 44, 44);
    display:flex;
`;

const UL = styled.ul`
    margin: 0;
    display: flex;
    padding: 0;
    flex-wrap: wrap;
    list-style: none;
    align-items: center;
`;

const LI = styled.li`
    margin: 0;
    display: flex;
    padding: 0;
    flex-wrap: wrap;
    list-style: none;
    align-items: center;
`;

type BUtton1Type = {
    currentPage?:number;
    pageNum?:any;
}

const BUtton1 = styled.button`
    ${(props:BUtton1Type) => 
        props.currentPage === props.pageNum ? `background:#cfcfce57;`:`background:white;`}
    color: rgba(0, 0, 0, 0.87);
    height: 32px;
    margin: 0 3px;
    padding: 0 6px;
    font-size: 0.875rem;
    min-width: 32px;
    box-sizing: border-box;
    text-align: center;
    font-family: "Roboto", "Helvetica", "Arial", sans-serif;
    font-weight: 400;
    line-height: 1.43;
    border-radius: 16px;
    border: 1px;
    // background:#cfcfce57;
    letter-spacing: 0.01071em;
    &:hover {
        background-color:#cfcfce57
    }
`;


type PageProps = {
    TotalPage?: any;
    PageClick?: any;
    currentPage?:any;
}


//TotalData를 가져와서 아래 보여준다
// TotalPage 는 전체 데이터수 currentPage = 현재페이지 PageClick
const PaginationModule = ({TotalPage,currentPage=1,PageClick}: PageProps) => {

        let numberTotalPage = parseInt(TotalPage);
        const Page = Math.ceil(numberTotalPage/10);
        const arr = Array.from({length: Page},(v,i) => i);
    

        //페이지가 10개가 넘어가면?
    //10*(i-1) ~ 10*i

        //currentPage랑 index랑 같으면 only 색칠한당

    //현재 10페이지잖아 99
    return(
        <>
            <PaginationDiv>
                <Nav>
                {arr.map((arr,index) => {
                    const pageNum = arr+1;
                    return(
                        <UL key={index}>
                            <LI>
                                <BUtton1 pageNum={pageNum} currentPage={currentPage} onClick={() => PageClick(pageNum)}>
                                    {arr+1}
                                </BUtton1>
                            </LI>
                        </UL>
                    )
                })}
                </Nav>
            </PaginationDiv>
        </>
    );

}

export default PaginationModule;