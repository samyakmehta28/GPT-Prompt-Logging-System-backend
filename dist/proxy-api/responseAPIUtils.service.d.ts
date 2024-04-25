import { CreateProxyApiDto } from "./dto/create-proxy-api.dto";
interface ResponseAPI {
    Created_At: number;
    Status: string;
    Request: string;
    Model: string;
    Total_Tokens: number;
    Input_Tokens: number;
    Output_Tokens: number;
    Response: string;
    User: string;
    Environment: string;
}
export declare class ResponseApiService {
    createResponseAPI(createProxyApiDto: CreateProxyApiDto): ResponseAPI;
    updateSuccessfulResponseAPI(responseAPI: ResponseAPI, response: string): ResponseAPI;
    updateFailedResponseAPI(responseAPI: ResponseAPI): ResponseAPI;
}
export {};
