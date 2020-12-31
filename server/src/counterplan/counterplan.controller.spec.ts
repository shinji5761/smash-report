import { Test, TestingModule } from '@nestjs/testing';
import { CounterplanController } from './counterplan.controller';

describe('CounterplanController', () => {
  let controller: CounterplanController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [CounterplanController],
    }).compile();

    controller = module.get<CounterplanController>(CounterplanController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
