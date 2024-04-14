import { AccomodationEnum } from "src/enums/accomodation.enum";
import { User } from "src/users/entities/user.entity";
import { Column, ManyToOne, PrimaryGeneratedColumn, } from "typeorm";

export class Accomodation {

    @PrimaryGeneratedColumn()
    id: string;

    @Column()
    adress: string;

    @Column()
    name: string;

    @Column()
    capacity:number

    @Column()
    rooms: number;

    @Column()
    surface: number
    
    @Column({
        type: 'enum',
        enum:AccomodationEnum,
    })
    type: string
    
    @ManyToOne(
        () => User,
        user=> user.accomodations,
        {
            eager: true,
            nullable:false
        }
    )
    user:User

}
