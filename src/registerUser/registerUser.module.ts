import { Module } from '@nestjs/common';


import { TypeOrmModule } from '@nestjs/typeorm';
import { User } from 'src/entities/user.entity';
import { RegisterController } from './controllers/registerUser.controller';


import { RegisterService } from './service/registerUser.service';

@Module({
  imports: [
  
  TypeOrmModule.forFeature([User])
  ],
  providers: [RegisterService],
  controllers: [RegisterController]
})
export class RegisterModule {}
