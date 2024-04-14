import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { AccomodationsService } from './accomodations.service';
import { CreateAccomodationDto } from './dto/create-accomodation.dto';
import { UpdateAccomodationDto } from './dto/update-accomodation.dto';

@Controller('accomodations')
export class AccomodationsController {
  constructor(private readonly accomodationsService: AccomodationsService) {}

  @Post()
  create(@Body() createAccomodationDto: CreateAccomodationDto) {
    return this.accomodationsService.create(createAccomodationDto);
  }

  @Get()
  findAll() {
    return this.accomodationsService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.accomodationsService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateAccomodationDto: UpdateAccomodationDto) {
    return this.accomodationsService.update(+id, updateAccomodationDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.accomodationsService.remove(+id);
  }
}
