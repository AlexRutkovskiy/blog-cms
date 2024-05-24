import { Document } from 'mongoose'

export interface IToken {
    userUUID: string
    refreshToken: string
    createdAt: Date
    updatedAt: Date
}

export interface ITokenDocument extends IToken, Document {}

export interface GeneratedToken {
    refreshToken: string
    accessToken: string
}
