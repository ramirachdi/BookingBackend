import { Injectable } from '@nestjs/common';
import { UpdateUserDto } from './dto/update-user.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { User } from './entities/user.entity';
import { Repository } from 'typeorm';
import { CrudService } from 'src/common/services/crud.service';

@Injectable()
export class UsersService extends CrudService<User> {

  constructor(
    @InjectRepository(User)
    private userRepository: Repository<User>,
  ) {
    super(userRepository)
  }

  findAll() {
    return super.findAll();
  }

  findOne(id: number) {
    return super.findOne(id);
  }
  

  update(id: number, updateUserDto: UpdateUserDto) {
    return super.update(id, updateUserDto);
  }

  remove(id: number) {
    return super.remove(id);
  }
}
