import { IsNotEmpty } from "class-validator";

export class CreateListingDto {

    @IsNotEmpty()
    adress: string;

    @IsNotEmpty()
    price: number;

    @IsNotEmpty()
    capacity: number

    @IsNotEmpty()
    rooms: number;

    @IsNotEmpty()
    bathrooms: number;

    @IsNotEmpty()
    type: string

    @IsNotEmpty()
    title: String;

    @IsNotEmpty()
    description: String;

}
