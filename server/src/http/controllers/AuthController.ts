import { Request, Response, NextFunction } from 'express'

import { errorValidation } from '@utils/helpers/errorValidation.js'
import { ApiException } from '@exceptions/ApiException.js'
import { userService } from '@services/UserService.js'
import { IAuthSignIn } from '@utils/types/auth.js'

class AuthController {
    public signIn(req: Request, res: Response, next: NextFunction) {
        const error = errorValidation(req)
        if (error) {
            return next(ApiException.BadRequest(error))
        }

        try {
            userService.createUser(req.body as IAuthSignIn)
        } catch (e) {
            return next(e)
        }

        return res.json({ ok: true })
    }

    public signUp(req: Request, res: Response, next: NextFunction) {
        const error = errorValidation(req)
        if (error) {
            return next(ApiException.BadRequest(error))
        }

        try {
        } catch (e) {
            return next(e)
        }

        return res.json({ ok: true })
    }

    public logout(req: Request, res: Response) {}
}

const authController = new AuthController()
export { authController }
