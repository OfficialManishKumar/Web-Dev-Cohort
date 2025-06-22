import dotenv from "dotenv"
dotenv.config()
import http from "http"
import {env} from "./env"
import {logger} from "./logger"
import {createApp} from "./app"


async function main() {
    try {
        const PORT : number = Number(env.data.PORT ?? 8000)       // We will use nullish cohesion instead of or operator because "or" will return first statement even when the output is undefined but this "nullish cohesion(!!)" will only return the first statement if the value is not undefined
        const server = http.createServer(createApp())
        server.listen(PORT,()=>{
            logger.info("Server is Running",PORT)
        })
    } catch (error) {
        logger.error('Error starting server',error)
    }
}

main()