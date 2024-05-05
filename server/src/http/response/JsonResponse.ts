class JSONResponse {
    private code: number
    private message: string
    private data: any

    constructor(code: number, message: string, data: any) {
        this.code = code
        this.message = message
        this.data = data
    }

    public toString() {
        return {
            statusCode: this.code,
            message: this.message,
            data: this.data,
        }
    }
}

export { JSONResponse }
