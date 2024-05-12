import { Document } from 'mongoose'

export interface IToken {
    userUUID: string
    accessToken: string
    refreshToken: string
    createdAt: Date
    updatedAt: Date
}

export interface ITokenDocument extends IToken, Document {}
