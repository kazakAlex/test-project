import { AuthService } from './auth.service';
import { CreateUserDto } from '../users/dto/create-user-dto';
import { Body, Controller, Post } from '@nestjs/common';
import { ApiTags } from '@nestjs/swagger';
import { LoginUserDto } from 'src/users/dto/login-user-dto';

@ApiTags('Авторизация')
@Controller('auth')
export class AuthController {

    constructor(private authService: AuthService) {}

    @Post('/signup')
    signUp(@Body() userDto: CreateUserDto) {
        return this.authService.signUp(userDto)
    }

    @Post('/login')
    login(@Body() userDto: LoginUserDto) {
        return this.authService.login(userDto)
    }
}
