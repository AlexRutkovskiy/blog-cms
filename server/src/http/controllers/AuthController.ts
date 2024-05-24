import { Request, Response, NextFunction } from 'express'

import { errorValidation } from '@utils/helpers/errorValidation.js'
import { ApiException } from '@exceptions/ApiException.js'
import { userService } from '@services/UserService.js'
import { tokenSrvice } from '@services/TokenService.js'

import type {
    IAuthJWTPayload,
    IAuthSignIn,
    IAuthSignUp,
} from '@utils/types/auth.js'
import { config } from '@config/config.js'
import { GeneratedToken } from '@utils/types/token.js'
import { VARIABLES } from '@utils/constans/variables.js'

class AuthController {
    public async signIn(req: Request, res: Response, next: NextFunction) {
        const error = errorValidation(req)
        if (error) {
            return next(ApiException.BadRequest(error))
        }

        try {
            const user = await userService.findUserByCredencial(
                req.body as IAuthSignIn
            )

            if (!user) {
                throw ApiException.NotFound()
            }

            const tokens = await tokenSrvice.updateTokens(user.uuid, {
                uuid: user.uuid,
            } as IAuthJWTPayload)

            AuthController.addTokensToCookies(res, tokens)

            return res.json({ ...user })
        } catch (e) {
            return next(e)
        }
    }

    public async signUp(req: Request, res: Response, next: NextFunction) {
        const error = errorValidation(req)
        if (error) {
            return next(ApiException.BadRequest(error))
        }

        try {
            const user = await userService.createUser(req.body as IAuthSignUp)
            const tokens = await tokenSrvice.createTokens(user.uuid, {
                uuid: user.uuid,
            } as IAuthJWTPayload)

            AuthController.addTokensToCookies(res, tokens)

            return res.json({ ...user })
        } catch (e) {
            return next(e)
        }
    }

    public async logout(req: Request, res: Response, next: NextFunction) {
        try {
            const jwtRefreshToken = req.cookies[VARIABLES.COOKIE.REFRESH_TOKEN]
            const payload = await tokenSrvice.verifyToken(
                jwtRefreshToken,
                config.AUTH.JWT_REFRESH_SECRET
            )
            await tokenSrvice.deleteToken(payload.uuid)

            res.clearCookie(VARIABLES.COOKIE.REFRESH_TOKEN)
            res.clearCookie(VARIABLES.COOKIE.ACCESS_TOKEN)

            return res.json({ ok: true })
        } catch (e) {
            return next(e)
        }
    }

    private static addTokensToCookies(res: Response, tokens: GeneratedToken) {
        res.cookie(VARIABLES.COOKIE.REFRESH_TOKEN, tokens.refreshToken, {
            httpOnly: true,
            maxAge: 1000 * 60 * 15,
            path: config.AUTH.JWT_URL_REFRESH_TOKEN,
        })
        res.cookie(VARIABLES.COOKIE.ACCESS_TOKEN, tokens.accessToken, {
            httpOnly: true,
            maxAge: 1000 * 60 * 15,
        })
    }
}

const authController = new AuthController()
export { authController }
