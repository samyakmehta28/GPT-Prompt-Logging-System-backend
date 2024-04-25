import { ProxyApiService } from './proxy-api.service';
import { CreateProxyApiDto } from './dto/create-proxy-api.dto';
import { QueryParamsDto } from './dto/QueryParams.dto';
export declare class ProxyApiController {
    private readonly proxyApiService;
    constructor(proxyApiService: ProxyApiService);
    create(createProxyApiDto: CreateProxyApiDto, queryParamsDto: QueryParamsDto): Promise<{
        data: string;
    }>;
    findAll(queryParamsDto: QueryParamsDto): Promise<{
        data: unknown[];
    }>;
    getMetric(queryParamsDto: QueryParamsDto): Promise<{
        Total_Input_Tokens: number;
        Total_Output_Tokens: number;
        data: {
            data: unknown[];
        };
    }>;
    handleBadRequest(): void;
}
