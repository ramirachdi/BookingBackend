import { Test, TestingModule } from '@nestjs/testing';
import { AccomodationsService } from './accomodations.service';

describe('AccomodationsService', () => {
  let service: AccomodationsService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [AccomodationsService],
    }).compile();

    service = module.get<AccomodationsService>(AccomodationsService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
