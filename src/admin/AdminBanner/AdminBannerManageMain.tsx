import React,{useEffect, useState} from 'react';
import axios from 'axios';
import styled from 'styled-components';
import Helmet from 'react-helmet';
import settingImg from '../../Images/images/images/setting.png';
import MovingButton from '../../utils/Button/MovingButton';
import { STATE_CHANGE } from '@material-ui/data-grid';


interface SizeUrl {
    size: string
}

const Wrapper = styled.section`
    height: 800px;
`;

const Banner = styled.div`
    height: 30%;
    box-sizing: border-box;
    width: calc(100% - 74pt);
    padding-left: 9pt;
    padding-top: 80pt;
    display: flex;
    flex-direction: column;
`;

const SetImg = styled.img`
    cursor: pointer;
`;

const UpdateBannerWrap = styled.div`
    box-sizing: border-box;
    width: calc(100% - 95pt);
    margin-top: 98.5px;
    margin-left: 35px;
    height: 800px;
    display:flex;
    flex-direction: column;
`;

const BannerUploadWrap = styled.div`
    display:'flex';
    width:100%;
    flex-direction: column;
`;

const UploadImage = styled.div`
    width: 100%;
    height: 128px;
    margin-bottom: 21px;
    background-image: url(${(props:SizeUrl) => props.size});
    background-color: #F4F4F4;
    background-position: center;
    background-repeat: no-repeat;
    background-size: cover;
    box-shadow: 0pt 3pt 6pt #00000029;
`;

const InputUrl = styled.input`
    background: #F4F4F4 0% 0% no-repeat padding-box;
    box-shadow: 0px 3px 6px #00000029;
    border-radius: 5px;
    width: 100%;
    height: 47px;
    border: 0;
    margin-bottom: 62pt;
    padding: 0 18pt;
    font: normal normal 300 13px/16px Helvetica Neue;
`;

const SPAN = styled.span`
    &:hover {
        color: white;
        background-color: black;
    }
`;

type Props = {
    type: boolean;
    CookieValue: Number;
    setState:any;
}


