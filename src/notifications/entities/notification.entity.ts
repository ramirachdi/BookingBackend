import { User } from "src/users/entities/user.entity";
import { Column, Entity, ManyToOne, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class Notification { 
    @PrimaryGeneratedColumn()
    id: string;

    @Column()
    content: string
    
    @Column()
    isSeen: boolean
    
    @Column()
    link: string
    
    @Column()
    type: string
    
    @ManyToOne(
        () => User,
        (user) => user.notifications,
        {
            eager: false,
            nullable: false,

        }
    )
    user:User
}
