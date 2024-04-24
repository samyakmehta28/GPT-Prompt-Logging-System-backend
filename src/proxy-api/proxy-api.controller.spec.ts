import { Test, TestingModule } from '@nestjs/testing';
import { ProxyApiController } from './proxy-api.controller';
import { ProxyApiService } from './proxy-api.service';

describe('ProxyApiController', () => {
  let controller: ProxyApiController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [ProxyApiController],
      providers: [ProxyApiService],
    }).compile();

    controller = module.get<ProxyApiController>(ProxyApiController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
