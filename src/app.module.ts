import { Module, ValidationPipe } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ConfigModule } from '@nestjs/config';
import { ProxyApiModule } from './proxy-api/proxy-api.module';
import { HttpExceptionFilter } from './http-exception.filter';
import { APP_FILTER, APP_PIPE } from '@nestjs/core';

@Module({
  controllers: [AppController],
  providers: [
    AppService,
    {
      provide: APP_PIPE,
      useClass: ValidationPipe,
    },
  ],
  imports: [ProxyApiModule],
})
export class AppModule {}
