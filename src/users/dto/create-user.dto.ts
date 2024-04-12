import { IsEmail, IsNotEmpty, IsOptional } from "class-validator";
import { UserRoleEnum } from "../../enums/user-role.enum";

export class CreateUserDto {
    @IsNotEmpty()
    username: string;

    @IsNotEmpty()
    @IsEmail()
    email: string;

    @IsNotEmpty()
    password: string;

    @IsOptional()
    role: UserRoleEnum;
    
    @IsNotEmpty()
    firstName: string;

    @IsNotEmpty()
    lastName: string;

    @IsOptional()
    avatr_url: string;

    @IsNotEmpty()
    phoneNumber: string;

    @IsNotEmpty()
    dob: Date;

    @IsNotEmpty()
    country: string;

    @IsNotEmpty()
    languages: [string]
}
