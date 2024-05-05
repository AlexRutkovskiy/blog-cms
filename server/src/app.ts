import cookieParser from 'cookie-parser'
import cors from 'cors'
import express, { Application } from 'express'
import helmet from 'helmet'
import morgan from 'morgan'

import { router } from '@routes/index.js'

const app: Application = express()

app.use(express.json())
app.use(express.urlencoded({ extended: true }))
app.use(cookieParser())

app.use(cors())
app.use(helmet())
app.use(morgan('tiny'))

app.use(router)

export { app }
