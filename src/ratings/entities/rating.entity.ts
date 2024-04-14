import { Listing } from "src/listings/entities/listing.entity";
import { User } from "src/users/entities/user.entity";
import { Column, ManyToOne, OneToOne, PrimaryGeneratedColumn } from "typeorm";

export class Rating {
    @PrimaryGeneratedColumn()
    id: string;

    @Column()
    value: number
    
    @ManyToOne(
        () => User,
        (user) => user.ratings,
        {

        }
    )
    user: User

    @OneToOne(
        () => Listing,
        listing => listing.ratings,
        {
            nullable: false,
            eager: true
        }
        
    )
    listing: Listing
}
