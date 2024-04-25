import { CreateProxyApiDto } from './dto/create-proxy-api.dto';
import { OpenAIService } from './openaiService';
import { ClickHouseService } from './clickhouse.service';
import { QueryParamsDto } from './dto/QueryParams.dto';
import { ResponseApiService } from './responseAPIUtils.service';
export declare class ProxyApiService {
    private readonly openAIService;
    private readonly clickHouseService;
    private readonly responseApiService;
    constructor(openAIService: OpenAIService, clickHouseService: ClickHouseService, responseApiService: ResponseApiService);
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
}
