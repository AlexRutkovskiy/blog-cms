import { IUserLogin, IUserRegister } from './user.js'

export interface IAuthSignIn extends IUserLogin {}

export interface IAuthSignUp extends IUserRegister {}
