import { Router } from 'express'
import { authController } from '@http/controllers/AuthController.js'
import { signInRequest } from '@http/request/SignInRequest.js'
import { signUpRequest } from '@http/request/SignUpRequest.js'

export const authRouter = Router()

authRouter.post('/sign-in', signInRequest.validate(), authController.signIn)
authRouter.post('/sign-up', signUpRequest.validate(), authController.signUp)
authRouter.get('/logout', authController.logout)
