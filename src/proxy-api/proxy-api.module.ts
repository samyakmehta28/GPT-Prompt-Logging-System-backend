import { Module } from '@nestjs/common';
import { ProxyApiService } from './proxy-api.service';
import { ProxyApiController } from './proxy-api.controller';
import { OpenAIService } from './openaiService';
import { ClickHouse } from 'clickhouse';
import { ClickHouseService } from './clickhouse.service';

@Module({
  controllers: [ProxyApiController],
  providers: [ProxyApiService, OpenAIService, ClickHouseService],
})
export class ProxyApiModule {}
