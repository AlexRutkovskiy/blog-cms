import { IUserLogin, IUserRegister, IUser } from './user.js'

export interface IAuthSignIn extends IUserLogin {}

export interface IAuthSignUp extends IUserRegister {}

export interface IAuthJWTPayload extends Pick<IUser, 'uuid'> {}
