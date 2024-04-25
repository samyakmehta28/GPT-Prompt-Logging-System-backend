import { Module } from '@nestjs/common';
import { ProxyApiService } from './proxy-api.service';
import { ProxyApiController } from './proxy-api.controller';
import { OpenAIService } from './openaiService';
import { ClickHouse } from 'clickhouse';
import { ClickHouseService } from './clickhouse.service';
import { ResponseApiService } from './responseAPIUtils.service';
@Module({
  controllers: [ProxyApiController],
  providers: [ProxyApiService, OpenAIService, ClickHouseService, ResponseApiService],
})
export class ProxyApiModule {}
