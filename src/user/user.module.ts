import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Usr } from 'src/entities/user.entity';
import { UserController } from './controller/user.controller';
import { UserService } from './service/user.service';

@Module({
  imports: [
  
    TypeOrmModule.forFeature([Usr])
    ],
  controllers: [UserController],
  providers: [UserService]
})
export class UserModule {}
