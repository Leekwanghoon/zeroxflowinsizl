import React,{ useState,useEffect } from 'react';
import styled from 'styled-components';
import Button1 from '../Button1';
import Calendar1 from 'react-calendar';
import 'react-calendar/dist/Calendar.css';
import './Calendar.scss';
import { getCalendarData } from '../Function/AsyncFunction';

const CalendarWrap = styled.div`
    height: 88%;
    width: 100%;
`;

const ButtonWrap = styled.div`
    height: 10%;
    width: 100%;
    margin: 10px auto;
    display: flex;
`;

const Calendar = ({email,cookie}) => {


    //받아온데이타
    const [Nodes, setCalendarDataNodes] = useState([]);
    console.log(Nodes,"Nodes");

    //초기 Month를 현재날짜로 잡아야함
    const [Month, setMonth] = useState(() => {
        let getDate = new Date();
        let newTime = getDate.getMonth();
        return newTime + 1;
    })


    // const [Month,setMonth] = useState(1);


    const onClick = (e) => {
        console.log(e.target.value);
    }
    

    //월 입력하면 말일 구하기 (인자 년, 월 , 일(0은말일))
    const lastDay = new Date(2020,Month,0);
    const strNewDay = String(lastDay);
    const day = strNewDay.substring(8,10)
    console.log(day); //31

    let makeFrom = "2020-" + String(Month) + "-" + "01";
    let makeTo = "2020-" + String(Month) + "-" + day;

    if(Month < 10) {
        makeTo = "2020-0" + String(Month) + "-" + day;
        makeFrom = "2020-0" + String(Month) + "-" + "01";
    }
    

    console.log(makeFrom,"makeFrom",makeTo,"makeTo");

    //검색어디부터할지

    useEffect(() => {
        getCalendarData(makeFrom,makeTo,email,cookie).then(function(data) {
            console.log(data);
            setCalendarDataNodes(data.data.nodes);
        })
    },[])

    const monthSelect = [1,2,3,4,5,6,7,8,9,10,11,12];

    const onChangeMonth = (e) => {
        console.log(e.target.value);
        setMonth(e.target.value);
    }
    //Mon Jan 25 2021 17:12:20 GMT+0900 (Korean Standard Time)
    const [value, onChange] = useState(new Date()); 
    console.log(value);
    return(
        <CalendarWrap>
            <ButtonWrap>
                <select>
                    <option>
                        2020년
                    </option>
                </select>
                <select onChange={onChangeMonth}>
                    {monthSelect.map((month,index) => {
                        return(
                            <option value={month} key={index}>
                                {month}월
                            </option>
                        );
                    })}
                </select>
                <div style={{marginLeft:"auto"}}>
                    <Button1 size="110pt" heightSize="100%" text="월간 리포트" onClick={onClick} />
                </div>
            </ButtonWrap>
             <Calendar1
                className="react-calendar"
                onChange={onChange}
                value={value}
                calendarType='Arabic'
                prevLabel="<"
                next2Label=""
                prev2Label=""
                // showNeighboringMonth="true"
                tileContent={<div>색깔버튼</div>}
             />
        </CalendarWrap>
    );
}

export default Calendar;