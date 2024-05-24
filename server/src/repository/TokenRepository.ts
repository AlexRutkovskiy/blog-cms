import { TokenModel } from '@models/TokenModel.js'
import { ITokenDocument, IToken } from '@utils/types/token.js'

class TokenRepositoryClass {
    public async saveToken(id: string, token: string) {
        return await TokenModel.create({
            userUUID: id,
            refreshToken: token,
        })
    }

    public async updateToken(id: string, token: string) {
        return TokenModel.updateOne({ userUUID: id }, { refreshToken: token })
    }

    public async findByKey<T extends keyof IToken, R>(
        field: T,
        fieldValue: R
    ): Promise<ITokenDocument | null> {
        if (!field) {
            throw Error(`Field "${field}" is empty`)
        }

        if (!fieldValue) {
            throw Error(`Value for field "${field}" is empty`)
        }

        const record = await TokenModel.findOne({ [field]: fieldValue })
        return record ?? null
    }

    public async deleteToken(id: string) {
        return await TokenModel.deleteOne({ userUUID: id })
    }
}

const TokenRepository = new TokenRepositoryClass()
export { TokenRepository }
