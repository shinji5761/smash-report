import { Test, TestingModule } from '@nestjs/testing';
import { CounterplanService } from './counterplan.service';

describe('CounterplanService', () => {
  let service: CounterplanService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [CounterplanService],
    }).compile();

    service = module.get<CounterplanService>(CounterplanService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
