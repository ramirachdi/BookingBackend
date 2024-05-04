import { Injectable } from '@nestjs/common';
import { CreateListingDto } from './dto/create-listing.dto';
import { UpdateListingDto } from './dto/update-listing.dto';
import { Listing } from './entities/listing.entity';
import { CrudService } from 'src/common/services/crud.service';
import { Repository } from 'typeorm';
import { InjectRepository } from '@nestjs/typeorm';
import { User } from 'src/users/entities/user.entity';

@Injectable()
export class ListingsService extends CrudService<Listing> {

  constructor(
    @InjectRepository(Listing)
    private listingRepository: Repository<Listing>
  ) {
    super(listingRepository)
  }


  createListing(createListingDto: CreateListingDto, user: User) {
    const newListing = this.listingRepository.create(createListingDto);
    newListing.host = user;
    return super.create(newListing);
  }

  async findAll(): Promise<Listing[]> {
    return await super.findAll();
  }

  findOne(id: number) {
    return super.findOne(id);
  }

  update(id: number, updateListingDto: UpdateListingDto) {
    return super.update(id, updateListingDto);
  }

  remove(id: number) {
    return super.remove(id);
  }
}
