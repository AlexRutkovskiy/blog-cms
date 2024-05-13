import type { IUserLogin, IUserRegister } from '@utils/types/user.js'
import { UserRepository } from '@repository/UserRepository.js'
import { ApiException } from '@exceptions/ApiException.js'
import { UserDTO } from '@dto/UserDTO.js'

class UserService {
    public async createUser(data: IUserRegister): Promise<UserDTO> {
        try {
            const candidate = await this.findUserByCredencial(data)
            if (candidate) {
                throw Error('Email already exists')
            }

            const userDoc = await UserRepository.createUser(data)
            return new UserDTO(userDoc)
        } catch (e) {
            const msg = e instanceof Error ? e?.message : ''
            if (msg) {
                throw ApiException.BadRequest({ message: msg })
            } else {
                throw ApiException.ServerError()
            }
        }
    }

    public async findUserByCredencial(
        data: IUserLogin
    ): Promise<UserDTO | null> {
        const { email } = data

        try {
            const userDoc = await UserRepository.getUserByField('email', email)
            return userDoc ? new UserDTO(userDoc) : null
        } catch (e) {
            const msg = e instanceof Error ? e?.message : ''
            if (msg) {
                throw ApiException.BadRequest({ message: msg })
            } else {
                throw ApiException.ServerError()
            }
        }
    }
}
const userService = new UserService()
export { userService }
