import { app } from './app.js'
import { config, IConfig } from '@config/config.js'

async function bootstrap(config: IConfig) {
    app.listen(config.PORT, () => {
        console.log(`Server run on URL = http://localhost:${config.PORT}`)
    })
}

bootstrap(config).catch((err) => console.log(err))
