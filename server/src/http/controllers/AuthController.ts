import { Request, Response, NextFunction } from 'express'

class AuthController {
    public signIn(req: Request, res: Response) {}

    public signUp(req: Request, res: Response) {}

    public logout(req: Request, res: Response) {}
}

const authController = new AuthController()
export { authController }
