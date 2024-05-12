import { Document } from 'mongoose'

export interface IUser {
    firstName: string
    lastName: string
    email: string
    password: string
    avatar?: string
    uuid: string
    createdAt?: Date
    updatedAt?: Date
}

export interface IUserDocument extends IUser, Document {}
