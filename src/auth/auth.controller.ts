import { Body, Controller, Post } from '@nestjs/common';
import { AuthService } from './auth.service';
import { CreateUserDto } from 'src/users/dto/create-user.dto';
import { LoginCredentialsDto } from 'src/users/dto/login-cerdentials.dto';

@Controller('auth')
export class AuthController {
    constructor(private readonly authService: AuthService) { }

    @Post()
    register(@Body() createUserDto: CreateUserDto) {
      return this.authService.subscribe(createUserDto);
    }
  
    @Post('login')
    login(
      @Body() credentials:LoginCredentialsDto
    ) {
      return this.authService.login(credentials);
    }
}