const AdminBannerManageMain:React.FC<Props> = ({type,setState, CookieValue}) => {

    const [page, setPage] = useState<number>(1);
    const [bannerData, setBannerData] = useState<Object[]>([]);
    const [isMenuOpen, setIsMenuOpen] = useState<number>(-1); //setting Menu bar
    const [files, setFiles] = useState([]);
    const [UploadData, setUploadFiles] = useState([]); //body에넣을것
    const [url, setUploadFilesUrl] = useState<string>("");
    const [pk, setUploadFilesPk] = useState<number>(0);
    const [Link, setLink] = useState<string>("");

    //취소버튼
    const clickCancelHandler = () => {
        // console.log("누름");
        setState(false);
    }
    
   //위의 업로드버튼
    const fileChangedHandler = (e:any) => {
        // console.log(e.target.files[0]);
        setFiles(e.target.filse);
        const formData = new FormData();
        formData.append("file",e.target.files[0]);
        
        axios.post(`https://1hour.school/api/v1/file/upload`,formData,{
            headers: {
                Authorization: CookieValue
            }
        })
            .then(response => {
                if(response.data.status === 200) {
                    setUploadFiles(response.data.data);
                    setUploadFilesUrl(response.data.data.url);
                    setUploadFilesPk(response.data.data.pk);
                } else {
                    console.log("Data를 업로드하는데 실패했습니다");
                }
            });
    }

    const valueChangeHandler = (e:any) => {
        setLink(e.target.value);
    }
    //배너 업로드
    const onCreateBannerHandler = () => {
        let body = {
            banner_img: pk,
            ref:Link
        }
        axios.post(`https://1hour.school/api/v1/banner/create`,body, {
            headers: {
                Authorization: CookieValue
            }
        }).then(response => {console.log(response.data)}); 
    }
   
    
    const UpdateBannerComponent = () => {
        return(
            <>
                <Helmet>
                    <title>Admin | 배너관리 | 올리기</title>
                </Helmet>
                <UpdateBannerWrap>
                    <BannerUploadWrap>
                        <h3>배너올리기*</h3>
                        <p>사이즈는 000 x 00 픽셀에 맞춰주세요</p>
                        <UploadImage size={url}></UploadImage>
                        <div style={{position:'relative'}}>
                            <input onChange={fileChangedHandler} type="file" name="add" id="add" style={{display:'none'}} multiple  />
                            <label htmlFor="add">
                                <div style={{position:'absolute', border:'1px solid black',cursor:'pointer', right:'0px'}}>파일선택</div>
                            </label>
                        </div>
                    </BannerUploadWrap>
                    <BannerUploadWrap>
                        <h3>연결링크*</h3>
                        <InputUrl value={Link} onChange={valueChangeHandler} />
                        <div style={{justifyContent:'space-between', display:'flex'}}>
                            <button onClick={clickCancelHandler}>취소하기</button>
                            <button onClick={onCreateBannerHandler}>등록하기</button>
                        </div>
                    </BannerUploadWrap>
                </UpdateBannerWrap>
            </>
        );
    }
    
    

    // 배너 관리 목록
    const request = async function getBanner() {
        await axios.get(`https://1hour.school/api/v1/banner/list/${page}`, {
            headers: {
                Authorization: CookieValue
            }
        }).then(response => {
            if(response.data.status === 200 ) {
                setBannerData([...response.data.data.rows]);
            } else {
                alert("배너데이터 불러오는데 실패했습니다");
            }
        })
    }

    useEffect(() => {
        request();
    },[type])
    

    const settingClickHandler = (index:number) => {
        setIsMenuOpen(index);
        if(index === isMenuOpen) {
            setIsMenuOpen(-1);
        }
    }

    
   const IsBannerPublicHandler = (pk:number) => {
        let body = {
            banner:pk
        }
        axios.post(`https://1hour.school/api/v1/banner/update/shown`,body, {
            headers: {
                Authorization: CookieValue
            }
        }).then(response => {
            if(response.data.status === 200) {
                request();
            } else {
                alert("데이터를 수정하는데 실패했습니다");
            }
        });
   }

   //배너삭제하기
   const BannerDelete = (pk:number) => {
       let body = {
           banner:pk
       }
       axios.post(`https://1hour.school/api/v1/banner/delete`, body, {
            headers: {
                Authorization: CookieValue
            }
       }).then(response => {console.log(response.data)}); //삭제성공 if response.data.status === 200 성공 else if 실패
   }

    //배너 목록 눌렀을때 보여주는 페이지
    const ShowCurrentBannerComponent = () => {
        return(
            <>
                <Helmet>
                    <title>Admin | 배너관리 | 목록</title>
                </Helmet>
                <Banner>
                    {bannerData && bannerData.map((Data:any,index) => {
                        console.log(bannerData,"배너배너");
                        return(
                            <div key={index}>
                                <div style={{display:'flex', justifyContent:'space-between', margin:'20pt auto', alignItems:'center'}}>
                                    <div>
                                        <span>#{index}</span>&nbsp;
                                        <span>{Data.created} 생성</span>
                                    </div>
                                    <div style={{display:'flex',width:'250px',justifyContent:'space-evenly', position:'relative', marginBottom:'10pt', alignItems: 'center'}}>
                                        <span>{Data.hidden === false ? "배너 공개중" : "배너 비공개중" }</span>
                                        <div onClick={() => IsBannerPublicHandler(Data.pk)}><MovingButton hidden={Data.hidden} /></div>
                                            <div>
                                                <SetImg src={settingImg} alt="logo" onClick={() => settingClickHandler(index)} />
                                                {isMenuOpen !== index ? null : <div style={{display:'flex',flexDirection:'column',cursor:'pointer' ,border:'1px solid black',position:'absolute',top:'30px',right:'35px'}}>
                                                    <SPAN>배너수정하기</SPAN>
                                                    <SPAN onClick={() => BannerDelete(Data.pk)}>배너삭제하기</SPAN>
                                                </div>}
                                            </div>
                                    </div>
                                </div>
                                <img src={Data.img} alt="logo" width="100%" height="140px" />
                            </div>
                        );
                    })}
                </Banner>
            </>
        );
    }


    return(
        <Wrapper>
            {type ? UpdateBannerComponent() : ShowCurrentBannerComponent()}
        </Wrapper>
    );
}

export default AdminBannerManageMain;