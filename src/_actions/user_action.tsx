import axios from 'axios';
import {
    LOGIN_USER,
    REGISTER_USER,
    SEARCH_DATA,
    CATEGORY_DATA,
    SEARCHBYCATEGORY_DATA,
    DEADLINEINFO_DATA,
    MYINFO_DATA,
    DASHBOARD_DATA
} from './types';
// DASHBOARD_DATA
// AUTH_USER,


//인증
// export const auth = () => {
//     const authority = localStorage.getItem("authority");
//     if(authority == 0) {
        
//     } else if(authority == 1) {

//     } else if( authority == 2) {

//     }
    
//     return{
//         type: AUTH_USER,
//         payload: request
//     }
// }



// 모든 액션 객체들에 대한 타입을 준비

export const login =  (dataToSubmit:any, email:any) => {
    const request = axios.post(`https://1hour.school/user/login`, dataToSubmit)
        .then(response => {
            // console.log(response.data,"loginData");
            if(response.data.status === 200) {
                console.log(response.data,"token");
                document.cookie = `usertoken=${response.data.data.token}`;
                localStorage.setItem('authority',`${response.data.data.authority}`);
                localStorage.setItem('organizationName',`${response.data.data.organizationName}`);
                localStorage.setItem('userEmail',`${email}`);
                return response.data;
            } else {
                alert("로그인하는데 실패했습니다");
            }
        });
    console.log(request,"request");
    return{
        type: LOGIN_USER,
        payload: request
    }
}



export const register = (dataToSubmit:any) => {
    console.log(dataToSubmit,"오냐");
    const request = axios.post(`https://1hour.school/user/register`, dataToSubmit)
        .then(response => {
            console.log(response.data.status);
            if(response.data.status === 200) {
                alert("회원가입성공");
                return response.data;
            } else {
                alert("회원가입실패");
            }
        });
    console.log(request,"request");
    return{
        type: REGISTER_USER,
        payload: request
    }
}


// DataSearch할때 불러옴 (검색)
export const SearchData = (token:any,search:any) => {    
    const request = axios.get(`https://1hour.school/api/v1/dashboard/playlist/search?keyword=${search}`,{
            headers: {
                Authorization: token
            }
        }).then(response => {
            console.log(response.data,"하..");
            if(response.data.status === 200) {
                return response.data;
            } else {
                console.log(response.data,"머가오냐");
            }
        });
    return {
        type: SEARCH_DATA,
        payload: request
    }
}

// DataSearch할때 불러옴 (카테고리로 데이터 불러오기)
export const SearchByCategory = (token:any,selected:any,pk:any) => {    
    const request = axios.get(`https://1hour.school/api/v1/dashboard/playlist/details/${selected}/${pk}`,{
            headers: {
                Authorization: token
            }
        }).then(response => {
            console.log(response.data,"SearchByCategory");
            if(response.data.status === 200) {
                return response.data;
            } else {
                console.log(response.data,"머가오냐");
            }
        });
    return {
        type: SEARCHBYCATEGORY_DATA,
        payload: request
    }
}



//select 박스안에 카테고리 불러오기
export const categoryData = (token:any) => {    
    const request = axios.get(`https://1hour.school/api/v1/category/list`,{
            headers: {
                Authorization: token
            }
        }).then(response => {
            console.log(response.data,"categoryData");
            if(response.data.status === 200) {
                return response.data;
            } else {
                console.log(response.data,"머가오냐");
            }
        });
    return {
        type: CATEGORY_DATA,
        payload: request
    }
}


// 처음  MainPage데이터 불러옴
export const DashBoardData = (token:any) => {
    
    const request = axios.get(`https://1hour.school/api/v1/dashboard/playlist`,{
            headers: {
                Authorization: token
            }
        }).then(response => {
            console.log(response.data,"하..");
            if(response.data.status === 200) {
                return response.data;
            } else {
                console.log(response.data,"머가오냐");
            }
        });
    return {
        type: DASHBOARD_DATA,
        payload: request
    }
}


//CourseManage 페이지

export const deadlineInfo = ( token:any, closed:any, page:any ) => {    
    const request = axios.get(`https://1hour.school/api/v1/assignment/list/${closed}/${page}`,{
            headers: {
                Authorization: token
            }
        }).then(response => {
            if(response.data.status === 200) {
                return response.data;
            } else {
                console.log(response.data,"머가오냐");
            }
        });
    return {
        type: DEADLINEINFO_DATA,
        payload: request
    }
}


//MyPage 마이페이지

export const MyInfo = ( token:any, email:any ) => {    
    const request = axios.get(`https://1hour.school/api/v1/members/load/${email}`,{
            headers: {
                Authorization: token
            }
        }).then(response => {
            if(response.data.status === 200) {
                return response.data;
            } else {
                console.log(response.data,"머가오냐");
            }
        });
    return {
        type: MYINFO_DATA,
        payload: request
    }
}










