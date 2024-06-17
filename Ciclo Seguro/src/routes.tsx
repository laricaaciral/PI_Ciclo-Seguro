import React from 'react';
import { RouteObject } from 'react-router-dom';
import Home from './pages/Home';
import Login from './pages/Login';
import Register from './pages/Register';
import PasswordRecovery from './pages/PasswordRecovery';


const routes: RouteObject[] = [
    {
        path: '/',
        element: <Home />,
    },
    {
        path: '/login',
        element: <Login/>,
    },
    {
        path: '/register',
        element: <Register/>,
    },
    {
        path: 'password-recovery',
        element: <PasswordRecovery/>,
    }
];

export default routes;
