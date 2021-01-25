import React,{ useEffect } from 'react';
export default function (SpecificComponent:any, option:number, adminRoute:boolean = false) {
    // 0 = 관리자 adminRoute 0 ,1,2
    // 1 = 선생 false
    // 2 = 학생 null
    // 3
    function AuthenticationCheck(props:any) {

        const authority = Number(localStorage.getItem("authority")); //typeof() string 0 1 2    
         
        const cookieValue = document.cookie.split('=');
        
        // useEffect(() => {
        //     //로그인 안된상태
        //     if(cookieValue[0] === "") {
        //         //로그인 안됐는데 어딘가로 이동하려고할대
        //         if( option ) {
        //             alert("로그인을 먼저하세요");
        //             props.history.push("/login");
        //         }
        //     } else if(cookieValue[0] !== "") {
        //         //로그인 해서(토큰있고) 로그인페이지로 가려고할떄
        //         if(option === 4) {
        //             alert("로그인했는데 글로 갈수없어");
        //             if( authority === 0) {
        //                 props.history.push("/admin/AdminMainPage");
        //             } else if( authority === 1) {
        //                 props.history.push("/dashboard");
        //             } else if( authority === 2) {
        //                 props.history.push("/student/MainDashBoard");
        //             }
        //         }
        //     }
        // },[cookieValue[0],authority])


        // if(cookieValue[0] !== "") {
        //     //로그인했고
        //     if(authority === 0 && !adminRoute ) {
        //         console.log("여기는 오니");
        //         if(authority !== option) {
        //             alert("관리자가 이동할 수 없는페이지");
        //             props.history.push("/admin/AdminMainPage");
        //         }
        //     } else if(authority === 1 && adminRoute ) {
        //         if(authority !== option) {
        //             alert("선생님이 이동할 수 없는페이지");
        //             props.history.push("/dashboard");
        //         }
        //     } else if(authority === 2 && !adminRoute ) {
        //         if(authority !== option) {
        //             alert("학생이 이동할 수 없는페이지");
        //             props.history.push("/student/MainDashBoard");
        //         }
        //     }
        // }




       
        return(
            <SpecificComponent {...props} authority={authority} cookieValue={cookieValue} />
        )
    }
    return AuthenticationCheck
}
