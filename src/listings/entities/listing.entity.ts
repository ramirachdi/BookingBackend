import { Comment } from "src/comments/entities/comment.entity";
import { Rating } from "src/ratings/entities/rating.entity";
import { Reservation } from "src/reservations/entities/reservation.entity";
import { User } from "src/users/entities/user.entity";
import { Column, Entity, ManyToMany, ManyToOne, OneToMany, PrimaryGeneratedColumn } from "typeorm";
@Entity()
export class Listing {
    @PrimaryGeneratedColumn()
    id: string;

    @Column()
    adress: string;

    @Column()
    price: number;

    @Column()
    capacity: number

    @Column()
    rooms: number;

    @Column()
    bathrooms: number;

    @Column()
    type: string

    @Column()
    title: String;

    @Column()
    description: String;

    @Column({default:0})
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
            eager: true
        }
    )
    host: User

    @ManyToMany(
        () => User,
        user => user.favoris,
        {
            nullable: true,
            eager: true
        }
    )
    users: User[]

    @OneToMany(
        () => Rating,
        rating => rating.listing,
        {

        }
    )
    ratings: Rating[]

    @OneToMany(
        () => Comment,
        (comment) => comment.listing,
        {

        }

    )
    comments: Comment[]

}
