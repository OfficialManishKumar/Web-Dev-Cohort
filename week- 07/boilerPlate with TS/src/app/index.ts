import http from "http"
import {env} from "./env"


async function main() {
    try {
        const PORT : number = Number(env ?? 8000)       // We will use nullish cohesion instead of or operator because "or" will return first statement even when the output is undefined but this "nullish cohesion(!!)" will only return the first statement if the value is not undefined
        const server = http.createServer()
        server.listen(PORT)
    } catch (error) {
        
    }
}