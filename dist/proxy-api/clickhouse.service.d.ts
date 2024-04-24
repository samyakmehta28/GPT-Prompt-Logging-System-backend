import { QueryParamsDto } from './dto/QueryParams.dto';
export declare class ClickHouseService {
    private readonly client;
    storeDataInDataset(responseAPI: any): Promise<void>;
    queryData(queryParamsDto: QueryParamsDto): Promise<{
        data: unknown[];
    }>;
    queryDataTokens(data: any): Promise<{
        totalInputTokens: number;
        totalOutputTokens: number;
    }>;
}
