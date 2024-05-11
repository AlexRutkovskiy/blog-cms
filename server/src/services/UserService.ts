import { IAuthSignIn } from '@utils/types/auth.js'

class UserService {
    public createUser(data: IAuthSignIn) {
        console.log(data)
    }

    public findUserByCredencial() {}
}
const userService = new UserService()
export { userService }
