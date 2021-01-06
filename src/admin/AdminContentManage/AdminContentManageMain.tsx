import React,{ useState, useEffect} from 'react'
import styled from 'styled-components';
import PublicButton from '../../utils/Button/PublicButton';
import setting from '../../Images/images/images/setting.png';
import axios from 'axios';
import ToggleButton from '../../utils/ToggleMenuBar/ToggleButton';

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

const CheckDIV = styled.div`
    margin-right: 40pt;
    margin-top: 25pt;
    width: 10%;
`;
const CheckInner = styled.div`
    display: flex;
    flex-wrap: wrap;
    flex-direction: column;
`;
const PublicText = styled.p`
    margin-top: 5px;
    font-size: 13pt;
    color: grey;
    font-family: "Helvetica Neue";
    text-align: left;
`;

const UpdateDIV = styled.div`
    margin-left: 30px;
    margin-top: 10px;
`;

const Img = styled.img``;

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


type Props = {
    CookieValue: number;
    category: Number;
}

type PropsBody = {
    contents: number;
    isHidden:boolean
}

const AdminContentManageMain = ({category,CookieValue}:Props) => {
    
    const [page, setPage] = useState<number>(1);
    const [Data, setData] = useState<[]>([]);
    const [Total, setTotal] = useState<number>(1);


    const Pagination = Math.ceil(Total/10);    
    const arr = Array.from({length:Pagination},(v,i) => i);

    const PageClick = (pageNum:number) => {
        setPage(pageNum);
    }


    async function getData(page:number, CookieValue:number, category:Number) {
        await axios.get(`https://1hour.school/api/v1/contents/list/${category}/${page}`, {
            headers: {
                Authorization: CookieValue
            }
        }).then(response => {
            if(response.data.status === 200) {
                setData(response.data.data.rows);
                setTotal(response.data.data.total);
            } else {
                console.log("데이터를 불러오는데 실패했습니다.")
            }
        });
    }

    //공개버튼 눌렀을 ㄱ여우
    const PublicButtonChange = (data:any) => {
        console.log(data);
        const hidden = data.hidden;
        let body:PropsBody = {
            contents: data.pk,
            isHidden: !hidden
        }
        axios.post(`https://1hour.school/api/v1/contents/update/shown`,body, {
            headers: {
                Authorization: CookieValue
            }
        }).then(response => {
            if(response.data.status === 200) {
                getData(page,CookieValue,category);
            } else {
                alert("메인화면 노출 업데이트 하는데 실패했습니다");
            }
        });
    }



    useEffect(() => {
        getData(page,CookieValue,category);
    },[page,category])

    return(
        <div>
            <div style={{padding:'24px'}}>
                <PTex>
                    {Data.map((data:any,index:number) => {
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
                                    <CheckDIV>
                                        <CheckInner>
                                            <PublicButton state={data.hidden} PublicButtonChange={() => PublicButtonChange(data)} />
                                            <PublicText>{data.hidden ? "비공개" : "공개"}</PublicText>
                                        </CheckInner>
                                    </CheckDIV>
                                    <UpdateDIV>
                                        <ToggleButton />
                                    </UpdateDIV>
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

export default AdminContentManageMain
