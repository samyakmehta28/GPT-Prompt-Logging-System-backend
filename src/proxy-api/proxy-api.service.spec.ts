import { Test, TestingModule } from '@nestjs/testing';
import { ProxyApiService } from './proxy-api.service';

describe('ProxyApiService', () => {
  let service: ProxyApiService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [ProxyApiService],
    }).compile();

    service = module.get<ProxyApiService>(ProxyApiService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
