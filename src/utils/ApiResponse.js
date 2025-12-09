class ApiResponse{
    constructor(statusCode, data ,message = "Success", data = null){
        this.statusCode = statusCode;
        this.data = data;
        this.message = message;
        this.success = statusCode >= 200 && statusCode <300;
    }

}

export {ApiResponse};