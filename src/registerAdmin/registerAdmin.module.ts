import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Admin } from 'src/entities/admin.entity';
import { RegisterAdminController } from './controllers/registerAdmin.controller';
import { RegisterAdminService } from './service/registerAdmin.service';


@Module({
  imports: [
  
  TypeOrmModule.forFeature([Admin])
  ],
  providers: [RegisterAdminService],
  controllers: [RegisterAdminController]
})
export class RegisterAdminModule {}
