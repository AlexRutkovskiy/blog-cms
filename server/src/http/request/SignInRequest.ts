import { body } from 'express-validator'
import { BaseRequest } from './BaseRequest.js'

class SignInRequest extends BaseRequest {
    public validate() {
        return [
            body('email', 'Invalid does not Empty').not().isEmpty(),
            body('email', 'Invalid email').isEmail(),
            body(
                'password',
                'The minimum password length is 6 characters'
            ).isLength({ min: 6 }),
        ]
    }
}

const signInRequest = new SignInRequest()
export { signInRequest }
