import { Test, TestingModule } from '@nestjs/testing';
import { CountClickController } from './countClick.controller';

describe('CountClickController', () => {
  let controller: CountClickController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [CountClickController],
    }).compile();

    controller = module.get<CountClickController>(CountClickController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
