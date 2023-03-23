import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Admin } from 'src/entities/admin.entity';
import { AdminLoginController } from './controller/adminlogin.controller';
import { AdminLoginService } from './service/adminlogin.service';

@Module({
  imports: [
    
    TypeOrmModule.forFeature([Admin])
    ],
    providers: [AdminLoginService],
    controllers: [AdminLoginController]
})
export class AdminloginModule {}


