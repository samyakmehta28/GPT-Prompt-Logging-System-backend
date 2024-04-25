import { Injectable } from '@nestjs/common';
import { CreateProxyApiDto } from './dto/create-proxy-api.dto';
const OpenAI = require('openai');
require('dotenv').config();

//this module is used to make a call to the openai api

@Injectable()
export class OpenAIService {
  private openai: any;

  constructor() {
    this.openai = new OpenAI({
      apiKey: process.env.OPENAI_API_KEY,
      baseURL: "https://llm-gateway.truefoundry.com/api/inference/openai",
      // Set the tfy_log_request to "true" in X-TFY-METADATA header to log prompt and response for the request
      extra_headers: {
        "X-TFY-METADATA": "{'tfy_log_request': 'true', 'Custom-Metadata': 'Custom-Value'}",
      },
    });
  }
  //this function is used to make a call to the openai api and return the response

  async chatCompletion(createProxyApiDto: CreateProxyApiDto) {
    const stream = await this.openai.chat.completions.create({
      model: "open-ai-account/"+ createProxyApiDto.metadata.model,
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

    console.log('response from openai:', result)
    return result;
  }
}