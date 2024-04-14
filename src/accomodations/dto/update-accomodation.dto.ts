import { PartialType } from '@nestjs/mapped-types';
import { CreateAccomodationDto } from './create-accomodation.dto';

export class UpdateAccomodationDto extends PartialType(CreateAccomodationDto) {}
