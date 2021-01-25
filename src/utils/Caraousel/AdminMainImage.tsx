import React from 'react';
import styled from 'styled-components';
import SmallWord from '../SmallWord/SmallWord';



const MainBody = styled.div`
    display:flex;
`;

const MainTitle = styled.div`
    height: 50px;
    display:flex;
    justify-content: space-between;
    align-items: center;
`;



type Props = {
    listA:any;
    list1:any;
}

//데이터가 들어올것이고
const AdminMainImage = ({list1,listA}:Props) => {
   
    return(
        <>
            <MainTitle>
                <p>{list1.name}</p>
                <p>더보기</p>
            </MainTitle>
                <MainBody>
                    <div style={{
                        height:"300px",
                        display:"flex",
                        flexDirection:"row",
                    }}>
                        {listA && listA.map((content:any,index:any) => {
                            console.log(listA,"listA");
                            // const str = "https://www.youtube.com/watch?v="; //11개의 아이디,32개의글자
                            const suburl = content.url.slice(32,43);
                            return(
                                <div 
                                    key={index}
                                >
                                    <img width="100%" src={`https://img.youtube.com/vi/${suburl}/0.jpg`} alt="Logo" height="150px" 
                                        style={{
                                            margin:"10px",
                                            padding:"10px"
                                        }}/>
                                    <p>{content?.title}</p>
                                    <p>{content?.youtubeTitle?.slice(0,31)}...</p>
                                    <div>
                                        <SmallWord Problems={content.problems} />
                                    </div>
                                </div>
                            );
                        })}
                    </div>
                </MainBody>
        </>
    );
}

export default AdminMainImage;