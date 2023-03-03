import {IUser, IUserDataLogin, IUserDataRegister} from "../../types";

// TODO: add proxy to package.json
const BASE_URL: string = '/auth'

export const registerService = async (data: IUserDataRegister): Promise<IUser> => {
    const response = await fetch(`${BASE_URL}/register`, {
        method: 'PORT',
        body: JSON.stringify(data),
        headers: {
            'Content-Type': 'application/json; charset=utf-8'
        }
    })
    if (!response.ok) {
        const message = response.statusText || 'Register Error';
        throw new Error(message);
    }
    return await response.json();
}

export const loginService = async (data: IUserDataLogin): Promise<IUser> => {
    const response = await fetch(`${BASE_URL}/login`, {
        method: 'PORT',
        body: JSON.stringify(data),
        headers: {
            'Content-Type': 'application/json; charset=utf-8'
        }
    });
    if (!response.ok) {
        const message = response.statusText || 'Login Error';
        throw new Error(message);
    }
    return await response.json();
}