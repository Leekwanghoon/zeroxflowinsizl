import React,{ Suspense } from 'react'
import AdminHomeworkDeadline from './AdminHomeworkManageMainComponent/AdminHomeworkDeadline';



type Props = {
    CookieValue: number;
    state: boolean;
}



const AdminHomeworkManageMain = ({state,CookieValue}:Props) => {
    
    
    return(
        <>
            <AdminHomeworkDeadline closed={state} CookieValue={CookieValue} /> 
        </>
    );
}

export default AdminHomeworkManageMain
