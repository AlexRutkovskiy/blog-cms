import { IUser } from './user.js'

export type IAuthSignIn = Pick<IUser, 'email' | 'password'>

export type IAuthSignUp = Pick<
    IUser,
    'email' | 'password' | 'firstName' | 'lastName'
>
