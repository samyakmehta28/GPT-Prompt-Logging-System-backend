"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ProxyApiService = void 0;
const common_1 = require("@nestjs/common");
const openaiService_1 = require("./openaiService");
const clickhouse_service_1 = require("./clickhouse.service");
const responseAPIUtils_service_1 = require("./responseAPIUtils.service");
let ProxyApiService = class ProxyApiService {
    constructor(openAIService, clickHouseService, responseApiService) {
        this.openAIService = openAIService;
        this.clickHouseService = clickHouseService;
        this.responseApiService = responseApiService;
    }
    ;
    async create(createProxyApiDto, queryParamsDto) {
        let responseAPI = this.responseApiService.createResponseAPI(createProxyApiDto);
        let response = '';
        try {
            response = await this.openAIService.chatCompletion(createProxyApiDto);
            responseAPI = this.responseApiService.updateSuccessfulResponseAPI(responseAPI, response);
            await this.clickHouseService.storeDataInDataset(responseAPI);
            return { data: response };
        }
        catch (error) {
            console.error('Error making API call:', error);
            responseAPI = this.responseApiService.updateFailedResponseAPI(responseAPI);
            await this.clickHouseService.storeDataInDataset(responseAPI);
            return { data: response };
        }
    }
    async findAll(queryParamsDto) {
        return this.clickHouseService.queryData(queryParamsDto);
    }
    async getMetric(queryParamsDto) {
        const jsondata = await this.clickHouseService.queryData(queryParamsDto);
        const { totalInputTokens, totalOutputTokens } = await this.clickHouseService.queryDataTokens(jsondata.data);
        const responseJson = {
            "Total_Input_Tokens": totalInputTokens,
            "Total_Output_Tokens": totalOutputTokens,
            "data": jsondata
        };
        return responseJson;
    }
};
exports.ProxyApiService = ProxyApiService;
exports.ProxyApiService = ProxyApiService = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [openaiService_1.OpenAIService,
        clickhouse_service_1.ClickHouseService,
        responseAPIUtils_service_1.ResponseApiService])
], ProxyApiService);
//# sourceMappingURL=proxy-api.service.js.map