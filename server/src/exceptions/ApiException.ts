import { HTTP_STATUS_CODE } from '@utils/constans/http.js'

class ApiException extends Error {
    public message: string
    public code: number
    public data: Record<string, string> | null

    constructor(
        message: string,
        code: number,
        data: Record<string, string> | null = null
    ) {
        super(message)

        this.message = message
        this.code = code
        this.data = data
    }

    public static BadRequest(data: Record<string, string> | null = null) {
        return new ApiException(
            'Bad Request',
            HTTP_STATUS_CODE.Bad_Request,
            data
        )
    }

    public static NotFound() {
        return new ApiException('Not Found', HTTP_STATUS_CODE.Not_Found, null)
    }

    public static ServerError() {
        return new ApiException(
            'Internal Server Error',
            HTTP_STATUS_CODE.Server_Error,
            null
        )
    }
}

export { ApiException }
