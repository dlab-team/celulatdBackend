import { Module } from '@nestjs/common';

import { AdminService } from './service/admin.service';
import { AdminController } from './controllers/admin.controller';
import { Usuario } from './entities/admin.entity';
import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
  imports: [
  
  TypeOrmModule.forFeature([Usuario])
  ],
  providers: [AdminService],
  controllers: [AdminController]
})
export class AdminModule {}
