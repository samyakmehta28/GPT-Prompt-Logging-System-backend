"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.updateFailedResponseAPI = exports.updateSuccessfulResponseAPI = exports.createResponseAPI = void 0;
function createResponseAPI(createProxyApiDto) {
    const createdAt = Date.now();
    console.log('createdAt:', createdAt);
    const totalTokens = createProxyApiDto.prompt.split(/\s+/).length;
    return {
        Created_At: createdAt,
        Status: 'Pending',
        Request: createProxyApiDto.prompt,
        Model: createProxyApiDto.metadata.model,
        Total_Tokens: totalTokens,
        Input_Tokens: totalTokens,
        Output_Tokens: 0,
        Response: '',
        User: createProxyApiDto.metadata.user,
        Environment: createProxyApiDto.metadata.environment
    };
}
exports.createResponseAPI = createResponseAPI;
function updateSuccessfulResponseAPI(responseAPI, response) {
    responseAPI.Status = 'successful';
    responseAPI.Response = response;
    responseAPI.Output_Tokens = response.split(/\s+/).length;
    responseAPI.Total_Tokens += responseAPI.Output_Tokens;
    return responseAPI;
}
exports.updateSuccessfulResponseAPI = updateSuccessfulResponseAPI;
function updateFailedResponseAPI(responseAPI) {
    responseAPI.Status = 'failed';
    return responseAPI;
}
exports.updateFailedResponseAPI = updateFailedResponseAPI;
//# sourceMappingURL=responseApiUtils.js.map