import jwt from 'jsonwebtoken'
import type { GeneratedToken } from '@utils/types/token.js'
import { config } from '@config/config.js'
import { TokenRepository } from '@repository/TokenRepository.js'
import { IAuthJWTPayload } from '@utils/types/auth.js'

class TokenService {
    public async generateTokens(
        payload: string | Buffer | object
    ): Promise<GeneratedToken> {
        const refreshToken = await jwt.sign(
            payload,
            config.AUTH.JWT_REFRESH_SECRET,
            { expiresIn: '30d' }
        )
        const accessToken = await jwt.sign(
            payload,
            config.AUTH.JWT_ACCESS_SECRET,
            { expiresIn: '15m' }
        )

        return { refreshToken, accessToken }
    }

    public async createTokens(
        userId: string,
        payload: string | Buffer | object
    ): Promise<GeneratedToken> {
        const tokens = await this.generateTokens(payload)
        await TokenRepository.saveToken(userId, tokens.refreshToken)

        return tokens
    }

    public async verifyToken(
        hashData: string,
        key: string
    ): Promise<IAuthJWTPayload> {
        return (await jwt.verify(hashData, key)) as IAuthJWTPayload
    }

    public async updateTokens(
        userId: string,
        payload: string | Buffer | object
    ): Promise<GeneratedToken> {
        const tokens = await this.generateTokens(payload)
        const record = await TokenRepository.findByKey('userUUID', userId)

        if (record) {
            await TokenRepository.updateToken(userId, tokens.refreshToken)
        } else {
            await TokenRepository.saveToken(userId, tokens.refreshToken)
        }

        return tokens
    }

    public async deleteToken(id: string) {
        return TokenRepository.deleteToken(id)
    }
}

const tokenSrvice = new TokenService()
export { tokenSrvice }
