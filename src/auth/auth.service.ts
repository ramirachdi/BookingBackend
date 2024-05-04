import { ConflictException, Injectable, NotFoundException } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { InjectRepository } from '@nestjs/typeorm';
import { User } from 'src/users/entities/user.entity';
import { Repository } from 'typeorm';
import * as bcrypt from 'bcrypt';
import { CreateUserDto } from 'src/users/dto/create-user.dto';
import { LoginCredentialsDto } from '../users/dto/login-cerdentials.dto';

@Injectable()
export class AuthService {
  constructor(
    @InjectRepository(User)
    private userRepository: Repository<User>,
    private jwtService: JwtService
  ) { }

  async subscribe(userData: CreateUserDto): Promise<Partial<User>> {
    const { name, password, email, phoneNumber } = userData;
    const user = this.userRepository.create({
      ...userData,
    });
    user.salt = await bcrypt.genSalt();
    user.password = await bcrypt.hash(password, user.salt);


    try {
      await this.userRepository.save(user);
    } catch (e) {
      throw new ConflictException(`le mail doit etre unique`);
    }
    return {
      id: user.id,
      name: name,
      email: email,
      phoneNumber: phoneNumber,
    };
  }

  async login(credentials: LoginCredentialsDto) {
    const { login, password } = credentials;
    const user = await this.userRepository.createQueryBuilder("user")
      .where("user.email= :login",
        { login })
      .getOne();
    if (!user) {
      throw new NotFoundException('email ou password erronée');
    }
    const match = await bcrypt.compare(password, user.password)
    if (match) {
      const payload = {
        name: user.name,
        email: user.email,
        role: user.role,
      }
      const jwt = await this.jwtService.sign(payload);
      return {
        "token": jwt
      }
    } else {
      throw new NotFoundException('username ou password erronée');
    }
  }
}
