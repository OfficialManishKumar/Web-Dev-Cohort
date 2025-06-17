import zod from "zod"


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