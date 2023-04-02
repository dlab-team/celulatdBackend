import { Test, TestingModule } from '@nestjs/testing';
import { CountClickService } from './countClick.service';


describe('ServiceService', () => {
  let service: CountClickService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [CountClickService],
    }).compile();

    service = module.get<CountClickService>(CountClickService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
