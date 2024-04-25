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

// ProxyApiService class and its methods

@Injectable()
export class ProxyApiService {
  constructor(private readonly openAIService: OpenAIService,
    private readonly clickHouseService: ClickHouseService
  ) {}; 
  
  
  // Create method to make an API call to an external service and store the response in the ClickHouse dataset
  async create(createProxyApiDto: CreateProxyApiDto, queryParamsDto: QueryParamsDto) {
    let responseAPI = createResponseAPI(createProxyApiDto);
    let response = '';
    try {
      // Make an API call to an external service
      response = await this.openAIService.chatCompletion(createProxyApiDto)
      responseAPI = updateSuccessfulResponseAPI(responseAPI, response);
      await this.clickHouseService.storeDataInDataset(responseAPI);
      return {data:response};
      //return this.clickHouseService.queryData(queryParamsDto);
      
    } catch (error) {
      console.error('Error making API call:', error);
      responseAPI = updateFailedResponseAPI(responseAPI);
      await this.clickHouseService.storeDataInDataset(responseAPI);
      return {data:response};
    }
  }
    
  // Find all method to query the ClickHouse dataset according to filters
  async findAll(queryParamsDto: QueryParamsDto) {
    return this.clickHouseService.queryData(queryParamsDto);
  }

  // Get metric method to query the ClickHouse dataset and calculate the total input and output tokens
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
