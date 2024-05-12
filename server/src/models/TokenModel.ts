import { Schema, model } from 'mongoose'
import { IToken } from '@utils/types/token.js'

const tokenSchema = new Schema<IToken>(
    {
        userUUID: { type: String, required: true, unique: true },
        accessToken: { type: String, required: true },
        refreshToken: { type: String, required: true },
    },
    {
        timestamps: true,
    }
)

export const TokenModel = model('Token', tokenSchema)
