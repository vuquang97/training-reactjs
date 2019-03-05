import React from 'react';
import Admin from './components/Admin/Admin';
import Home from './components/Home';
import InforContainer from './containers/InforContainer';


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
    path:'/:name',
    exact: false,
    main: ({ match }) => <InforContainer match={ match }/>
  }
  
]

export default routes;