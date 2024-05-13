import { Document } from 'mongoose'

export interface IUserLogin {
    email: string
    password: string
}

export interface IUserRegister extends IUserLogin {
    firstName: string
    lastName: string
}

export interface IUser extends IUserRegister {
    avatar?: string
    uuid: string
    createdAt?: Date
    updatedAt?: Date
}

export interface IUserDocument extends IUser, Document {}
