import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { UsersController } from './users.controller';
import { User } from './entities/user.entity';
import { UsersService } from './users.service';
@Module({
  imports: [
    TypeOrmModule.forFeature([User]), // Register the User entity with TypeORM
  ],
  controllers: [UsersController], // Add the UserController
  providers: [UsersService], // Add the UserService
})
export class UsersModule {}
