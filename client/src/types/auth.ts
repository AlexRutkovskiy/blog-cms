import { IUser } from './user';

export interface IAuth {
    isError: boolean;
    isSuccess: boolean;
    isLoading: boolean;
    message: string;
    user: IUser | null;
}