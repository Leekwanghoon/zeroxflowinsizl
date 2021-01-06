import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import axios from 'axios';

const PTex = styled.div`
    font-size: 1rem;
    font-family: "Roboto", "Helvetica", "Arial", sans-serif;
    font-weight: 400;
    line-height: 1.5;
    letter-spacing: 0.00938em;
`;

const InnerDIV = styled.div`
    display: flex;
    width: 93%;
    margin-top: 30px;
    border-bottom: 0.5pt solid rgb(222, 222, 222);
    margin-left: -20px;
    padding-left: 0px;
`;
const Inner2DIV = styled.div`
    display: flex;
    height: 150px;
`;
const Inner3DIV = styled.div`
    font-size: 1rem;
    font-family: "Roboto", "Helvetica", "Arial", sans-serif;
    font-weight: 400;
    line-height: 1.5;
    letter-spacing: 0.00938em;
`;
const IMG = styled.img`
    width:220pt;
    height:100pt;
    object-fit:cover;
`;

const Inner4DIV = styled.div`
    margin-left:50px;
    font-size: 1rem;
    font-family: "Roboto", "Helvetica", "Arial", sans-serif;
    font-weight: 400;
    line-height: 1.5;
    letter-spacing: 0.00938em;
`;
const Inner5DIV = styled.div`
    width: 1000px;
    height: 140px;
    display: flex;
`;
const Inner6DIV = styled.div`
    width: 300pt;
    margin-top: 5px;
`;
const InnerTopText = styled.p`
    margin-bottom: -15px;
    margin-top: 0px;
    height: 24px;
    width: 300pt;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
    font-size: 16px;
    color: grey;
    font-family: "Helvetica Neue";
    text-align: left;
`;

const InnerTopBold = styled.p`
    font-weight:600;
`;

const InnerTitle = styled.p`
    margin-top: 2px;
    margin-bottom: 0px;
    font-size: 14px;
    color: rgb(112, 112, 112);
    font-family: "Helvetica Neue";
    text-align: left;
`;

const Button = styled.button`
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

const SmallTitle = styled.div`
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

const Label = styled.label`
    font-weight: bold;
    cursor: pointer;
    font-size: 8pt;
`;


const RegisterP = styled.p`
    margin-top: 2px;
    margin-bottom: 0px;
    font-size: 12px;
    color: rgb(112, 112, 112);
    font-family: "Helvetica Neue";
    text-align: left;
`;

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
const BUtton1 = styled.button`
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
    letter-spacing: 0.01071em;
`;

const TeacherDiv = styled.div`
        display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
`;

const SPAN = styled.span`
        text-align: center;
    color: rgb(112, 112, 112);
    font-size: 13px;
    font-family: "Helvetica Neue", Regular;
`;

type Props = {
    CookieValue: number;
    closed: boolean;
}


const AdminHomeworkDeadline = ({closed, CookieValue}:Props) => {

    const [page, setPage] = useState<number>(1);
    const [DeadlineData, setDeadlineData] = useState<[]>([]);
    const [Total, setTotal] = useState<number>(1);

    console.log(DeadlineData,"dadadas확인중");

    const Pagination = Math.ceil(Total/10);    
    const arr = Array.from({length:Pagination},(v,i) => i);

    const PageClick = (pageNum:number) => {
        setPage(pageNum);
    }


    async function getData(page:number, CookieValue:number, closed:boolean) {
        await axios.get(`https://1hour.school/api/v1/assignment/list/${closed}/${page}`, {
            headers: {
                Authorization: CookieValue
            }
        }).then(response => {
            console.log(response.data,"dd");
            if(response.data.status === 200) {
                console.log(response.data,"d");
                setDeadlineData(response.data.data.rows);
                setTotal(response.data.data.total);
            } else {
                console.log("데이터를 불러오는데 실패했습니다.")
            }
        });
    }



    useEffect(() => {
        getData(page,CookieValue,closed);
    },[page,closed])

    return(
        <div>
            <div style={{padding:'24px'}}>
                <PTex>
                    {DeadlineData.map((data:any,index:number) => {
                        const suburl = data.url.slice(32,43);
                        return(
                            <InnerDIV key={index}>
                        <Inner2DIV>
                            <Inner3DIV>
                                <IMG src={`https://img.youtube.com/vi/${suburl}/0.jpg`} alt="logo" />
                            </Inner3DIV>
                            <Inner4DIV>
                                <Inner5DIV>
                                    <Inner6DIV>
                                        <InnerTopText>{data.category}</InnerTopText>
                                        <InnerTopBold>{data.title}</InnerTopBold>
                                        <InnerTitle>{data.youtubeTitle.slice(0,32)}...</InnerTitle>
                                        <Button>
                                            <SmallTitle>
                                                <Label>
                                                    단어
                                                </Label>
                                            </SmallTitle>
                                        </Button>
                                        <Button>
                                            <SmallTitle>
                                                <Label>
                                                    문장
                                                </Label>
                                            </SmallTitle>
                                        </Button>
                                        <Button>
                                            <SmallTitle>
                                                <Label>
                                                    더빙
                                                </Label>
                                            </SmallTitle>
                                        </Button>
                                        <Button>
                                            <SmallTitle>
                                                <Label>
                                                    문제
                                                </Label>
                                            </SmallTitle>
                                        </Button>
                                        <RegisterP>
                                            {data.registered}
                                        </RegisterP>
                                    </Inner6DIV>
                                    <TeacherDiv>
                                        <SPAN>{data.organization}<br />{data.registerer}센세</SPAN>
                                    </TeacherDiv>
                                </Inner5DIV>
                            </Inner4DIV>
                        </Inner2DIV>
                    </InnerDIV>
                        );
                    })}
                </PTex>
            </div>
                <PaginationDiv>
                    <Nav>
                    {arr.map((arr,index) => {
                        const pageNum = arr+1;
                        return(
                            <UL key={index}>
                                <LI>
                                    <BUtton1 onClick={() => PageClick(pageNum)}>
                                        {arr+1}
                                    </BUtton1>
                                </LI>
                            </UL>
                        )
                    })}
                    </Nav>
                </PaginationDiv>
        </div>
                
    );
}

export default AdminHomeworkDeadline;