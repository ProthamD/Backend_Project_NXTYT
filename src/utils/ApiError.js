class ApiError extends Error{
    constructor(      
        statusCode,
        message = "Something Went Wrong",
        error = [],
        stack = ""
    ){
        super(message);
        this.statusCode = statusCode;
        this.data = null;
        this.message = message;
        this.success = false;
        this.errors = errors;

        if(statck){
            this.stack = statck;
        }
        else{
            //read and serach about below to knwo more
            error.captureStackTrace(this,this.constructor);
        }

    }
}

export {ApiError};