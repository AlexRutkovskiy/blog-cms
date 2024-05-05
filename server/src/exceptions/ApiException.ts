import { HTTP_STATUS_CODE } from '@utils/http.js'

class ApiException extends Error {
    public message: string
    public code: number

    constructor(message: string, code: number) {
        super(message)

        this.message = message
        this.code = code
    }

    public static BadRequest(msg: string = '') {
        const tempMsg = msg ? msg : 'Bad Request'
        return new ApiException(tempMsg, HTTP_STATUS_CODE.Bad_Request)
    }

    public static NotFound(msg: string = '') {
        const tempMsg = msg ? msg : 'Not Found'
        return new ApiException(tempMsg, HTTP_STATUS_CODE.Not_Found)
    }

    public static ServerError() {
        return new ApiException(
            'Internal Server Error',
            HTTP_STATUS_CODE.Server_Error
        )
    }
}

export { ApiException }
