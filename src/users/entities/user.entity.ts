import { IsEmail } from "class-validator";
import { Accomodation } from "src/accomodations/entities/accomodation.entity";
import { Comment } from "src/comments/entities/comment.entity";
import { CountryEnum } from "src/enums/countries.enum";
import { LangaugesEnum } from "src/enums/languages.enum";
import { UserRoleEnum } from "src/enums/user-role.enum";
import { Listing } from "src/listings/entities/listing.entity";
import { Notification } from "src/notifications/entities/notification.entity";
import { Rating } from "src/ratings/entities/rating.entity";
import { Reservation } from "src/reservations/entities/reservation.entity";
import { Column, Entity, ManyToMany, OneToMany, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class User {

    @PrimaryGeneratedColumn()
    id: number;

    @Column({
        unique: true
    })
    username: string;

    @Column({
        unique: true
    })
    @IsEmail()
    email: string;

    @Column()
    password: string;

    @Column()
    salt: string;

    @Column()
    firstName: string;

    @Column()
    lastName: string;

    @Column({
        default:'https://res.cloudinary.com/smtanimur/image/upload/v1658841812/mushfiqTanim/user_qcrqny_kcgfes.svg',
        
    })
    avatr_url: string;

    @Column()
    phoneNumber: string;

    @Column({
        type: 'enum',
        enum: UserRoleEnum,
        default: UserRoleEnum.USER
    })
    role: string;

    @Column({
        default:true
    })
    isValid: boolean;
    
    @Column({
        default: false
    })
    hasUnseenNotif: boolean;   

    @Column()
    dob: Date;

    @Column({
        type: 'enum',
        enum: CountryEnum,
        
    })
    country: string;

    @Column(
        {
            type: 'enum',
            enum:LangaugesEnum
        }
    )
    languages: [string]
    
    @OneToMany(
        type => Reservation,
        reservation => reservation.user,
        {
            cascade: true,
            nullable: true,
            eager: true
        }
    )
    reservations: Reservation[]

    @OneToMany(
        () => Listing,
        listing => listing.owner,
        {
            cascade: true,
            nullable: true,
            eager: false
        }
    )
    listings: Listing[]

    @OneToMany(
        () => Accomodation,
        accomodation => accomodation.user,
        {
            cascade: true,
            nullable: true,
            eager: false
        }
    )
    accomodations: Accomodation[]

    @ManyToMany(
        () => Listing,
        favoris => favoris.users,
        {
            cascade: true,
            nullable: true,
            eager: false
        }
    )
    favoris: Listing[]
    
    @OneToMany(
        () => Notification,
        (notification) => notification.user,
        {
            eager: false,
            nullable: true,
            cascade:true
        }
    )
    notifications: Notification[]
    
    @OneToMany(
        () => Rating,
        rating=> rating.user,
        {
            eager: false,
            nullable: true,
            cascade:true
        }
    )

    ratings: Rating[]

    @OneToMany(
        () => Comment,
        comment => comment.user,
        {
            eager: false,
            nullable: true,
            cascade:true
        }
    )
    comments: Comment[]
    
    
}
