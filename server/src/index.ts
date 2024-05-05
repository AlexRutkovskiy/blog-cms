import { app } from './app.js'

const PORT = 3005
app.listen(PORT, () => {
    console.log(`Server run on URL = http://localhost:${PORT}`)
})
