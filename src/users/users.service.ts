import { HttpStatus, Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { User } from './entities/user.entity';
import { CreateUserDto } from './dto/user.dto';
import { Response } from 'express';

@Injectable()
export class UsersService {
  constructor(
    @InjectRepository(User)
    private userRepository: Repository<User>,
  ) {}
  async signup(createUserDto: CreateUserDto, res: Response) {
    try {
      const user = await this.userRepository.findOne({
        where: { email: createUserDto.email },
      });
      if (user) {
        return res.status(HttpStatus.BAD_REQUEST).json({
          success: false,
          message: 'This email is already registered.',
        });
      }
      const newUser = this.userRepository.create(createUserDto);
      await this.userRepository.save(newUser);
      return res.status(HttpStatus.CREATED).json({
        success: true,
        message: 'User created successfully.',
        data: newUser,
      });
    } catch (err) {
      return res.status(HttpStatus.INTERNAL_SERVER_ERROR).json({
        success: false,
        message: err.message,
      });
    }
  }
}
