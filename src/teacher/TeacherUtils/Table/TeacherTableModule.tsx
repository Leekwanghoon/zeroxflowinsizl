import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import sort from '../../../Images/images/images/Icon material-sort.png';
import PaginationModule from '../../../utils/Pagination/PaginationModule';
import PercentBar from '../../utils/PercentBar';
import {useHistory} from 'react-router-dom';

const Table = styled.table`
    width: 100%;
    border-collapse: collapse;
    color: rgb(44, 44, 44);
    font: 13px / 15px "Helvetica Neue";
`;

const Thead = styled.thead `
    font: bold 14px / 17px "Helvetica Neue";
    box-sizing: border-box;
    outline: none;
    margin-bottom:20pt;
`;

const Tbody = styled.tbody`
    width: 100%;
    border-collapse: collapse;
    color: rgb(44, 44, 44);
    font: 13px / 15px "Helvetica Neue";
`;
type TDType = {
    IsEven?: boolean;
    index: number;
}

const TD = styled.td`
    ${(props:TDType) => props.index%2 !== 0 ? 
        `background: #F2F2F2;` 
        :
        `background: #FFFFFF;`
    }
    /* border:0.5pt solid #F2F2F2; */
    height: 50pt;
    font-weight:600;
    font-size: 14px;
`;





type Props = {
    data:object[];
    setPage:any;
    SortChange:any;
}

type TypeMember = {
    email:String
    name: string
    id: string
    created: string
    achievement: number
    report: number
}

const TeacherTableModule = ({data,setPage,SortChange}:Props) => {

    const [currentPage, setCurrentPage] = useState<number>(1);


    const history = useHistory();
    const SliceData = data.slice(0,10); // 0~9
    const [Data,setData] = useState<any>(SliceData);

    console.log(Data,"dsak");

    useEffect(() => {
        setData(data);
    },[data])

    const length = data.length;

    const PageClick = (i:number) => {
        console.log(i,"누름")
        setCurrentPage(i);
        const newData = data.slice(10*(i-1),10*i);
        setData(newData);
        setPage(i);
    }


    const goReport = (report:number) => {
        console.log(report);
        history.push(`/report?reportPK=${report}`);
    }
    const goCallendar = (report:Number,email:String) => {
        console.log(report,"report", email,"email");
        history.push(`/calendar?reportPK=${report}&email=${email}`);
    }


    const getCountAchievement = (percent:number) => {
        let newPercent = Math.round(percent*100);
        let color = "red";
        if(newPercent <= 100 && newPercent >= 90) color = "rgb(0, 116, 201)";
        if(newPercent < 90 && newPercent >= 60) color = "rgb(83, 196, 0)";
        return (
            <>
                <PercentBar color={color} newPercent={newPercent} />
            </>
        );;
    }
    return(
        <div>
        <Table>
            <Thead>
                <tr>
                    <td></td>
                    <td><img onClick={() => SortChange(0)} width="20px" src={sort} alt="logo" />이름</td>
                    <td><img onClick={() => SortChange(1)} width="20px" src={sort} alt="logo" />학번</td>
                    <td>데일리 리포트</td>
                    <td><img onClick={() => SortChange(2)} width="20px" src={sort} alt="logo" />최근 성취도</td>
                    <td>전체 리포트</td>
                </tr>
            </Thead>
            <Tbody>
                {Data.map((member:TypeMember,index:any) => {
                console.log(member)
                return(
                        <tr key={index}>
                            <TD index={index}>#{10*(currentPage-1) + (index + 1)}</TD>
                            <TD index={index}>{member.name}</TD>
                            <TD index={index}>{member.id}</TD>
                            <TD onClick={() => goReport(member.report)} index={index}>{member.created}</TD>
                            <TD index={index}>{getCountAchievement(member.achievement)}</TD>
                            <TD index={index} onClick={() => goCallendar(member.report,member.email)}>전체 학습내역</TD>
                        </tr>
                );
            })
            }
            </Tbody>
        </Table>
        <PaginationModule TotalPage={length} currentPage={currentPage} PageClick={PageClick} />
    </div>
    );
}

export default TeacherTableModule;