import React from 'react';
import ContentManageInAdminNaviLeft from '../admin/AdminPlayListManage/ContentManageInAdminNaviLeft';
import NestedList from './AdminNaviContentMake';
import AdminNaviOtherThings from './AdminNaviOtherThings';




const TestAll:React.FC = () => {
  return(
    <>
      <NestedList />
      <ContentManageInAdminNaviLeft />
      <AdminNaviOtherThings />
    </>

  );
}

export default TestAll;