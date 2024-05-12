import 'dotenv/config'

export const config = {
    PORT: (process.env.PORT ?? 3005) as number,
    MONGO_URL: process.env.MONGO_URL ?? '',
}

export type IConfig = typeof config
