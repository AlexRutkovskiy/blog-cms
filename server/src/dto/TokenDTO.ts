import { ITokenDocument } from '@utils/types/token.js'

class TokenDTO {
    public userUUID: string
    public accessToken: string
    public refreshToken: string

    constructor(data: ITokenDocument) {
        this.userUUID = data.userUUID
        this.accessToken = data.accessToken
        this.refreshToken = data.refreshToken
    }
}

export { TokenDTO }
