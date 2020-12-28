import React,{ useState } from 'react';
import styled from 'styled-components';
import Button1 from '../Button1';
import Calendar1 from 'react-calendar';
import 'react-calendar/dist/Calendar.css';
import './Calendar.scss';

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

const Calendar = () => {

    const onClick = () => {
        console.log("눌르기")
    }

    const [value, onChange] = useState(new Date());    
    console.log(value);
    return(
        <CalendarWrap>
            <ButtonWrap>
                <select>
                    <option>
                        1
                    </option>
                </select>
                <select>
                    <option>
                        1
                    </option>
                </select>
                <div style={{marginLeft:"auto"}}>
                    <Button1 size="110pt" heightSize="100%" text="월간 리포트" onClick={onClick} />
                </div>
            </ButtonWrap>
             <Calendar1
                className="react-calendar"
                onChange={onChange}
                value={value}
                calendarType='Hebrew'
                prevLabel="<"
             />
        </CalendarWrap>
    );
}

export default Calendar;