import { Test, TestingModule } from '@nestjs/testing';
import { AccomodationsController } from './accomodations.controller';
import { AccomodationsService } from './accomodations.service';

describe('AccomodationsController', () => {
  let controller: AccomodationsController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [AccomodationsController],
      providers: [AccomodationsService],
    }).compile();

    controller = module.get<AccomodationsController>(AccomodationsController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
