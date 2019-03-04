import React from 'react';
import Admin from './components/Admin/Admin';
import Home from './components/Home';
import InforContainer from './containers/InforContainer';
import DangKyContainer from './containers/DangKyContainer';
import DangNhapContainer from './containers/DangNhapContainer';
import User from './components/Admin/User/User';
import NapTienContainer from './containers/NapTienContainer';
import ThongTinUser from './components/ThongTinUser';

const routes = [
  {
    path:'/',
    exact: true,
    main: () => <Home />
  },
  {
    path:'/admin',
    exact: false,
    main: () => <Admin />
  },
  {
    path:'/dangky',
    exact: false,
    main: () => <DangKyContainer />
  },
  {
    path:'/dangnhap',
    exact: false,
    main: () => <DangNhapContainer />
  },
  {
    path:'/user',
    exact: false,
    main: () => <User />
  },
  {
    path:'/naptien',
    exact: false,
    main: () => <NapTienContainer />
  },
  {
    path:'/thongtinuser',
    exact: false,
    main: () => <ThongTinUser />
  },
  {
    path:'/:name',
    exact: false,
    main: ({ match }) => <InforContainer match={ match }/>
  }
  
]

export default routes;