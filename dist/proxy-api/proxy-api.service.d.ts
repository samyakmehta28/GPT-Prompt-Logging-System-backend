import { CreateProxyApiDto } from './dto/create-proxy-api.dto';
import { OpenAIService } from './openaiService';
import { ClickHouseService } from './clickhouse.service';
import { QueryParamsDto } from './dto/QueryParams.dto';
export declare class ProxyApiService {
    private readonly openAIService;
    private readonly clickHouseService;
    constructor(openAIService: OpenAIService, clickHouseService: ClickHouseService);
    create(createProxyApiDto: CreateProxyApiDto, queryParamsDto: QueryParamsDto): Promise<{
        data: unknown[];
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
