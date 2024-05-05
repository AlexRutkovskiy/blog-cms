import 'dotenv/config'

export const config = {
    PORT: (process.env.PORT ?? 3005) as number,
}

export type IConfig = typeof config
