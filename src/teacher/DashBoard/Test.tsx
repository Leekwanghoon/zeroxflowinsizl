import Axios from 'axios';
import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { login } from '../../_actions/user_action';
import { RootState } from '../../_reducers';

const Test = (props:any) => {
    

    // const test = "";
    // const categorypk = 1;
    // const categoriesname = "영화속 테드";
    // const keyword= 1;
    // const testClick = (e:any) => {
    //     console.log("누름");
    //     const cookieValue = document.cookie.split('='); //string[]
    //     Axios.get(`https://1hour.school/api/v1/dashboard/playlist/details/${categorypk}/${keyword}`, {
    //         headers: {
    //             Authorization: cookieValue[1]
    //         }  
    //     }).then(response => {console.log(response.data)})
    //     //CourseMoreViewPage?categoriespk=&categoriesname=&keyword=%EC%82%AC%ED%9A%8C%EC%A0%81&type=KEYWORD
    //     // props.history.push(`/TestTest?categoriespk=${categorypk}=&categoriesname=${categoriesname}&keyword=${keyword}&type=KEYWORD`);
    // }
    const GoTestAll = () => {
        props.history.push('/TestAll');
    }
    const GoAdmin = () => {
        props.history.push('/TestAdmin')
    }
    const GoTeacher = () => {
        props.history.push('/TestTeacher')
    }
    return(
    <>
        <button onClick={GoAdmin}>관계자만들어갈 수 있어</button>
        <button onClick={GoTeacher}>선생님만 들어갈 수 있다</button>
        <button onClick={GoTestAll}>모두다들어가</button>    
    </>
    );
}

export default Test;