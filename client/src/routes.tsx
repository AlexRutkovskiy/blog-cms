import {Admin, Login, NotFound, Register} from './pages';
import {IRoute} from "./types/route";

export const ROUTES = {
    ADMIN: {
        INDEX: '/admin'
    },
    AUTH: {
        LOGIN: '/auth/login',
        REGISTER: '/auth/register',
        LOGOUT: '/auth/logout'
    }
};

export const API = {

};

export const routes: IRoute[] = [
    {
        path: ROUTES.ADMIN.INDEX,
        element: Admin
    },
    {
        path: ROUTES.AUTH.LOGIN,
        element: Login
    },
    {
        path: ROUTES.AUTH.REGISTER,
        element: Register
    },
    {
        path: '*',
        element: NotFound
    }
];