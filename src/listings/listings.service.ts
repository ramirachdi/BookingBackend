import { Injectable } from '@nestjs/common';
import { CreateListingDto } from './dto/create-listing.dto';
import { UpdateListingDto } from './dto/update-listing.dto';
import { Listing } from './entities/listing.entity';
import { CrudService } from 'src/common/services/crud.service';
import { Repository } from 'typeorm';
import { InjectRepository } from '@nestjs/typeorm';
import { User } from 'src/users/entities/user.entity';
import { GetListingDto } from './dto/get-listing.dto';

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


  async findByCriteria(criteria): Promise<Listing[]> {
    let qb = await this.listingRepository.createQueryBuilder('listing');
    if (criteria.startDate && criteria.endDate) {
      qb.leftJoinAndSelect("listing.reservations", "reservation")
        .andWhere(`NOT (
          reservation.endDate >= :startDate AND reservation.startDate <= :endDate
          OR
          reservation.startDate <= :endDate AND reservation.endDate >= :startDate
        )`
          , { startDate: criteria.startDate, endDate: criteria.endDate })
        .orWhere("reservation.id IS NULL")

    }
    if (criteria.country) {
      qb.andWhere("listing.country= :country", { country: criteria.country })
    }
    if (criteria.price) {
      qb.andWhere("listing.price <= :price", { price: criteria.price })
    }
    if (criteria.capacity) {
      qb.andWhere("listing.capacity >= :capacity", { capacity: criteria.capacity })
    }
    if (criteria.rooms) {
      qb.andWhere("listing.rooms >= :rooms", { rooms: criteria.rooms })
    }
    if (criteria.bathrooms) {
      qb.andWhere("listing.bathrooms >= :bathrooms", { bathrooms: criteria.bathrooms })
    }
    if (criteria.type) {
      qb.andWhere("listing.type = :type", { type: criteria.type })
    }

    return qb.getMany();
  }

  async findByUser(user: User): Promise<Listing[]> {
    return this.listingRepository.find({ where: { host: user } });
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
