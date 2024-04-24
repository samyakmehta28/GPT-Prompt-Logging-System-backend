import { Controller, Get, Post, Body, Patch, Param, Delete, Query, All, ValidationPipe } from '@nestjs/common';
import { ProxyApiService } from './proxy-api.service';
import { CreateProxyApiDto } from './dto/create-proxy-api.dto';
import { UpdateProxyApiDto } from './dto/update-proxy-api.dto';
import { HttpException, HttpStatus } from '@nestjs/common';
import { HttpExceptionFilter } from '../http-exception.filter';
import { QueryParamsDto, FiltersDto } from './dto/QueryParams.dto';

@Controller('proxy-api')
export class ProxyApiController {
  constructor(private readonly proxyApiService: ProxyApiService) {}

  @Post()
  create(@Body(ValidationPipe) createProxyApiDto: CreateProxyApiDto, @Query(new ValidationPipe({ transformOptions: { enableImplicitConversion: true }, transform: true  })) queryParamsDto: QueryParamsDto) {
    return this.proxyApiService.create(createProxyApiDto, queryParamsDto);
    
  }

  @Get()
  findAll( @Query(new ValidationPipe({ transformOptions: { enableImplicitConversion: true }, transform: true  })) queryParamsDto: QueryParamsDto) {
    return this.proxyApiService.findAll(queryParamsDto);
    
  }

  @Get('metric')
  getMetric( @Query(new ValidationPipe({ transformOptions: { enableImplicitConversion: true }, transform: true  })) queryParamsDto: QueryParamsDto) {
    return this.proxyApiService.getMetric(queryParamsDto);
  }

  @All('*')
  handleBadRequest() {
    throw new HttpException('Bad Request', HttpStatus.BAD_REQUEST);
  }

}
