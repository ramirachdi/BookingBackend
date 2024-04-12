import { IsEmail } from "class-validator";
import { CountryEnum } from "src/enums/countries.enum";
import { LangaugesEnum } from "src/enums/languages.enum";
import { UserRoleEnum } from "src/enums/user-role.enum";
import { Reservation } from "src/reservations/entities/reservation.entity";
import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from "typeorm";

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

    
    
}
