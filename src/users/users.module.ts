import { Module } from '@nestjs/common';
import { UsersService } from './users.service';
import { UsersController } from './users.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { User } from './entities/user.entity';
import { Employee } from './entities/emoloyee.entity';

@Module({
  imports: [TypeOrmModule.forFeature([User, Employee])],
  controllers: [UsersController],
  providers: [UsersService],
})
export class UsersModule {}
