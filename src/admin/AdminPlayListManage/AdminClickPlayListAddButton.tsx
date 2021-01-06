import React,{useState,useEffect} from 'react';
import styled from 'styled-components';
import CheckboxesGroup from '../../utils/CheckBox/CheckBoxCustom';
import { getCategoryList } from '../../utils/Function/AsyncFunction';



const Container = styled.div`
`;

const TopMenu = styled.div`
    display: flex;
    -webkit-box-align: center;
    align-items: center;
    -webkit-box-pack: justify;
    justify-content: space-between;
    margin-bottom: 25pt;
`;

const MainBody = styled.div`
    display: flex;
    width: calc(100% - 36pt);
`;

const HalfMain = styled.div`
    width: 50%;
    margin-right:100px;
`;

const Table = styled.table`
    width: 344pt;
    height: 60pt;
    border-bottom: 0.5px solid rgb(112, 112, 112);
`;


const FirstDiv = styled.span`
    display: flex;
    flex-direction:column;
    width: 209pt;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
    font-size: 16pt;
`;

const SecondDiv = styled.div`
    display: flex;
    flex-direction:column;
    width: 209pt;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
`;

const ThirdDiv = styled.div`
    display: flex;
    flex-direction:column;
    width: 209pt;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
`;

type Props = {
    CookieValue:Number;
    ContentData:any;
}


const AdminClickplayListAddButton = ({ContentData, CookieValue}:Props) => {

    const [ListItems, setListItems] = useState<[]>([]);
    console.log(ListItems,"리스트");
    console.log(ContentData,"ContentData");
    useEffect(() => {
        getCategoryList(CookieValue)
        .then(function(data) {
            setListItems(data.data);
        }).catch(function(err) {
            alert("데이터를 불러오는데 실패했습니다");
            console.log(err);
        })
    },[])

    const ArrayLength = ListItems.length;


    return(
        <Container>
            <TopMenu>여기카테고리뭐시기들어감</TopMenu>
            <MainBody>
                <HalfMain>
                        {ListItems.slice(0,10).map((items:any,index:number) => {
                            const suburl = items.url.slice(32,43);
                            return(
                            <Table key={index}>
                                <tbody>
                                    <tr>
                                        <td style={{width:'25pt'}}>
                                            <CheckboxesGroup ListItems={ListItems} ContentData={ContentData} />
                                        </td>
                                        <td style={{width:'109.36pt',height:'50pt'}}>
                                            <img src={`https://img.youtube.com/vi/${suburl}/0.jpg`} alt="logo" width="89.36pt" height="50pt" />
                                        </td>
                                        <td style={{textAlign:'left'}}>
                                            <FirstDiv>
                                                {items.title}
                                            </FirstDiv>
                                            <SecondDiv>
                                                {items.youtubeTitle.slice(0,31)}...
                                            </SecondDiv>
                                            <ThirdDiv>
                                                {items.registered}
                                            </ThirdDiv>
                                        </td>
                                    </tr>
                                </tbody>
                            </Table>
                            );
                        })}
                </HalfMain>
                <HalfMain>
                {ListItems.slice(10,20).map((items:any,index:number) => {
                    const suburl = items.url.slice(32,43);
                    return(
                    <Table key={index}>
                        <tbody>
                            <tr>
                                <td style={{width:'25pt'}}>
                                    <CheckboxesGroup ListItems={ListItems} ContentData={ContentData} />
                                </td>
                                <td style={{width:'109.36pt',height:'50pt'}}>
                                    <img src={`https://img.youtube.com/vi/${suburl}/0.jpg`} alt="logo" width="89.36pt" height="50pt" />
                                </td>
                                <td style={{textAlign:'left'}}>
                                    <FirstDiv>
                                        {items.title}
                                    </FirstDiv>
                                    <SecondDiv>
                                        {items.youtubeTitle.slice(0,31)}...
                                    </SecondDiv>
                                    <ThirdDiv>
                                        {items.registered}
                                    </ThirdDiv>
                                </td>
                            </tr>
                        </tbody>
                    </Table>
                    );
                    })}
                </HalfMain>
            </MainBody>
        </Container>
    );
}

export default AdminClickplayListAddButton;