import { Injectable } from '@nestjs/common';
import { CreateReservationDto } from './dto/create-reservation.dto';
import { UpdateReservationDto } from './dto/update-reservation.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Reservation } from './entities/reservation.entity';
import { IsNull, Not, Repository } from 'typeorm';
import { User } from 'src/users/entities/user.entity';
import { Listing } from 'src/listings/entities/listing.entity';

@Injectable()
export class ReservationsService {

  constructor(
    @InjectRepository(Reservation)
    private readonly reservationRepository: Repository<Reservation>,

    @InjectRepository(Listing)
    private readonly listingRepository: Repository<Listing>,

  ) {

  }
  create(createReservationDto: CreateReservationDto) {
    return 'This action adds a new reservation';
  }

  findAll() {
    return `This action returns all reservations`;
  }

  async getReservations(user: User) {
    const reservations = await this.reservationRepository.find({ where: { user: user } })
    return reservations;
  }

  async addReservation(user: User, listingId: number, reservation: CreateReservationDto) {
    const listing = await this.listingRepository.findOneBy({ id: listingId });
    const newReservation = this.reservationRepository.create(reservation);
    newReservation.user = user;
    newReservation.listing = listing;
    return await this.reservationRepository.save(newReservation);
  }

  async deleteReservation(id: number, user: User) {
    const reservation = await this.reservationRepository.findOne({ where: { id, user } });
    return await this.reservationRepository.delete(id);
  }

  findOne(id: number) {
    return `This action returns a #${id} reservation`;
  }

  update(id: number, updateReservationDto: UpdateReservationDto) {
    return `This action updates a #${id} reservation`;
  }

  remove(id: number) {
    return `This action removes a #${id} reservation`;
  }
}
