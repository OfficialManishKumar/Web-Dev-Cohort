class ApiError extends Error{
    constructor(
        statusCode,
        message = "",
        error = [],
    ){
        super(message)
        this.statusCode = statusCode
        this.message = message;
        this.success = false;
        this.errors = error;
    }
}

export {ApiError}