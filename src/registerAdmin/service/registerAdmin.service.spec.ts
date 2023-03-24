import { Test, TestingModule } from '@nestjs/testing';
import { RegisterAdminService } from './registerAdmin.service';



describe('LandingService', () => {
  let service: RegisterAdminService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [RegisterAdminService],
    }).compile();

    service = module.get<RegisterAdminService>(RegisterAdminService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
