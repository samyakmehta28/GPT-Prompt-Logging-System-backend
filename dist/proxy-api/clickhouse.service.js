"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ClickHouseService = void 0;
const common_1 = require("@nestjs/common");
const client_1 = require("@clickhouse/client");
const common_2 = require("@nestjs/common");
require('dotenv').config();
let ClickHouseService = class ClickHouseService {
    constructor() {
        this.client = (0, client_1.createClient)({
            host: 'https://srys2v1np9.us-central1.gcp.clickhouse.cloud:8443',
            username: 'default',
            password: process.env.clickhouse_password,
        });
    }
    async storeDataInDataset(responseAPI) {
        const commandSettings = {
            wait_end_of_query: 1,
        };
        try {
            await this.client.insert({
                table: 'PromptDatabase',
                format: 'JSONEachRow',
                values: responseAPI,
            });
            console.log('Response inserted into ClickHouse dataset successfully');
        }
        catch (error) {
            console.error('Error inserting data into ClickHouse:', error);
            throw new common_2.HttpException('Error inserting data into ClickHouse', common_2.HttpStatus.INTERNAL_SERVER_ERROR);
        }
    }
    async queryData(queryParamsDto) {
        const { filters, timePeriod } = queryParamsDto;
        try {
            let query = 'SELECT * FROM PromptDatabase';
            if (filters) {
                const conditions = Object.keys(filters)
                    .map(key => `${key} = '${filters[key]}'`)
                    .join(' AND ');
                query += ` WHERE ${conditions}`;
            }
            if (timePeriod) {
                let timeFilter = '';
                const unixTimestamp = Date.now();
                const match = timePeriod.match(/last(\d+)(\w+)/);
                if (match) {
                    const [, num, unit] = match;
                    let timeInMillis;
                    switch (unit) {
                        case 'minutes':
                            timeInMillis = parseInt(num) * 60 * 1000;
                            break;
                        case 'hours':
                            timeInMillis = parseInt(num) * 60 * 60 * 1000;
                            break;
                        case 'days':
                            timeInMillis = parseInt(num) * 24 * 60 * 60 * 1000;
                            break;
                        default:
                            break;
                    }
                    if (filters && timeInMillis) {
                        timeFilter = ` AND Created_At >= ${unixTimestamp - timeInMillis}`;
                    }
                    else if (timeInMillis) {
                        timeFilter = ` WHERE Created_At >= ${unixTimestamp - timeInMillis}`;
                    }
                }
                query += timeFilter;
            }
            query += ' ORDER BY Created_At DESC';
            console.log(query);
            const rows = await this.client.query({
                query: query,
                format: 'JSONEachRow',
            });
            const data = await rows.json();
            return { data };
        }
        catch (error) {
            console.error('Error fetching data from ClickHouse:', error);
            throw new common_2.HttpException('Error fetching data from ClickHouse', common_2.HttpStatus.INTERNAL_SERVER_ERROR);
        }
    }
    async queryDataTokens(data) {
        let totalInputTokens = 0;
        let totalOutputTokens = 0;
        for (const entry of data) {
            totalInputTokens += entry.Input_Tokens || 0;
            totalOutputTokens += entry.Output_Tokens || 0;
        }
        return { totalInputTokens, totalOutputTokens };
    }
};
exports.ClickHouseService = ClickHouseService;
exports.ClickHouseService = ClickHouseService = __decorate([
    (0, common_1.Injectable)()
], ClickHouseService);
//# sourceMappingURL=clickhouse.service.js.map