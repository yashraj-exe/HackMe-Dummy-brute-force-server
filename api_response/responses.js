function successResponse(res, msg, statusCode) {
    const data = {
        status: "SUCCESS",
        statusCode: statusCode,
        message: msg
    };
    return res.status(200).json(data);

}
function successResponseWithData(res, msg, statusCode,list) {
    const data = {
        status: "SUCCESS",
        statusCode: statusCode,
        message: msg,
        data : list
    };
    return res.status(200).json(data);
}

function successResponseWithToken(res, msg, statusCode,token) {
    const resData = {
        status: "SUCCESS",
        statusCode: statusCode,
        message: msg,
        token : token,
    };
    return res.status(200).json(resData);
}

function errorResponseWithError(res, msg, statusCode, error) {
    const data = {
        status: "ERROR",
        statusCode: statusCode,
        message: msg,
        error: error
    };
    return res.status(500).json(data);
}
function errorResponse(res, msg, statusCode) {
    const data = {
        status: "ERROR",
        statusCode: statusCode,
        message: msg
    };
    return res.status(400).json(data);
}

module.exports = {
    successResponse,
    successResponseWithToken,
    successResponseWithData,
    errorResponseWithError,
    errorResponse
};
