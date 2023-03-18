import { Module } from '@nestjs/common';


import { TypeOrmModule } from '@nestjs/typeorm';
import { RegisterController } from './controllers/registerUser.controller';
import { User } from './entities/user.entity';

import { RegisterService } from './service/registerUser.service';

@Module({
  imports: [
  
  TypeOrmModule.forFeature([User])
  ],
  providers: [RegisterService],
  controllers: [RegisterController]
})
export class RegisterModule {}
