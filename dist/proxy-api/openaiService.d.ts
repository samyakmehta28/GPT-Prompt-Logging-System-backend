import { CreateProxyApiDto } from './dto/create-proxy-api.dto';
export declare class OpenAIService {
    private openai;
    constructor();
    chatCompletion(createProxyApiDto: CreateProxyApiDto): Promise<string>;
}
