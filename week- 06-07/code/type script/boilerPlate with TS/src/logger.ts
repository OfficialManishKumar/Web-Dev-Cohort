import winston from "winston";

export const logger = winston.createLogger({
    level:"info",
    format:winston.format.json()
})

if(process.env.NODE_ENV !== 'prouction'){
    logger.add(new winston.transports.Console({
        format:winston.format.simple()
    }))
}