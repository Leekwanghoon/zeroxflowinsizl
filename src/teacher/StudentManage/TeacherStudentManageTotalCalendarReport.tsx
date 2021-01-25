import React, { useState, useEffect } from 'react';
import queryString from 'query-string';
import { getCalendarData, getReport, getReportMonth } from '../../utils/Function/AsyncFunction';
import Calendar from '../../utils/Calendar/Calendar';
const TeacherStudentManageTotalCalendarReport = (props:any) => {



    const [Created, setCreated] = useState<String>("");



    console.log(Created);
    const cookie = props.cookieValue[1];
    let query:any = queryString.parse(props.location.search);//any인데 parseInt(안에 string넣어야함 어떻게하지?)
    console.log(query)
    // never절대 올 수 없는 형식
    let pk = parseInt(query.reportPK);
    let email = query.email;
    
    let body:any = {
        target:Created,
        student:email
    }

    console.log(body);

    useEffect(() => {
        getReport(cookie, pk).then(function(data) {
            console.log(data.data)
            setCreated(data.data.created);
        })
    },[])

    //
    

    return(
        <>
            <Calendar email={email} cookie={cookie} />  
        </>
    );
}
export default TeacherStudentManageTotalCalendarReport;