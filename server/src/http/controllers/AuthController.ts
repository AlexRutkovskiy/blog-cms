import { Request, Response, NextFunction } from 'express'

import { errorValidation } from '@utils/helpers/errorValidation.js'
import { ApiException } from '@exceptions/ApiException.js'
import { userService } from '@services/UserService.js'
import { IAuthSignIn, IAuthSignUp } from '@utils/types/auth.js'

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
            return res.json({ ...user })
        } catch (e) {
            return next(e)
        }
    }

    public logout(req: Request, res: Response) {}
}

const authController = new AuthController()
export { authController }
