import { Test, TestingModule } from '@nestjs/testing';
import { RegisterAdminController } from './registerAdmin.controller';

describe('RegisterAdminController', () => {
  let controller: RegisterAdminController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [RegisterAdminController],
    }).compile();

    controller = module.get<RegisterAdminController>(RegisterAdminController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
