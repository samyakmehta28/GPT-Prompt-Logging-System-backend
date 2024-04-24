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
exports.OpenAIService = void 0;
const common_1 = require("@nestjs/common");
const OpenAI = require('openai');
require('dotenv').config();
let OpenAIService = class OpenAIService {
    constructor() {
        this.openai = new OpenAI({
            apiKey: process.env.OPENAI_API_KEY,
            baseURL: "https://llm-gateway.truefoundry.com/api/inference/openai",
            extra_headers: {
                "X-TFY-METADATA": "{'tfy_log_request': 'true', 'Custom-Metadata': 'Custom-Value'}",
            },
        });
    }
    async chatCompletion(createProxyApiDto) {
        const stream = await this.openai.chat.completions.create({
            model: "open-ai-account/" + createProxyApiDto.metadata.model,
            messages: [
                { "role": "system", "content": "You are an AI bot." },
                { "role": "user", "content": createProxyApiDto.prompt },
            ],
            temperature: 0.7,
            max_tokens: 256,
            top_p: 0.8,
            top_k: 50,
            frequency_penalty: 0,
            presence_penalty: 0,
            repetition_penalty: 1,
            stop: "</s>",
            stream: true
        });
        let result = '';
        for await (const chunk of stream) {
            result += chunk.choices[0]?.delta?.content || '';
        }
        console.log('response from openai:', result);
        return result;
    }
};
exports.OpenAIService = OpenAIService;
exports.OpenAIService = OpenAIService = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [])
], OpenAIService);
//# sourceMappingURL=openaiService.js.map