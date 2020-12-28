import React,{useEffect,useState} from 'react';
import styled from 'styled-components';
import axios from 'axios';
interface BannerInterface {
    cookieValue: Array<string>
}
//딱 필요한것 만넘겨라
interface Props {
    bannerImg: string
}


const BannerWrapper = styled.div`
    height: 6rem;
    margin-top: 0.8rem;
    padding: 1rem;
`;

const BannerImg = styled.div`
    background-image: url(${(props:Props) => props.bannerImg});
    background-repeat: no-repeat;
    background-size: inherit;
    background-position: center center;
    width:100%;
    height:100%;
`;

const Banner: React.FunctionComponent<BannerInterface> = ({cookieValue}) => {
    const cookie = cookieValue[1];

    const [bannerImg, setBannerImg] = useState<string>("");
    useEffect(() => {
        axios.get('https://1hour.school/api/v1/dashboard/banner/keys', {
            headers: {
                Authorization: cookie
            }
        }).then(response => {
            if(response.data.status === 200) {
                console.log(response.data.data.img,"response");
                setBannerImg(response.data.data.img);
            } else {
                return alert("banner error")
            }
        });
    },[])
    return(
        <BannerWrapper>
            <a href="https://www.naver.com/"><BannerImg bannerImg={bannerImg}></BannerImg></a>
        </BannerWrapper>
    );
}

export default Banner;