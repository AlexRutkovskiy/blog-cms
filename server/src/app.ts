import cookieParser from 'cookie-parser'
import cors from 'cors'
import express, { Application, Request, Response, NextFunction } from 'express'
import helmet from 'helmet'
import morgan from 'morgan'

import fs from 'fs'
import path from 'path'
import { fileURLToPath } from 'url'

import { router } from '@routes/index.js'
import { JSONResponse } from '@http/response/JsonResponse.js'
import { ApiException } from '@exceptions/ApiException.js'
import { HTTP_STATUS_CODE } from '@utils/constans/http.js'

const app: Application = express()

const __filename = fileURLToPath(import.meta.url)
const __dirname = path.dirname(__filename)

const morganFormat =
    ':date[iso] :remote-addr :remote-user :method :url HTTP/:http-version :status :res[content-length] - :response-time ms'

const enum MORGAN_FILE_LOG {
    SUCCESS = 'success.log',
    ERROR = 'error.log',
}

const morganStream = (isError: boolean = false) => {
    return fs.createWriteStream(
        path.join(
            __dirname,
            'logs',
            isError ? MORGAN_FILE_LOG.ERROR : MORGAN_FILE_LOG.SUCCESS
        ),
        { flags: 'a' }
    )
}

app.use(express.json())
app.use(express.urlencoded({ extended: true }))
app.use(cookieParser())

app.use(cors())
app.use(helmet())

app.use(
    morgan(morganFormat, {
        stream: morganStream(),
        skip: (req, res) => res.statusCode > HTTP_STATUS_CODE.Bad_Request,
    })
)
app.use(
    morgan(morganFormat, {
        stream: morganStream(true),
        skip: (req, res) => res.statusCode <= HTTP_STATUS_CODE.Bad_Request,
    })
)

app.use('/v1/api', router)

app.use((error: Error, req: Request, res: Response, next: NextFunction) => {
    const statusCode = error instanceof ApiException ? error?.code : 500
    const data = error instanceof ApiException ? error?.data : null
    return res.json(new JSONResponse(statusCode, error?.message, data))
})

export { app }
