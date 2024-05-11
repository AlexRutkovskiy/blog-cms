export interface IAuthSignIn {
    email: string
    password: string
}

export interface IAuthSignUp extends IAuthSignIn {
    firstName: string
    lastName: string
}
