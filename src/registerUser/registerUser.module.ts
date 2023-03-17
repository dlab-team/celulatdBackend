import { Module } from '@nestjs/common';


import { TypeOrmModule } from '@nestjs/typeorm';
import { RegisterController } from './controllers/registerUser.controller';
import { Usuario } from './entities/registerUser.entity';
import { RegisterService } from './service/registerUser.service';

@Module({
  imports: [
  
  TypeOrmModule.forFeature([Usuario])
  ],
  providers: [RegisterService],
  controllers: [RegisterController]
})
export class RegisterModule {}
