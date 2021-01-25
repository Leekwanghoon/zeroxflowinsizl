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
import AdminMyPage from './Main/MyPage/AdminMyPage';
import AdminCourseMoreViewPage from './admin/AdminCourseMoreViewPage';
import AdminMemberManage from './admin/AdminMemberManage/AdminMemberManage';
import AdminOrganizationManage from './admin/AdminOrganizationManage/AdminOrganizationManage';
import AdminBannerManage from './admin/AdminBanner/AdminBannerManage';
import AdminCategoryManage from './admin/AdminCategory/AdminCategoryManage';
import AdminPlayListManage from './admin/AdminPlayListManage/AdminPlayListManage';
import AdminContentManage from './admin/AdminContentManage/AdminContentManage';
import AdminHomeworkManage from './admin/AdminHomeworkManage/AdminHomeworkManage';
import AdminContentMakeManage from './admin/AdminContentMake/AdminContentMakeManage';
import PaginationIndex from './utils/Pagination/PaginationIndex';
import TeacherStudentManage from './teacher/StudentManage/TeacherStudentManage';
import TeacherStudentManageReport from './teacher/StudentManage/TeacherStudentManageReport';

import NewChart from './utils/Chart/NewChart';
import Chart from './utils/Chart/Chart';
import Calendar from './utils/Calendar/Calendar';

import PrototypeTest from './utils/StudyZone/PrototypeTest';
import TeacherStudentManageTotalCalendarReport from './teacher/StudentManage/TeacherStudentManageTotalCalendarReport';

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
                        


                        <Route path="/teacher/StudentManage" exact component={Auth(TeacherStudentManage, 1, false)} />
                        <Route path="/report" exact component={Auth(TeacherStudentManageReport, 1, false)} />
                        <Route path="/calendar" exact component={Auth(TeacherStudentManageTotalCalendarReport, 1, false)} />
                        
                        
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
                        
                        <Route path="/page" exact component={PaginationIndex} />
                        
                        
                        <Route path="/chart" exact component={Chart} />



                        <Route path="/JavascriptTest" exact component={PrototypeTest} />
                        <Route path="/calendar" exact component={Calendar} />

                        



                        
                        {/* <Redirect path="*" to="/"/> */}
                    </Switch>
                </Suspense>
                </Router>
            </ThemeProvider>
        </>
    );
}

export default App;
