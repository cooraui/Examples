import React from 'react';
import HomePage from './pages/HomePage/HomePage';
import ActionPage from './pages/ActionPage/ActionPage';
import ListPage from './pages/ListPage/ListPage';
import PageNotFound from './pages/PageNotFound/PageNotFound';

const routes = [
    {
        path : "/",
        exact : true,
        page : () => <HomePage/>
    },
    {
        path : "/employee/add",
        exact : false,
        page : ({history}) => <ActionPage history={history}/>
    },
    {
        path : "/employee/:id/edit",
        exact : false,
        page : ({match, history}) => <ActionPage match={match} history={history}/>
    },
    {
        path : "/employee-list",
        exact : false,
        page : () => <ListPage />
    },
    {
        path : "",
        exact : false,
        page : () => <PageNotFound/> 
    }
];

export default routes;