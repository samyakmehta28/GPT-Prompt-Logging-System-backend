"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ResponseApiService = void 0;
class ResponseApiService {
    createResponseAPI(createProxyApiDto) {
        const createdAt = Date.now();
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
    updateSuccessfulResponseAPI(responseAPI, response) {
        responseAPI.Status = 'successful';
        responseAPI.Response = response;
        responseAPI.Output_Tokens = response.split(/\s+/).length;
        responseAPI.Total_Tokens += responseAPI.Output_Tokens;
        return responseAPI;
    }
    updateFailedResponseAPI(responseAPI) {
        responseAPI.Status = 'failed';
        return responseAPI;
    }
}
exports.ResponseApiService = ResponseApiService;
//# sourceMappingURL=responseAPIUtils.service.js.map