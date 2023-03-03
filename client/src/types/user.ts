export interface IUser {
    id: number;
    token: string;
}

export interface IUserDataRegister {
    firsName: string;
    lastName: string;
    email: string;
    password: string;
}

export interface IUserDataLogin {
    email: string;
    password: string;
}