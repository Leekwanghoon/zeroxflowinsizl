import React, { Suspense } from 'react';
import {BrowserRouter as Router, Switch, Route, Redirect} from 'react-router-dom';
import LandingPage from "./Main/LandingPage";
import Login from "./Main/Login/Login";
import {theme} from './styles/theme';
import styled, {ThemeProvider} from "styled-components";
import GlobalStyle from "./styles/global-styles";
import RegisterUserInfo from './Main/Register/RegisterUserInfo/RegisterUserInfoPage';
import RegisterMain from './Main/Register/RegisterMain/RegisterMain';
import DashBoardPage from './teacher/DashBoard/DashBoardPage';
import CoursMoreViewPage from './teacher/DashBoard/CourseMoreViewPage';
import CourseManage from './teacher/DashBoard/CourseManage';
import MyPage from '../src/Main/MyPage/MyPage';
import Auth from '../src/hoc/auth';
import StudentMainPage from './student/StudentMainPage';
import StudentCourseMoreViewPage from './student/StudentCourseMoreViewPage';
import StudentMyPage from './student/StudentMyPage';
import MyReport from './student/MyReport';
import AdminMainPage from './admin/AdminMainPage';
import TestAll from './AdminNaviContentManage/AdminNaviContentContainer';
import AdminMyPage from './Main/MyPage/AdminMyPage';
import AdminCourseMoreViewPage from './admin/AdminCourseMoreViewPage';
import AdminMode from './admin/AdminMode';
import AdminMemberManage from './admin/AdminMemberManage/AdminMemberManage';
import AdminOrganizationManage from './admin/AdminOrganizationManage/AdminOrganizationManage';
import AdminBannerManage from './admin/AdminBanner/AdminBannerManage';
import AdminCategoryManage from './admin/AdminCategory/AdminCategoryManage';
import AdminPlayListManage from './admin/AdminPlayListManage/AdminPlayListManage';
import AdminContentManage from './admin/AdminContentManage/AdminContentManage';
import AdminHomeworkManage from './admin/AdminHomeworkManage/AdminHomeworkManage';
import AdminContentMakeManage from './admin/AdminContentMake/AdminContentMakeManage';
import YoutubeApi from './YoutubeApi/YoutubeApi';
import Loading from './utils/Loading';
import ArrayControl from './utils/ArrayControl';
import TimeControl from './YoutubeApi/TimeControl';

const App: React.FC = () => {
    return (
        <>
            <ThemeProvider theme={theme}>
                <GlobalStyle/>
                <Router>
                <Suspense fallback={(<div>Loading...</div>)}>
                    <Switch>
                        <Route path="/" exact component={LandingPage}/>
                        <Route path="/login" exact component={Auth(Login,4)}/>
                        <Route path="/findPassword" exact component={Login}/>
                        <Route path="/register" exact component={RegisterMain}/>
                        <Route path="/Replace" exact component={RegisterUserInfo}/>

                        <Route path="/dashboard" exact component={Auth(DashBoardPage, 1, false)} />
                        <Route path="/CourseMoreViewPage" exact component={Auth(CoursMoreViewPage,1, false)} />
                        <Route path="/course_manage" exact component={Auth(CourseManage,1, false)} />
                        <Route path="/myPage" exact component={Auth(MyPage,1, false)} />
                        
                        <Route path="/student/MainDashBoard" exact component={Auth(StudentMainPage, 2, false)} />
                        <Route path="/student/StudentCourseMoreViewPage" exact component={Auth(StudentCourseMoreViewPage,2, false)} />
                        <Route path="/student/StudentMyPage" exact component={Auth(StudentMyPage, 2, false)} />
                        <Route path="/student/MyReport" exact component={Auth(MyReport, 2, false)} />

                        <Route path="/admin/AdminMainPage" exact component={Auth(AdminMainPage, 0, true)} />
                        <Route path="/admin/AdminCourseMoreViewPage" exact component={Auth(AdminCourseMoreViewPage, 0, true)} />
                        <Route path="/admin/AdminMyPage" exact component={Auth(AdminMyPage, 0, true)} />
                        <Route path="/admin/AdminMode" exact component={Auth(AdminContentManage, 0, true)} />
                        <Route path="/admin/AdminMode/Member/member_manage" exact component={Auth(AdminMemberManage, 0, true)} />
                        <Route path="/admin/AdminMode/Banner/banner_manage" exact component={Auth(AdminBannerManage, 0, true)} />
                        <Route path="/admin/AdminMode/Organization/organization_manage" exact component={Auth(AdminOrganizationManage, 0, true)} />
                        <Route path="/admin/AdminMode/Category/category_manage" exact component={Auth(AdminCategoryManage, 0, true)} />
                        
                        <Route path="/admin/AdminMode/PlayList/play_list_manage" exact component={Auth(AdminPlayListManage, 0, true)} />
                        
                        <Route path="/admin/AdminMode/Edit/content_manage" exact component={Auth(AdminContentManage, 0, true)} />
                        <Route path="/admin/AdminMode/Edit/homework_manage" exact component={Auth(AdminHomeworkManage, 0, true)} />
                        
                        
                        <Route path="/admin/Edit/mediatool_manage" exact component={Auth(AdminContentMakeManage, 0, true)} />

                        
                        <Route path="/TestAll" exact component={YoutubeApi} />
                        <Route path="/Loading" exact component={Loading} />
                        <Route path="/ArrayControl" exact component={ArrayControl} />
                        <Route path="/TimeControl" exact component={TimeControl} />
                        {/* <Redirect path="*" to="/"/> */}
                    </Switch>
                </Suspense>
                </Router>
            </ThemeProvider>
        </>
    );
}

export default App;
