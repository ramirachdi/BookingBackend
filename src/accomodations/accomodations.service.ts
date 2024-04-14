import { Injectable } from '@nestjs/common';
import { CreateAccomodationDto } from './dto/create-accomodation.dto';
import { UpdateAccomodationDto } from './dto/update-accomodation.dto';
import { CrudService } from 'src/common/services/crud.service';
import { Accomodation } from './entities/accomodation.entity';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';

@Injectable()
export class AccomodationsService extends CrudService<Accomodation> {

  constructor(
    @InjectRepository(Accomodation)
    private accomodationRepository: Repository<Accomodation>
  ) { 
    super(accomodationRepository)
  }
  
  
  create(createAccomodationDto: CreateAccomodationDto) {
    return super.create(createAccomodationDto);
  }

  findAll() {
    return super.findAll();
  }

  findOne(id: number) {
    return super.findOne(id);
  }

  update(id: number, updateAccomodationDto: UpdateAccomodationDto) {
    return super.update(id, updateAccomodationDto);
  }

  remove(id: number) {
    return super.remove(id);
  }
}
