import { Module } from '@nestjs/common';


import { TypeOrmModule } from '@nestjs/typeorm';
import { Usr } from 'src/entities/user.entity';
import { RegisterController } from './controllers/registerUser.controller';


import { RegisterService } from './service/registerUser.service';

@Module({
  imports: [
  
  TypeOrmModule.forFeature([Usr])
  ],
  providers: [RegisterService],
  controllers: [RegisterController]
})
export class RegisterModule {}
