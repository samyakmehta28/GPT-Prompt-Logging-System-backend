"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ProxyApiModule = void 0;
const common_1 = require("@nestjs/common");
const proxy_api_service_1 = require("./proxy-api.service");
const proxy_api_controller_1 = require("./proxy-api.controller");
const openaiService_1 = require("./openaiService");
const clickhouse_service_1 = require("./clickhouse.service");
const responseAPIUtils_service_1 = require("./responseAPIUtils.service");
let ProxyApiModule = class ProxyApiModule {
};
exports.ProxyApiModule = ProxyApiModule;
exports.ProxyApiModule = ProxyApiModule = __decorate([
    (0, common_1.Module)({
        controllers: [proxy_api_controller_1.ProxyApiController],
        providers: [proxy_api_service_1.ProxyApiService, openaiService_1.OpenAIService, clickhouse_service_1.ClickHouseService, responseAPIUtils_service_1.ResponseApiService],
    })
], ProxyApiModule);
//# sourceMappingURL=proxy-api.module.js.map