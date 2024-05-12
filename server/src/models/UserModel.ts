import { Schema, model } from 'mongoose'
import { uuid as v4 } from 'uuidv4'
import { IUser } from '@utils/types/user.js'

const userSchema = new Schema<IUser>(
    {
        firstName: { type: String, required: true },
        lastName: { type: String, required: true },
        email: { type: String, required: true, unique: true },
        password: { type: String, required: true },
        avatar: { type: String, default: '' },
        uuid: { type: String, default: () => v4(), unique: true },
    },
    {
        timestamps: true,
    }
)

export const UserModel = model('User', userSchema)
