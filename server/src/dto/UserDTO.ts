import type { IUserDocument } from '@utils/types/user.js'

class UserDTO {
    public firstName: string
    public lastName: string
    public email: string
    public avatar: string
    public uuid: string
    public isConfirmEmail: boolean

    constructor(data: IUserDocument) {
        this.firstName = data.firstName
        this.lastName = data.lastName
        this.email = data.email
        this.avatar = data.avatar ?? ''
        this.uuid = data.uuid
        this.isConfirmEmail = data.isConfirmEmail
    }
}

export { UserDTO }
