import 'dotenv/config'

export const config = {
    PORT: (process.env.PORT ?? 3005) as number,
    MONGO_URL: process.env.MONGO_URL ?? '',
    AUTH: {
        JWT_REFRESH_SECRET: process.env.JWT_REFRESH_SECRET ?? 'refresh',
        JWT_ACCESS_SECRET: process.env.JWT_ACCESS_SECRET ?? 'access',
        JWT_URL_REFRESH_TOKEN: 'v1/api/auth/refresh',
    },
}

export type IConfig = typeof config
