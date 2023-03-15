import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { adminController } from './admin.controller';
import { AdminService } from './admin.service';
import { Admin } from './admin.entity';

@Module({
    imports: [TypeOrmModule.forFeature([Admin])],
    controllers: [adminController],
    providers: [AdminService],

})
export class adminModules {}
