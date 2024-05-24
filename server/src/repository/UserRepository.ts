import { IUserDocument, IUser, IUserRegister } from '@utils/types/user.js'
import { UserModel } from '@models/UserModel.js'

class UserRepositoryClass {
    public async getUserByField<T extends keyof IUser, R>(
        field: T,
        fieldValue: R
    ): Promise<IUserDocument | null> {
        if (!field) {
            throw Error(`Field "${field}" is empty`)
        }

        if (!fieldValue) {
            throw Error(`Value for field "${field}" is empty`)
        }

        const candidate = await UserModel.findOne({
            [field]: fieldValue,
        })
        return candidate ?? null
    }

    public async createUser(data: IUserRegister): Promise<IUserDocument> {
        return await UserModel.create({ ...data })
    }
}

const UserRepository = new UserRepositoryClass()
export { UserRepository }
