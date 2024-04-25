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
  
  // Create a new ResponseAPI object and functions to update or create the object
  export function createResponseAPI(createProxyApiDto: CreateProxyApiDto): ResponseAPI {
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
  // updating responseAPI object with successful response
  export function updateSuccessfulResponseAPI(responseAPI: ResponseAPI, response: string): ResponseAPI {
    responseAPI.Status = 'successful';
    responseAPI.Response = response;
    responseAPI.Output_Tokens = response.split(/\s+/).length;
    responseAPI.Total_Tokens += responseAPI.Output_Tokens;
    return responseAPI;
  }

  // updating responseAPI object with failed response
  export function updateFailedResponseAPI(responseAPI: ResponseAPI): ResponseAPI {
    responseAPI.Status = 'failed';
    return responseAPI;
  }
  