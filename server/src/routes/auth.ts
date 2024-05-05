import { Router } from 'express'
import { authController } from '@http/controllers/AuthController.js'

export const authRouter = Router()

authRouter.post('/sign-in', authController.signIn)
authRouter.post('/sign-up', authController.signUp)
authRouter.get('/logout', authController.logout)
