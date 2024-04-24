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
exports.QueryParamsDto = exports.FiltersDto = void 0;
const class_validator_1 = require("class-validator");
class FiltersDto {
}
exports.FiltersDto = FiltersDto;
__decorate([
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsString)(),
    (0, class_validator_1.IsIn)(['gpt-4-turbo-2024-04-09', 'gpt-4-0125-preview', 'gpt-3-5-turbo', 'gpt-4']),
    __metadata("design:type", String)
], FiltersDto.prototype, "Model", void 0);
__decorate([
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], FiltersDto.prototype, "user", void 0);
__decorate([
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsString)(),
    (0, class_validator_1.IsIn)(['failed', 'successful']),
    __metadata("design:type", String)
], FiltersDto.prototype, "Status", void 0);
__decorate([
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsString)(),
    (0, class_validator_1.IsIn)(['production', 'development', 'testing']),
    __metadata("design:type", String)
], FiltersDto.prototype, "environment", void 0);
class QueryParamsDto {
}
exports.QueryParamsDto = QueryParamsDto;
__decorate([
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsString)(),
    (0, class_validator_1.IsIn)(['last5minutes', 'last30minutes', 'last1hours', 'last6hours', 'last1days', 'last7days', 'last30days']),
    __metadata("design:type", String)
], QueryParamsDto.prototype, "timePeriod", void 0);
__decorate([
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.ValidateNested)(),
    __metadata("design:type", FiltersDto)
], QueryParamsDto.prototype, "filters", void 0);
//# sourceMappingURL=QueryParams.dto.js.map