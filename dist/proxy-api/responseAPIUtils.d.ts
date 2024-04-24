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
export declare function createResponseAPI(createProxyApiDto: CreateProxyApiDto): ResponseAPI;
export declare function updateSuccessfulResponseAPI(responseAPI: ResponseAPI, response: string): ResponseAPI;
export declare function updateFailedResponseAPI(responseAPI: ResponseAPI): ResponseAPI;
export {};
