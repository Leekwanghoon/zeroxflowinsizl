import axios from 'axios';

// 목록눌렀을때 데이터 Header에서 불러와서 가져가
export async function getPlayList(page:number,token:any) {
     return await axios.get(`https://1hour.school/api/v1/playlist/load/${page}`, {
        headers: {
            Authorization: token
        }
    }).then(response => {
        return response.data;
    })
}


// 헤더 플레이리시트1,23,4,클릭시 데이터 불러와
export async function getClickPlayListData(pk:number, token:any) {
    return await axios.get(`https://1hour.school/api/v1/playlist/details/${pk}`, {
        headers: {
            Authorization: token
        }
    }).then(response => response.data);
}

//카테고리 리스트
export async function getCategoryList(token:any) {
    return await axios.get(`https://1hour.school/api/v1/playlist/search/-1/1?keyword=`, {
        headers: {
            Authorization: token
        }
    }).then(response => response.data);
}


// 카테고리 모듈
export async function getCategoryModuleList(token:Number) {
    return await axios.get(`https://1hour.school/api/v1/category/list`, {
        headers: {
            Authorization: token
        }
    }).then(response => response.data);
}

//영상마법사 등록하기
export async function getRegisterMediaTool(token:Number, body:any) {
    return await axios.post(`https://1hour.school/api/v1/contents/create/frame`,body, {
        headers: {
            Authorization: token
        }
    }).then(response => response.data);
}

//문장만들기
export async function getRegisterSentence(token:Number, body:any) {
    return await axios.post(`https://1hour.school/api/v1/contents/create/sentence`,body, {
        headers: {
            Authorization: token
        }
    }).then(response => response.data);
}


//번역
export async function getTranslate(token:Number, body:any) {
    return await axios.post(`https://1hour.school/api/v1/translate/single`,body, {
        headers: {
            Authorization: token
        }
    }).then(response => response.data);
}

//싱크맞추기

export async function getSync(token:Number,body:any) {
    return await axios.post(`https://1hour.school/api/v1/contents/create/sync`,body, {
        headers: {
            Authorization: token
        }
    }).then(response => response.data);
}

//단어만들기
export async function getMakeWord(token:Number,body:any) {
    return await axios.post(`https://1hour.school/api/v1/contents/create/word`,body, {
        headers: {
            Authorization: token
        }
    }).then(response => response.data);
}

//문제 만들기
export async function getMakeProblem(token:Number,body:any) {
    return await axios.post(`https://1hour.school/api/v1/contents/create/question`,body, {
        headers: {
            Authorization: token
        }
    }).then(response => response.data);
}

//teacher
export async function getStudentList(token: string, tab:number, page:number,Sort:number,KeyWord:string) {
    console.log(`https://1hour.school/api/v1/manage/student/${tab}/${page}?keyword=${KeyWord}&grade=&classroom=&sort=${Sort}`);
    return await axios.get(`https://1hour.school/api/v1/manage/student/${tab}/${page}?keyword=${KeyWord}&grade=&classroom=&sort=${Sort}`, {
        headers: {
            Authorization: token
        }
    }).then(response => response.data);
}

//학생리포트

export async function getReport(token: string, pk: number) {
    return await axios.get(`https://1hour.school/api/v1/report/load/${pk}`, {
        headers: {
            Authorization: token
        }
    }).then(response => response.data);
}

//학생 월별 관리 리포트으로 보기
export async function getReportMonth(body:any,token:any) {
    return await axios.post(`https://1hour.school/api/v1/report/monthly`,body, {
        headers: {
            Authorization: token
        }
    }).then(response => response.data);
}

//학생 달력데이터보기

export async function getCalendarData(from:String,to:String,username:any,token:any) {
    console.log(`https://1hour.school/api/v1/manage/student/calendar?from=${from}&to=${to}&username=${username}`)
    return await axios.get(`https://1hour.school/api/v1/manage/student/calendar?from=${from}&to=${to}&username=${username}`, {
        headers: {
            Authorization: token
        }
    }).then(response => response.data);
}
