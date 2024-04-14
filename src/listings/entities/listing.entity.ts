import { Reservation } from "src/reservations/entities/reservation.entity";
import { User } from "src/users/entities/user.entity";
import { Column, ManyToMany, ManyToOne, OneToMany, OneToOne, PrimaryGeneratedColumn } from "typeorm";

export class Listing {
    @PrimaryGeneratedColumn()
    id: string;

    @Column()
    isAvailable: boolean;

    @Column()
    price: number;

    @Column()
    title: String;

    @Column()
    rating: number

    @OneToMany(
        () => Reservation,
        (reservation) => reservation.listing,
        {
            nullable: true,

        }
    )
    reservations: Reservation[]

    @ManyToOne(
        () => User,
        user => user.listings,
        {
            nullable: false,
            cascade: true,
            eager: true
        }
    )
    owner: User

    @ManyToMany(
        () => User,
        user => user.favoris,
        {
            nullable: true,
            cascade: true,
            eager: true
        }
    )
    users:User[]


}
