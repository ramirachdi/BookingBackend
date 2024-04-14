import { Comment } from "src/comments/entities/comment.entity";
import { Rating } from "src/ratings/entities/rating.entity";
import { Reservation } from "src/reservations/entities/reservation.entity";
import { User } from "src/users/entities/user.entity";
import { Column, Entity, ManyToMany, ManyToOne, OneToMany, OneToOne, PrimaryGeneratedColumn } from "typeorm";
@Entity()
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
    comments:Comment[]

}
