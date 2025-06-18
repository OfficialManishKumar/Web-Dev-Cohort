// We are creating this file to minimize the possible errors by reducing the dependency on server or developer for must having all the variables at env file.


import zod from "zod"

// creating a varriable storing a zod object that will consist all the definitions of values at env.

const envSchema = zod.object({
    PORT: zod.string().optional()
})

function createEnv(env:NodeJS.ProcessEnv){
    const validationResult = envSchema.safeParse(env)
    if(!validationResult.success){
        throw new Error(validationResult.error.message)
    }
    return validationResult;
}

export const env = createEnv(process.env)