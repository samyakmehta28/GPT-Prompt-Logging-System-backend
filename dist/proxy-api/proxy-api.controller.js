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
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ProxyApiController = void 0;
const common_1 = require("@nestjs/common");
const proxy_api_service_1 = require("./proxy-api.service");
const create_proxy_api_dto_1 = require("./dto/create-proxy-api.dto");
const common_2 = require("@nestjs/common");
const QueryParams_dto_1 = require("./dto/QueryParams.dto");
let ProxyApiController = class ProxyApiController {
    constructor(proxyApiService) {
        this.proxyApiService = proxyApiService;
    }
    create(createProxyApiDto, queryParamsDto) {
        return this.proxyApiService.create(createProxyApiDto, queryParamsDto);
    }
    findAll(queryParamsDto) {
        return this.proxyApiService.findAll(queryParamsDto);
    }
    getMetric(queryParamsDto) {
        return this.proxyApiService.getMetric(queryParamsDto);
    }
    handleBadRequest() {
        throw new common_2.HttpException('Bad Request', common_2.HttpStatus.BAD_REQUEST);
    }
};
exports.ProxyApiController = ProxyApiController;
__decorate([
    (0, common_1.Post)(),
    __param(0, (0, common_1.Body)(new common_1.ValidationPipe({ transformOptions: { enableImplicitConversion: true }, transform: true }))),
    __param(1, (0, common_1.Query)(new common_1.ValidationPipe({ transformOptions: { enableImplicitConversion: true }, transform: true }))),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [create_proxy_api_dto_1.CreateProxyApiDto, QueryParams_dto_1.QueryParamsDto]),
    __metadata("design:returntype", void 0)
], ProxyApiController.prototype, "create", null);
__decorate([
    (0, common_1.Get)('dashboard'),
    __param(0, (0, common_1.Query)(new common_1.ValidationPipe({ transformOptions: { enableImplicitConversion: true }, transform: true }))),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [QueryParams_dto_1.QueryParamsDto]),
    __metadata("design:returntype", void 0)
], ProxyApiController.prototype, "findAll", null);
__decorate([
    (0, common_1.Get)('metric'),
    __param(0, (0, common_1.Query)(new common_1.ValidationPipe({ transformOptions: { enableImplicitConversion: true }, transform: true }))),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [QueryParams_dto_1.QueryParamsDto]),
    __metadata("design:returntype", void 0)
], ProxyApiController.prototype, "getMetric", null);
__decorate([
    (0, common_1.All)('*'),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", void 0)
], ProxyApiController.prototype, "handleBadRequest", null);
exports.ProxyApiController = ProxyApiController = __decorate([
    (0, common_1.Controller)('proxy-api'),
    __metadata("design:paramtypes", [proxy_api_service_1.ProxyApiService])
], ProxyApiController);
//# sourceMappingURL=proxy-api.controller.js.map