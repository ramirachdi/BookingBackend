import { Module } from '@nestjs/common';
import { AccomodationsService } from './accomodations.service';
import { AccomodationsController } from './accomodations.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Accomodation } from './entities/accomodation.entity';

@Module({
  imports:[TypeOrmModule.forFeature([Accomodation])],
  controllers: [AccomodationsController],
  providers: [AccomodationsService],
  exports:[AccomodationsService],
})
export class AccomodationsModule {}
