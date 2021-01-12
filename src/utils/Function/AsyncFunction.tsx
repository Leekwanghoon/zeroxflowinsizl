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