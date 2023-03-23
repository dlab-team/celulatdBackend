import { Test, TestingModule } from '@nestjs/testing';
import { AdminLoginController } from './adminlogin.controller';

describe('AdminloginController', () => {
  let controller: AdminLoginController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [AdminLoginController],
    }).compile();

    controller = module.get<AdminLoginController>(AdminLoginController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
