import {
  Controller,
  Get,
  Post,
  Body,
  Param,
  Put,
  Delete,
  Res,
} from '@nestjs/common';
import { UsersService } from './users.service';
import { CreateUserDto } from './dto/user.dto';
import { Response } from 'express';

@Controller('users')
export class UsersController {
  constructor(private readonly userService: UsersService) {}
  @Post('signup')
  async signup(@Body() createUserDto: CreateUserDto, @Res() res: Response) {
    return await this.userService.signup(createUserDto, res);
  }
}
