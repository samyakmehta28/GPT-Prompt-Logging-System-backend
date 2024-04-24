import { Injectable, HttpException, HttpStatus } from '@nestjs/common';
import { CreateProxyApiDto } from './dto/create-proxy-api.dto';
import { UpdateProxyApiDto } from './dto/update-proxy-api.dto';
import { createClient } from '@clickhouse/client';
import { format,parse } from 'date-fns';
import type { ClickHouseSettings } from '@clickhouse/client';
import { OpenAIService } from './openaiService';
import { ClickHouseService } from './clickhouse.service';
import { QueryParamsDto } from './dto/QueryParams.dto';
import { createResponseAPI, updateSuccessfulResponseAPI, updateFailedResponseAPI } from './responseApiUtils';



@Injectable()
export class ProxyApiService {
  constructor(private readonly openAIService: OpenAIService,
    private readonly clickHouseService: ClickHouseService
  ) {}; 
  
  

  async create(createProxyApiDto: CreateProxyApiDto, queryParamsDto: QueryParamsDto) {
    let responseAPI = createResponseAPI(createProxyApiDto);
    try {
      // Make an API call to an external service
      const response = await this.openAIService.chatCompletion(createProxyApiDto)
      responseAPI = updateSuccessfulResponseAPI(responseAPI, response);
      await this.clickHouseService.storeDataInDataset(responseAPI);
      return this.clickHouseService.queryData(queryParamsDto);
      
    } catch (error) {
      console.error('Error making API call:', error);
      responseAPI = updateFailedResponseAPI(responseAPI);
      await this.clickHouseService.storeDataInDataset(responseAPI);
      return this.clickHouseService.queryData(queryParamsDto);
      //throw new HttpException('The external service returned an error.', HttpStatus.BAD_REQUEST);
    }
  }
    

  async findAll(queryParamsDto: QueryParamsDto) {
    return this.clickHouseService.queryData(queryParamsDto);
  }

  async getMetric(queryParamsDto: QueryParamsDto) {
    const jsondata =  await this.clickHouseService.queryData(queryParamsDto);
    const { totalInputTokens, totalOutputTokens } = await this.clickHouseService.queryDataTokens(jsondata.data)
    const responseJson = {
      "Total_Input_Tokens": totalInputTokens,
      "Total_Output_Tokens": totalOutputTokens ,
      "data": jsondata
    }
    return responseJson;
  }
}
