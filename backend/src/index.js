require('dotenv').config({path: 'variables.env'})
const createServer = require('./createServer')

const server = createServer()

server.start(
    {
        cors: {
            credentials: true,
            origin: process.env.FRONTEND_URL
        }
    },
    deets => {
        console.log(`Server is running now on http://localhost:${deets.port}`)
    }
)