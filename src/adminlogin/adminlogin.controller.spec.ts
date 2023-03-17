import { Test, TestingModule } from '@nestjs/testing';
import { AdminloginController } from './adminlogin.controller';

describe('AdminloginController', () => {
  let controller: AdminloginController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [AdminloginController],
    }).compile();

    controller = module.get<AdminloginController>(AdminloginController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
