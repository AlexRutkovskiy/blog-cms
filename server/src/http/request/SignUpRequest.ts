import { body } from 'express-validator'
import { BaseRequest } from './BaseRequest.js'

class SignUpRequest extends BaseRequest {
    public validate() {
        return [
            body('firstName', 'Invalid does not Empty').not().isEmpty(),
            body(
                'firstName',
                'The minimum password length is 3 characters'
            ).isLength({ min: 3 }),
            body('lastName', 'Invalid does not Empty').not().isEmpty(),
            body(
                'lastName',
                'The minimum password length is 3 characters'
            ).isLength({ min: 3 }),
            body('email', 'Invalid does not Empty').not().isEmpty(),
            body('email', 'Invalid email').isEmail(),
            body(
                'password',
                'The minimum password length is 6 characters'
            ).isLength({ min: 6 }),
        ]
    }
}

const signUpRequest = new SignUpRequest()
export { signUpRequest }
