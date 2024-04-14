import { Module } from '@nestjs/common';
import { AccomodationsService } from './accomodations.service';
import { AccomodationsController } from './accomodations.controller';

@Module({
  controllers: [AccomodationsController],
  providers: [AccomodationsService],
})
export class AccomodationsModule {}
