import React,{ useState, useEffect} from 'react'
import styled from 'styled-components';
import PublicButton from '../../utils/Button/PublicButton';
import axios from 'axios';
import ToggleButton from '../../utils/ToggleMenuBar/ToggleButton';
import Loading from '../../utils/Loading';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import PaginationModule from '../../utils/Pagination/PaginationModule';
import SmallWord from '../../utils/SmallWord/SmallWord';




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
    height: 175pt;
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


type Props = {
    CookieValue: number;
    category: Number;
    setHeaderClickIsLoading:any;
    HeaderClickIsLoading:any;
}

type PropsBody = {
    contents: number;
    isHidden:boolean;
}

const AdminContentManageMain = ({HeaderClickIsLoading,setHeaderClickIsLoading,category,CookieValue}:Props) => {
    
    const [page, setPage] = useState<number>(1);
    const [Data, setData] = useState<Object[]>([]); //[] => [{},{}] //
    const [Total, setTotal] = useState<number>(1);


    console.log(HeaderClickIsLoading,"HeaderClickIsLoading")

    const newArray = Data.map((data:any) => {
        return data.hidden
    })

   const [ hiddenData, setHiddenData] = useState<boolean[]>([]);
   const [ DummyState, setDummyState] = useState<boolean>(false);



   console.log(hiddenData);

    useEffect(() => {
        setHiddenData(newArray);
    },[Data])
   
   

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
                setHeaderClickIsLoading(false);
            } else {
                console.log("데이터를 불러오는데 실패했습니다.")
            }
        });
    }

    //공개버튼 눌렀을 경우 //반응이 너무나도 느려 // view단에서 바꿔준다
    const PublicButtonChange = (data:any, index:number) => {
        console.log(data);
       
        let hidden = data.hidden;
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
                // getData(page,CookieValue,category);
                hiddenData[index] = !hiddenData[index];
                setDummyState(!DummyState);
                toast.success("데이터 수정성공");
            } else {
                alert("메인화면 노출 업데이트 하는데 실패했습니다");
            }
        });
    }
    
    //영상삭제하기
    const handleClickDelete = (pk:any) => {
        let body = {
            contents:pk
        }
        axios.post(`https://1hour.school/api/v1/contents/remove`,body, {
            headers: {
                Authorization: CookieValue
            }
        }).then(response => {
            if(response.data.status === 200) {
                getData(page,CookieValue,category);
            } else {
                toast.error("데이터를 삭제하는데 실패했습니다");
                alert("데이터를 삭제하는데 실패했습니다");
            }
        });
    }


    useEffect(() => {
        getData(page,CookieValue,category);
    },[page,category])

    return(
        <>
        {Data.length !== 0 && !HeaderClickIsLoading ? <div>
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
                                        <SmallWord Problems={data.problems} />
                                        <RegisterP>
                                            {data.registered}
                                        </RegisterP>
                                    </Inner6DIV>
                                    <CheckDIV>
                                        <CheckInner>
                                            <PublicButton state={hiddenData[index]} PublicButtonChange={() => PublicButtonChange(data,index)} />
                                            <PublicText>{hiddenData[index] ? "비공개" : "공개"}</PublicText>
                                        </CheckInner>
                                    </CheckDIV>
                                    <UpdateDIV>
                                        <ToggleButton handleClickDelete={() => handleClickDelete(data.pk)} />
                                    </UpdateDIV>
                                </Inner5DIV>
                            </Inner4DIV>
                        </Inner2DIV>
                    </InnerDIV>
                        );
                    })}
                </PTex>
            </div>
                <ToastContainer
                    position="top-right"
                    autoClose={10000}
                    hideProgressBar={false}
                    newestOnTop={false}
                    closeOnClick
                    rtl={false}
                    pauseOnFocusLoss
                    draggable
                    pauseOnHover
                />
                <div style={{display:'flex', justifyContent:'center'}}>
                    <PaginationModule currentPage={page} TotalPage={Total} PageClick={PageClick} />
                </div>    
        </div>
                :  <Loading />}
        
</>
    );
}

export default AdminContentManageMain
