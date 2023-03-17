import { Test, TestingModule } from '@nestjs/testing';
import { AdminloginService } from './adminlogin.service';

describe('AdminloginService', () => {
  let service: AdminloginService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [AdminloginService],
    }).compile();

    service = module.get<AdminloginService>(AdminloginService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
