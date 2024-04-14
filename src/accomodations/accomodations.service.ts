import { Injectable } from '@nestjs/common';
import { CreateAccomodationDto } from './dto/create-accomodation.dto';
import { UpdateAccomodationDto } from './dto/update-accomodation.dto';

@Injectable()
export class AccomodationsService {
  create(createAccomodationDto: CreateAccomodationDto) {
    return 'This action adds a new accomodation';
  }

  findAll() {
    return `This action returns all accomodations`;
  }

  findOne(id: number) {
    return `This action returns a #${id} accomodation`;
  }

  update(id: number, updateAccomodationDto: UpdateAccomodationDto) {
    return `This action updates a #${id} accomodation`;
  }

  remove(id: number) {
    return `This action removes a #${id} accomodation`;
  }
}
